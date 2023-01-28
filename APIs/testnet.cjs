const sdk = require('api')('@opensea/v1.0#7dtmkl3ojw4vb');

var result;
sdk.retrievingASingleCollectionTestnets({collection_slug: 'the-plague'})
.then(data => {
  result = data;
 })
 .then(() => {
  console.log(result);
 })
 .catch(err => console.error(err));

// TODO How many are listed?
console.log("////////// WHERE AM I? /////////////")
// TODO Find proce of most recent
