import os
from flask import Flask
from dotenv import load_dotenv, find_dotenv


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URI')

def create_db():
    with app.app_context():
        db.create_all()

# ejecuta el back-end
if __name__ == '__main__':
    load_dotenv(find_dotenv())
    from routes import *
    create_db()
    app.run()
