import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime

app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure to use SQLite database
#db = SQL("sqlite:///database.db")

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/")
def index():
    print("Youre at the INDEX")    

    # renders template index.html
    # Shows current set parameters from json file
    return render_template("index.html")


@app.route("/conditions", methods=["GET", "POST"])
def conditions():
    # New conditions entered. Change .json and redirect to index
    if request.method == "POST":
        print("running conditions() ")
        return redirect("/")
    
    # Load conditions .html
    else:
        return render_template("conditions.html")






if __name__ == "__main__":
    app.run()