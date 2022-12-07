# Piranha
#### Video Demo:  <URL HERE>
#### Description:

The above video and following description describe the purpose and creation of CodeWithEggly and sgsmi's CS50 final project, the Piranha.
Piranha will be a script that will notify us, via email or otherwise, of new listings on OpenSea. It will do this by utilisting OpenSea's Stream API. 
There will be options for narrowing the script's alerts to specific collections and to within a specific price range.

#### app.py
app.py renders a front-page which displays featured listings. Its '/conditions' route allows selecting of the script's search terms which are saved in a json file. Currently the conditions form allows selction of:
  - Collection
  - Trading Volume
  - Minimum and Maximum ETH price
  - Margin between listing and WETH offers
  - Number of WETH offers
  - Availability of Sudoswap pool for listing's contract.

#### mainstream.js
mainstream.js will interact with stream-api and filter listings based upon the conditions passed to it.



#### piranha.db
Three tables exist in the database, as follows:
CREATE TABLE collections(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    slug TEXT NOT NULL,
    address TEXT NOT NULL,
    fees INT
);


CREATE TABLE keyData (
    id INTEGER  PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    token TEXT NOT NULL,
    collection TEXT NOT NULL,
    price INT,
    bestWETH INT,
    gas INT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(collection) REFERENCES collections(name)
);


CREATE TABLE moreData (
    id INTEGER PRIMARY KEY,
    suspicious TEXT,
    traitFloor INT,
    rarity INT,
    image TEXT,
    sudoswap INT,
    FOREIGN KEY(id) REFERENCES keyData(key)
);

