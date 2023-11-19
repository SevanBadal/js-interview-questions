const tripleAdd = require('./triple-add.js');

test('adds 10 20 and 30 to equal 60', () => {
    expect(tripleAdd(10)(20)(30)).toBe(60);
});