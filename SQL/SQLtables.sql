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
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    keyid INTEGER,
    suspicious INT,
    traitFloor INT DEFAULT NULL,
    rarity INT,
    image TEXT,
    sudoswap INT,
    FOREIGN KEY(keyid) REFERENCES keyData(id)
);


/* For Tracker, WIP */
CREATE TABLE holdings (
    id INTEGER PRIMARY KEY,
    owner TEXT NOT NULL,
    image TEXT NOT NULL,
    name TEXT NOT NULL,
    collection TEXT NOT NULL,
    token_id TEXT NOT NULL,
    purchase_price REAL NOT NULL,
    current_price REAL NOT NULL,
    pnl REAL NOT NULL,
    os_link TEXT NOT NULL,
    bought_time DATETIME NOT NULL,
    sold_time DATETIME,
    hold_time INTEGER NOT NULL
);