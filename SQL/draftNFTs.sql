


-- Rando collection:
INSERT INTO collections (name, slug, address, fees) VALUES ('MartianPLeague', 'MartianPLeague', '0x495f947276749ce646f68ac8c248420045cb7b5e', 0.02);


INSERT INTO collections (name, slug, address, fees)
    VALUES ('Plague', 'the-plague', '0x8c3fb10693b228e8b976ff33ce88f97ce2ea9563', 10);

-- Some random NFTS with semi-made-up data

INSERT INTO keyData (name, token, collection, price, bestWETH, gas)
    VALUES ('MPL #201', '201', 'MartianPLeague', 0.05, 0.9, 0.012);

INSERT INTO moreData (keyid, suspicious, rarity, image, sudoswap)
    VALUES (1, 1, 879, 'https://i.seadn.io/gae/10SdecGr3Z_qHFV1_lTo2s7FI3ds1izREIinUkpHAah6-XyUsc8Bmv__umUHdjqxbMccYfemHUHi81QRMLQVit30RQnKE2kMdGND?auto=format&w=1920', 0);


INSERT INTO keyData (name, token, collection, price, bestWETH, gas)
    VALUES ('MPL #2014', '2014', 'MartianPLeague', 0.06, 0.11, 0.022);

INSERT INTO moreData (keyid, suspicious, rarity, image, sudoswap)
    VALUES (2, 1, 123, 'https://i.seadn.io/gae/Bi-eQHDAPSR1eNsaYZzmp3HZlmmUZctZog_ZG31EuqFW39RrJlWKAv8-EnkCQRIsfqLHNKFInkcF1rVQXeg5nKRs59eXxrhX7u_BMw?auto=format&w=1920', 0);


INSERT INTO keyData (name, token, collection, price, bestWETH, gas)
    VALUES ('The Plague #10807', '10807', 'Plague', 0.215, 0.249, 0.051);

INSERT INTO moreData (keyid, suspicious, rarity, image, sudoswap)
    VALUES (3, 0, 3124, 'https://i.seadn.io/gae/AqYutw_dHa6Sqn_ZH-QtvPFxi5tJ0UeR2NlU4Bw4a877wp3gMwDnWdFpqW6K1EhJTCpM26exXKDkKAAnZSdZaoEf5z0RLCkiA_IACw?auto=format&w=1920', 1);



INSERT INTO keyData (name, token, collection, price, bestWETH, gas)
    VALUES ('The Plague #6058', '6058', 'Plague', 0.215, 0.3, 0.00795);

INSERT INTO moreData (keyid, suspicious, rarity, image, sudoswap)
    VALUES (4, 0, 7735, 'https://i.seadn.io/gae/VlzY9xMPLWJiIf_1_qhYw0zfHBZBMwLWcVSSOenMhbTW-kxEtgJ-jO2opAnJ9vzf3YpUrC5Lal3OQh7nmHUCvTWZol9Z73XNNjEmVg?auto=format&w=1920', 1);


INSERT INTO keyData (name, token, collection, price, bestWETH, gas)
    VALUES ('The Plague #5765', '5765', 'Plague', 0.215, 0.3, 0.00795);

INSERT INTO moreData (keyid, suspicious, rarity, image, sudoswap)
    VALUES (5, 0, 1234, 'https://i.seadn.io/gae/q4las4qiXegL3dzl59jOobekevcUfdigmsoH3nzPbCRj-pSEYOk89ND56EfenSC3XW_a-08mBmIzCf32UUiaYUJx1QVNCCpe0amg?auto=format&w=1920', 1);



UPDATE keyData
SET bestWETH = 0.215
WHERE collection = 'Plague';