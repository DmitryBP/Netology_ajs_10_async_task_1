import GameSavingLoader from './GameSavingLoader.js';

export default GameSavingLoader.load()
  .then((saving) => {
    console.log(saving);
  })
  .catch((err) => {
    console.log(err.toString());
  });
