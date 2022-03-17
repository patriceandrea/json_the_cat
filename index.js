const { fetchBreedDescription } = require('./breedFetcher');
console.log(process.argv);
const inputParams = process.argv[2];
console.log('InputPrams', inputParams);
const breedName = inputParams[0];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return ('Error fetch details:', error);
  } else {
    console.log('index description', desc);
    return desc;
  }
});

// fetchBreedDescription(breedName);