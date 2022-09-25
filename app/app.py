from flask import Flask, Response, request, render_template
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
import _mysql_connector
import json


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:2412Lulu.@localhost/cadastro'
app.config['SECRET_KEY'] = 'secret'

login_manager = LoginManager(app)
db = SQLAlchemy(app)
