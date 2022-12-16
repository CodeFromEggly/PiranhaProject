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
    conn.row_factory = sqlite3.Row
    db = conn.cursor()


    # Provide all the data for last 10 entries
    all = db.execute("SELECT * FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid LEFT JOIN collections ON keyData.collection = collections.name ORDER BY keyData.timestamp DESC LIMIT(10)").fetchall()
    for row in all: row = dict(row)
    #for row in all: print(row)

    # The graph in emptyCard div wants data on the card name, when it was detected, and its price. FUTURE: [basic margin (price - best WETH)] FUTURE: [PROFIT MARGIN]
    graphData = db.execute("SELECT name, timestamp, price FROM keyData ORDER BY timestamp DESC limit(10)").fetchall()
    for row in graphData: row = dict(row)
    # The grpah wants x, y data arrays and labels for each point
    x = []
    y = []
    labels = []
    for row in graphData:
        x.append(row['timestamp'])
        y.append(row['price'])
        labels.append(row['name'])

    # Re-write graphData to contain the arrays that we want to plot
    graphData = [x, y, labels]


    # renders template index.html
    return render_template("index.html", all=all, graphData=graphData)


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


@app.route("/ping", methods=["GET", "POST"])
def ping():
    if request.method == "POST":
        # It's time to ping the user.
        import subprocess
        subprocess.run(['python', 'ping.py'])
        return redirect(request.referrer)



@app.route("/poop")
def poop():
    # Graphs at the moment
    #SQLite3 query to detect listings.
    conn = sqlite3.connect('piranha.db')
    conn.row_factory = sqlite3.Row
    db = conn.cursor()

    graphData = [40,  75, 110, 85, 90, 111, 50]
    graphData = db.execute("SELECT name, timestamp, price FROM keyData ORDER BY timestamp DESC limit(10)").fetchall()
    for row in graphData: row = dict(row)
    for row in graphData: row = print(row)
    # The graph wants x, y data arrays and labels for each point. Also converts from being a sqlite3.Row object
    x = []
    y = []
    labels = []
    for row in graphData:
        x.append(row['timestamp'])
        y.append(row['price'])
        labels.append(row['name'])

    # Re-write graphData to contain the arrays that we want to plot
    graphData = [x, y, labels]

    for row in graphData: print(row)

    return render_template("poop.html", graphData=graphData)



if __name__ == "__main__":
    app.run()