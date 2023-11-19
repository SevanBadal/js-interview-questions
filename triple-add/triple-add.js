// define tripleAdd 
// tripleAdd(10)(20)(30) 

const tripleAdd = x => y => z => {
    if(isNaN(x) || isNaN(y) || isNaN(z)) {
        throw new Error('Parameter is not a number!');
    }
    return x + y + z
}

module.exports = tripleAdd;