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

