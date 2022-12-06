import axios from 'axios';

const response = await axios('https://ethgasstation.info/api/ethgasAPI.json?');
console.log(response.data)
let fastestGwei = (response.data["fastest"])/10;
console.log(fastestGwei)
