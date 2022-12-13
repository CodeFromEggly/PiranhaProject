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


/* Find gas */

// Uses Eth Gas Station API.
import axios from 'axios';
const response = await axios('https://ethgasstation.info/api/ethgasAPI.json?');

// The api seems to return 10xGwei
let fastestGwei = (response.data["fastest"])/10;
console.log(fastestGwei)



/* Equation: */

// For speed:
let gasPrice = fastestGwei;

predictedMargin = sellPrice - (cost + (2 * gasPrice) + marketRoyalties + collectionRoyalties);





/* Filing listings */
// On detect listings:

    // Add row to quickData table:

    // Query quickData to find out its ID

    // Add row to moreData using quick's ID as keyID
