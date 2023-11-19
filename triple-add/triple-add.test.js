const tripleAdd = require('./triple-add.js');

test('adds 10 20 and 30 to equal 60', () => {
    expect(tripleAdd(10)(20)(30)).toBe(60);
});

test('throws an error if a parameter is not a number', () => {
    expect(() => {
        tripleAdd('a')(20)(30);
    }).toThrow('Parameter is not a number!');

    expect(() => {
        tripleAdd(10)('b')(30);
    }).toThrow('Parameter is not a number!');

    expect(() => {
        tripleAdd(10)(20)('c');
    }).toThrow('Parameter is not a number!');
});