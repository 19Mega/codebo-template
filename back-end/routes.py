from flask import request, jsonify
from app import app
from models import User, db

@app.route('/')
def hello_world():
    return jsonify(message='Welcome Home')

@app.route('/signup', methods=['POST'])
def signup_user():
    data = request.get_json()
    new_user = User(name=data['name'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(message='User created')

@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and user.password == data['password']:
        return jsonify(message='Login successful')
    return jsonify(message='Invalid email or password'), 401
