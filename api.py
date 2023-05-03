from flask import Flask, jsonify
from flask_cors import CORS
from faker import Faker
import time

app = Flask(__name__)
fake = Faker()
CORS(app)

@app.route('/random-data')
def random_data():
    data_list = []

    for _ in range(0, 10):
        data = {
            'name': fake.name(),
            'email': fake.email(),
            'address': fake.address(),
            'phone': fake.phone_number(),
            'job': fake.job()
        }
        data_list.append(data)
    return jsonify(data_list)

if __name__ == '__main__':
    app.run()
