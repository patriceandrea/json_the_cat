
// command line arg

const args = process.argv.slice(2);
// require request library
const request = require('request');




const fetchBreedDescription = function (breedName, callback) {
  const path = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(path, (error, response, body) => {
    if (error) {
      return callback(error, null);

    }
    const data = JSON.parse(body);
    const breeds = data[0];

    if (breeds.description) {

      return callback(null, breeds.description);

    } else {
      return callback(`No Description found for :${breed}`, null);
    }
  });
};


module.exports = { fetchBreedDescription };