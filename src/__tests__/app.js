import GameSavingLoader from '../js/GameSavingLoader.js';

test('Shud return value', () => GameSavingLoader.load().then((saving) => {
  expect(saving).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
}));
