let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

console.log(re);
console.log(re.source);

// Using exec() - Retuen result in an array or null
const result = re.exec('VZAN2012hello World');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);
console.log(result.groups);

// test() - Returns true or false
const result = re.test('Hello World');
console.log(result);

// match() - Return result array or null
const str = 'Hello World';
const result = str.match(re);
console.log(result);

// search() - Returns the index of the first match if not returns -1 
const str = 'Barley Hello World';
const result = str.search(re);
console.log(result);

// replace() - Replaces new string with some or all matches of the pattern
const str = 'Hello my buddy';
const result = str.replace(re, 'Hi');
console.log(result); 