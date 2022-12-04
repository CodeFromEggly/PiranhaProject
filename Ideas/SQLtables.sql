CREATE TABLE collections(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    address TEXT NOT NULL,
    grossfees INT
);


CREATE TABLE keyData (
    id INTEGER  PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    address TEXT NOT NULL,
    collectionAddress TEXT NOT NULL,
    price INT,
    bestWETH INT,
    gas INT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(collectionAddress) references collections(address)
);