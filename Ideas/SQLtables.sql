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
    FOREIGN KEY(collection) references collections(name)
);