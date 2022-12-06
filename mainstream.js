/*
const WebSocket = require('ws');
const { OpenSeaStreamClient } = require('@opensea/stream-js');

const client = new OpenSeaStreamClient({
    //token: , //Our token
    connectOptions: {
        transport: WebSocket
    }


});


// Listen for new listenings from all ('*') channels
client.onItemListed('*', (event) => {
    console.log(event);
});
*/

// Find EVM gas right now. Uses Eth Gas Station API.
// We use axios. All the homies hate fetch.
import axios from 'axios';
const response = await axios('https://ethgasstation.info/api/ethgasAPI.json?');
let fastestGwei = (response.data["fastest"])/10;
console.log(fastestGwei)


// Call the Eth Gas Station API
