import os

import json
import sqlite3
import pymysql
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime
from tokens import etherscan

app = Flask(__name__)

# Database connection configuration - currently only for Useful Links
db_host = 'localhost'
db_user = 'root'
db_password = 'root123'
db_name = 'piranha_db_1'

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/")
def index():
    # Displays 12 most recent NFTs nibbled

    #SQLite3 query to detect listings.
    conn = sqlite3.connect('piranha.db')
    conn.row_factory = sqlite3.Row
    db = conn.cursor()
    etherscan_api = etherscan


    # Provide all the data for last 12 entries
    all = db.execute("SELECT * FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid LEFT JOIN collections ON keyData.collection = collections.name ORDER BY keyData.timestamp DESC LIMIT(12)").fetchall()
    for row in all: row = dict(row)
    #for row in all: print(row)

    # The graph in emptyCard div wants data on the card name, when it was detected, and its price. FUTURE: [basic margin (price - best WETH)] FUTURE: [PROFIT MARGIN]
    graphData = db.execute("SELECT name, timestamp, price FROM keyData ORDER BY timestamp DESC limit(10)").fetchall()
    for row in graphData: row = dict(row)
    # The graph wants x, y data arrays and labels for each point
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
    return render_template("index.html", all=all, graphData=graphData, etherscan_api=etherscan_api)


@app.route("/conditions", methods=["GET", "POST"])
def conditions():
    etherscan_api = etherscan
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
        return redirect("/conditions")
    
    # Load conditions .html
    else:
        # Current conditions:  

        with open('search_conditions.json', 'r') as f:
            conditions = json.load(f)

        return render_template("conditions.html", conditions=conditions, etherscan_api=etherscan_api)


@app.route("/ping", methods=["GET", "POST"])
def ping():
    if request.method == "POST":
        # It's time to ping the user.
        import subprocess
        subprocess.run(['python', 'ping.py'])
        return redirect(request.referrer)



@app.route("/poop")
def poop():
    etherscan_api = etherscan
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

    return render_template("poop.html", graphData=graphData, etherscan_api=etherscan_api)

@app.route("/activity")
def activity():
    print('no db found')
    etherscan_api = etherscan

    #SQLite3 query to detect listings.
    conn = sqlite3.connect('piranha.db')
    conn.row_factory = sqlite3.Row
    db = conn.cursor()


    # Provide all the data for last 10 entries
    all = db.execute("SELECT * FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid LEFT JOIN collections ON keyData.collection = collections.name ORDER BY keyData.timestamp DESC").fetchall()
    all = [dict(row) for row in all]
    #for row in all: print(row)

    return render_template("activity.html", all=all, etherscan_api=etherscan_api)


@app.route("/tracker")
def tracker():
    etherscan_api = etherscan

    #SQLite3 query to detect listings.
    conn = sqlite3.connect('piranha.db')
    conn.row_factory = sqlite3.Row
    db = conn.cursor()
    # Provide all the data for last 10 entries
    holdings = db.execute("SELECT * FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid LEFT JOIN collections ON keyData.collection = collections.name ORDER BY keyData.timestamp DESC").fetchall()
    holdings = [dict(row) for row in holdings]
    #for row in all: print(row)
    conn.close()

    # MySQL Connect to piranha_db_1
    connection = pymysql.connect(host=db_host, user=db_user, password=db_password, database=db_name)
    cursor = connection.cursor(pymysql.cursors.DictCursor)
    # SQL query to fetch the links
    sql_query = "SELECT * FROM useful_links ORDER BY link_name ASC"
    cursor.execute(sql_query)
    # Fetch all the links from the query result
    links = cursor.fetchall()
    # Close the database connection
    cursor.close()
    connection.close()
    # Print the links to check if they are fetched correctly
    print(links)


    return render_template("tracker.html", holdings=holdings, etherscan_api=etherscan_api, links=links)


@app.route("/add-wallet", methods=["GET","POST"])
def addWallet():

    # Form has been submitted containing wallet info
    nickname = request.form.get("walletName")
    address = request.form.get("wallet")

    # Was there data in the form?
    if not nickname:
        print("No nickname")
        return redirect("/tracker?message=Add+wallet+nickname")

    if not address:
        print("no address")
        return redirect("/tracker?message=Add+wallet+address")
    
    # SQLite3
    conn = sqlite3.connect('piranha.db')
    conn.row_factory = sqlite3.Row
    db = conn.cursor()

    # Check if wallet or nickname exists already
    rows = db.execute("SELECT * FROM trackWallets WHERE (nickname = ?) OR (address = ?)", (nickname, address)).fetchall()
    rows = [dict(row) for row in rows]
    if len(rows) != 1:
        # Data already exists
        return redirect("/tracker?message=Wallet+already+exists")


    # Add wallet to database
    db.execute("INSERT INTO trackWallets (nickname, address) VALUES (?, ?)", (nickname, address))
    conn.commit()
    conn.close()

    return redirect("/tracker?message=New+wallet+success")

@app.route("/add-holding", methods=["GET", "POST"])
def addHolding():
    owner = request.form.get("owner")
    collAddress = request.form.get("collection-address")
    tokenID= request.form.get("token-id")

    # Form won't submit if the data is blank.
    # For now we can assume that nobody will act badly

    # Check for duplicate entries in database:
    # SQLite3
    conn = sqlite3.connect('piranha.db')
    conn.row_factory = sqlite3.Row
    db = conn.cursor()
    rows = db.execute("SELECT * FROM holdings WHERE (owner = ?) OR (collAddress = ?) OR (tokenID = ?)", (owner, collAddress, tokenID)).fetchall()
    rows = [dict(row) for row in rows]
    if len(rows) != 1:
        # Data already exists
        return redirect("/tracker?message=holder+already+exists")


    # Add wallet to database
    db.execute("INSERT INTO holders (owner, collAddress, tokenID) VALUES (?, ?, ?)", (owner, collAddress, tokenID))
    conn.commit()
    conn.close()


if __name__ == "__main__":
    app.run()