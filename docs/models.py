
from enum import unique
from unicodedata import name
from app import db, login_manager
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

@login_manager.user_loader
def get_user(user_id):
    return Usuario.query.filter_by(id = user_id).first()


class Usuario(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(86), nullable = False)
    email = db.Column(db.String(84), nullable = False, unique = True)
    senha = db.Column(db.String(128), nullable = False)

    def __init__(self, name, email, senha ):
        self.name = name
        self.email = email
        self.senha = generate_password_hash(senha)

    def verify_password(self, senha):
        return check_password_hash(self.senha, senha)


    def to_json(self):
        return {"id":self.id, "name": self.name, "email":self.email, "senha": self.senha}


db.create_all()