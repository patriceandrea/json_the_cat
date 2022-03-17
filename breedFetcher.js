
// command line arg

const args = process.argv.slice(2);
// require request library
const request = require('request');

// make a request function for breedFetcher.js



const breed = args[0];
const path = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

// console.log(url);
// console.log(path);
// step 1 make a request and receive a response
// step 2 make write content to file

const main = function (url) {

  request(url, (error, response, body) => {
    if (error) {
      return console.log(`Error: ${error}`);
    }
    const data = JSON.parse(body);
    const breeds = data[0];
    if (breeds.description) {
      console.log(breeds.description);
    } else {
      console.log(`Failed to :${breed}`);
    }
    //  console.log(data)

    // console.log(typeof data)

  });
};

main(path);