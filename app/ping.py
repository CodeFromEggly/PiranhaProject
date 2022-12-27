"""
When run, this file will load a discord bot, ping a user, and then shut down.
I don't want it to run all the time (for the moment, atleast)
"""
import discord
import sqlite3
import tokens

intents = discord.Intents.default()
client = discord.Client(command_prefix='!', intents=intents)

#SQLite3 query to detect listings.
conn = sqlite3.connect('piranha.db')
conn.row_factory = sqlite3.Row
db = conn.cursor()


# Provide all the data for last 10 entries
NFT = db.execute("SELECT token, collections.address FROM keyData INNER JOIN moreData ON keyData.id = moreData.keyid LEFT JOIN collections ON keyData.collection = collections.name ORDER BY keyData.timestamp DESC LIMIT(1)").fetchall()
#for row in NFT: row = dict(row)
NFT = [dict(row) for row in NFT]
NFT = NFT[0]

print(NFT)

link = f"https://opensea.io/assets/ethereum/{NFT['address']}/{NFT['token']}"



@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

    # Ping us in the commands channel (Id: 707990906803978271)::
    channel = client.get_channel(707990906803978271)
    # Me: <@371427291638530060>  Sam: <@488777165656031232>
    
    await channel.send(f"Hey, <@371427291638530060>, <@488777165656031232>  I found this: {link}")
    await client.close()


client.run(tokens.discord)



