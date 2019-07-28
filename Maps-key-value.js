// Scripts

// MAPS - Key value paris - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = "Some Value",
  key2 = {},
  key3 = function() {};

// Set map values by key
map1.set(key1, "Value of Key 1");
map1.set(key2, "Value of Key 2");
map1.set(key3, "Value of Key 3");

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count Values
console.log(map1.size);

// ITERATING MAPS

// Loop using for...of to get key, value pairs
for (let [key, value] of map1) console.log(`${key} = ${value}`);

// Iterate keys only
for (let keys of map1.keys()) {
  console.log(`${keys}`);
}

// Iterate Values only
for (let value of map1.values()) {
  console.log(`${value}`);
}

// Loop with forEach()
map1.forEach(function(key, value) {
  console.log(`${key} = ${value}`);
});

let keyValues = map1.forEach((key, values) => {
  console.log(`${key} = ${values}`);
});
console.log(keyValues);

// Convert to ARRAYS

// Create an array of key value pairs
const keyValues = Array.from(map1);
console.log(keyValues);

// Create an array of keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);

// Create an array of values
const valueArr = Array.from(map1.values());
console.log(valueArr);
