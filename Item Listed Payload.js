// ITEM LISTED (from Stream-API)

// Example listing:
let listed = {
    "event":"item_listed",
    "sent_at":"2022-12-01T16:54:24.212517+00:00",
    "payload":{
       "event_type":"item_listed",
       "payload":{
          "base_price":"5000000000000000",
          "collection":{
             "slug":"boredfrens"
          },
          "event_timestamp":"2022-12-01T16:54:23.974726+00:00",
          "expiration_date":"2022-12-02T16:54:22.000000+00:00",
          "is_private":false,
          "item":{
             "chain":{
                "name":"ethereum"
             },
             "metadata":{
                "animation_url":null,
                "image_url":"https://i.seadn.io/gae/6X_iRBPw33gDSZFlHxBBs6pSfQU8Z8c1ECpRV_Nru-fDvO6ORUky5GhpXeAtTR2ZNvkf8vElpW5-4NbdVOBOPr3aF1P_1Z-Mid6LLF8?w=500&auto=format",
                "metadata_url":null,
                "name":"Devil Frens #18682"
             },
             "nft_id":"ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/74630152366364009569833059154376861594951644105207272687495389092116791558145",
             "permalink":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/74630152366364009569833059154376861594951644105207272687495389092116791558145"
          },
          "listing_date":"2022-12-01T16:54:22.000000+00:00",
          "listing_type":null,
          "maker":{
             "address":"0xa4ff2b59d72f76ee51051196d25e3998cdc579c6"
          },
          "order_hash":"0xccbf2c8bc22d06fc16e118e5a865377d8b2fe4ea485cd0cb713899cca17d8964",
          "payment_token":{
             "address":"0x0000000000000000000000000000000000000000",
             "decimals":18,
             "eth_price":"1.000000000000000",
             "name":"Ether",
             "symbol":"ETH",
             "usd_price":"1287.160000000000082000"
          },
          "protocol_data":{
             "parameters":{
                "conduitKey":"0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
                "consideration":[
                   {
                      "endAmount":4375000000000000,
                      "identifierOrCriteria":0,
                      "itemType":0,
                      "recipient":"0xa4fF2b59D72f76eE51051196D25e3998CDC579c6",
                      "startAmount":4375000000000000,
                      "token":"0x0000000000000000000000000000000000000000"
                   },
                   {
                      "endAmount":125000000000000,
                      "identifierOrCriteria":0,
                      "itemType":0,
                      "recipient":"0x0000a26b00c1F0DF003000390027140000fAa719",
                      "startAmount":125000000000000,
                      "token":"0x0000000000000000000000000000000000000000"
                   },
                   {
                      "endAmount":500000000000000,
                      "identifierOrCriteria":0,
                      "itemType":0,
                      "recipient":"0xa7d5053684Aa3BbD60A6473fC97B5942E35020b7",
                      "startAmount":500000000000000,
                      "token":"0x0000000000000000000000000000000000000000"
                   }
                ],
                "counter":0,
                "endTime":1670000062,
                "offer":[
                   {
                      "endAmount":1,
                      "identifierOrCriteria":7.463015236636401e+76,
                      "itemType":3,
                      "startAmount":1,
                      "token":"0xA604060890923Ff400e8c6f5290461A83AEDACec"
                   }
                ],
                "offerer":"0xa4fF2b59D72f76eE51051196D25e3998CDC579c6",
                "orderType":3,
                "salt":9.481733903281769e+37,
                "startTime":1669913662,
                "totalOriginalConsiderationItems":3,
                "zone":"0x004C00500000aD104D7DBd00e3ae0A5C00560C00",
                "zoneHash":"0x3000000000000000000000000000000000000000000000000000000000000000"
             },
             "signature":"0xd45d9cf39dc06cbd5c6b5419bf959f0a33e8d6ba3bec0891825f3e126ff1fc5d55b80c8c642e542cdb76c93f3886fd0de1f2254f32a08f06d655ebd58c359f53",
             "use_lazy_mint_adapter_for_shared_storefront":true
          },
          "quantity":1,
          "taker":null
       },
    }
 }

 // IS IT RELEVANT?

 // TODO Are we searching by collection? Volume, etc..

 // TODO Within price range?


 // TODO PROFITABILITY CALCULATIONS:

 // Factors:

 // - Price
   var price = parseInt(listed['payload']['payload']['payment_token']['eth_price']);
 // - Gas
   // Uses Eth Gas Station API.
   import axios from 'axios';
   const response = await axios('https://ethgasstation.info/api/ethgasAPI.json?');

   // The api seems to return 10xGwei
   let fastestGwei = (response.data["fastest"])/10;
   console.log(fastestGwei)
   var fastestETH = fastestGwei / 1000000000;
   
 // - Collection fees etc..
 // + Floor price or Sudoswap




 console.log("Collection:")
 console.log(listed['payload']['payload']['collection']['slug'])

 console.log("Name:")
 console.log(listed['payload']['payload']['item']['metadata']['name'])

 console.log("Price:")
 console.log(listed['payload']['payload']['payment_token']['eth_price'] + "ETH    |    " + "$" +  listed['payload']['payload']['payment_token']['usd_price'])

 console.log(`Cost to buy with fastest gas:`)
 console.log(`${fastestETH + price} ETH`)
