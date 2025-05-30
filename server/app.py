from flask import Flask, jsonify
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Get supabase credentials
text = os.getenv('TEST_NAME')

app = Flask(__name__)


@app.route('/')
def home():
    data = {
        "text": text
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
