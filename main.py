from flask import Flask, Response, request, render_template, redirect, url_for
from flask_login import LoginManager, login_user, logout_user
import json

from app import app, db
from models import Usuario

#Selecionar Tudo - GET
@app.route('/usuarios', methods = ["GET"])
def seleciona_usuarios():
    usuarios_objetos = Usuario.query.all()
    usuarios_json = [usuario.to_json() for usuario in usuarios_objetos]
    print(usuarios_json)
    return gera_response(200, "usuarios", usuarios_json, "ok")

#Selecionar individualmente - GET by id
@app.route('/usuarios/<id>', methods = ["GET"])
def seleciona_usuario(id):
    usuario_objeto = Usuario.query.filter_by(id=id).first()
    usuario_json = usuario_objeto.to_json()
    return gera_response(200, "usuario", usuario_json)

#Cadastrar - POST

@app.route('/usuario', methods = ["POST"])
def criar_usuario():
    body = request.get_json()

    try:
        usuario = Usuario(name=body["name"], email=body["email"], senha=body["senha"])
        db.session.add(usuario)
        db.session.commit()
        return gera_response(201, "usuario", usuario.to_json(), "Criado com sucesso")
    except Exception as e:
        print(e)
        return gera_response(400, "usuario", {}, "Erro ao cadastrar")

#Atualizar - PUT
@app.route('/usuario/<id>', methods = ["PUT"])
def atualiza_usuario(id):
    usuario_objeto = Usuario.query.filter_by(id=id).first()
    body = request.get_json()
    
    try:
        if('name' in body):
            usuario_objeto.name = body['name']
        if('email' in body):
            usuario_objeto.email = body['email']
        if('senha' in body):
            usuario_objeto.senha = body['senha']

        db.session.add(usuario_objeto)
        db.session.commit()
        return gera_response(200, "usuario", usuario_objeto.to_json(), "Atualizado com sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "usuario", {}, "Erro ao atualizar")

#Deletar - DELETE
@app.route('/usuario/<id>', methods = ["DELETE"])
def deleta_usuario(id):
    usuario_objeto = Usuario.query.filter_by(id=id).first()

    try:
        db.session.delete(usuario_objeto)
        db.session.commit()
        return gera_response(200, "usuario", usuario_objeto.to_json(), "Deletado com sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "usuario", {}, "Erro ao deletar")






#rotas do site

@app.route('/FGFut/')
def homepage():
    return render_template('index.html')

@app.route('/FGFut/cadastro')
def cadastrar():
    return render_template('cadastro.html')

@app.route('/FGFut/login', methods = ["GET", "POST"])
def entrar():

    if request.method == 'POST':
        body = request.get_json()
        email = body["email"]
        senha = body["senha"]
        user = Usuario.query.filter_by(email = email).first()
        print(user)
        

        if not user == None or not user.verify_password(senha):
            return redirect(url_for('entrar'))

        login_user(user)
        return redirect(url_for('jogo'))

    return render_template('login.html')

@app.route('/FGFut/logout')
def logout():
    logout_user()
    return redirect(url_for('login.html'))

@app.route('/FGFut/partidas')
def jogo():
    return render_template('partidas.html')

def gera_response(status, nome_do_conteudo, conteudo, mensagem=False):
    body = {}
    body[nome_do_conteudo] = conteudo
 
    if(mensagem):
        body["mensagem"] = mensagem

    return Response(json.dumps(body) , status = status, mimetype="application/json")


app.run(debug = True)

