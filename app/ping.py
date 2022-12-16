"""
When run, this file will load a discord bot, ping a user, and then shut down.
I don't want it to run all the time (for the moment, atleast)
"""

print("PING PING PING PING")


import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!hello'):
        await message.channel.send('Hello!')

client.run('MTA1MzM2OTg5ODUxODIwNDQ2Ng.GHNiNv.D3yJqUgl065nZshNJHB1Jh7vchSHOReKWEdyUY')
