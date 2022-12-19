"""
When run, this file will load a discord bot, ping a user, and then shut down.
I don't want it to run all the time (for the moment, atleast)
"""
import discord
import sys

intents = discord.Intents.default()
client = discord.Client(command_prefix='!', intents=intents)

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

    # Ping us in the commands channel (Id: 707990906803978271)::
    channel = client.get_channel(707990906803978271)

    await channel.send(f"Hey, <@371427291638530060> <@488777165656031232>")
    await client.close()


client.run('MTA1MzM2OTg5ODUxODIwNDQ2Ng.G6-WUi.oxUInpMtkMGG6nCuG0yNyxe0G7sqIWxYvQfY1k')

