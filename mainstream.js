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

// The api seems to return 10xGwei
let fastestGwei = (response.data["fastest"])/10;
console.log(fastestGwei)


// On detect listings:

    // Add row to quickData table:

    // Query quickData to find out its ID

    // Add row to moreData using quick's ID as keyID
