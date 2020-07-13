from flask import Flask
import datetime
app = Flask(__name__)

@app.route('/')

def hello_world():
  return datetime.datetime.now().strftime("%m/%d %H:%m")

if __name__ == "__main__":
    app.debug = True
    app.run()