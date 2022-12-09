import os

import json
import sqlite3
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
    # Displays 5 most recent NFTs nibbled

    #SQLite3 query to detect listings.
    conn = sqlite3.connect('piranha.db')
    db = conn.cursor()

    # Provide key data from 5 most recent detections
    keyData = db.execute("SELECT * FROM keyData ORDER BY timestamp DESC LIMIT(5)")

    # Provide the linked moreData
    # Yes I'm know there are better ways to do this... But it was easy. I'll come back to it later.
    moreData = db.execute("SELECT * FROM moreData WHERE keyid IN (SELECT id FROM keyData ORDER BY timestamp DESC LIMIT(5)) ORDER BY (keyid) DESC")
    
    poopoo = db.execute("SELECT * FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid")
    # renders template index.html
    return render_template("index.html", keyData=keyData, moreData = moreData, poopoo=poopoo)


@app.route("/conditions", methods=["GET", "POST"])
def conditions():
    # New conditions entered. Change .json and redirect to index
    if request.method == "POST":

        
        
        conditions = {
            'collections': request.form.get("collection"),
            'volume': request.form.get("volume"),
            'minETH': request.form.get("minETH"),
            'maxETH': request.form.get("maxETH"),
            'margin': request.form.get("margin"),
            'numOffers': request.form.get("numOffers"),
            'sudoswap': request.form.get("sudoswap")
        }
        
        print("Conditions:")
        print(conditions)
        with open("search_conditions.json", "w") as file:
            json.dump(conditions, file)
        return redirect("/")
    
    # Load conditions .html
    else:
        return render_template("conditions.html")


@app.route("/shit")
def shit():
    # Displays 5 most recent NFTs nibbled

    #SQLite3 query to detect listings.
    conn = sqlite3.connect('piranha.db')
    db = conn.cursor()

    # Provide key data from 5 most recent detections
    keyData = db.execute("SELECT * FROM keyData ORDER BY timestamp DESC LIMIT(5)")
    poopy = "poopy"

    # Provide the linked moreData
    # Yes I'm know there are better ways to do this... But it was easy. I'll come back to it later.
    moreData = db.execute("SELECT * FROM moreData WHERE keyid IN (SELECT id FROM keyData ORDER BY timestamp DESC LIMIT(5)) ORDER BY (keyid) DESC")
    
    poopoo = db.execute("SELECT * FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid")
    # renders template index.html
    return render_template("shit.html", keyData=keyData, moreData = moreData, poopoo=poopoo, poopy=poopy)



if __name__ == "__main__":
    app.run()