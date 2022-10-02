import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const value = read()
        .then((res) => json(res));
      resolve(value);
    });
  }
}
