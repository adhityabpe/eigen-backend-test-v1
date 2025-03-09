
function countOccurrences(input, query) {
    return query.map(q => input.filter(item => item === q).length);
}

// Test cases
const INPUT1 = ['xc', 'dz', 'bbb', 'dz'];
const QUERY1 = ['bbb', 'ac', 'dz'];
console.log(countOccurrences(INPUT1, QUERY1));

const INPUT2 = ['apple', 'banana', 'apple', 'orange'];
const QUERY2 = ['apple', 'banana', 'grape'];
console.log(countOccurrences(INPUT2, QUERY2));

const INPUT3 = ['cat', 'dog', 'cat', 'cat', 'dog'];
const QUERY3 = ['cat', 'dog', 'mouse'];
console.log(countOccurrences(INPUT3, QUERY3)); 

