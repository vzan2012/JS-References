// Iterators Example
let nameIterator = names => {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
};

let namesArr = ["King", "Queen", "Jack"];
let namesL = nameIterator(namesArr);
console.log(namesL.next());
console.log(namesL.next());
console.log(namesL.next());
console.log(namesL.next());

// Generators Exanple
function* sayNames() {
  yield "King";
  yield "Queen";
  yield "Jack";
}

const names = sayNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// ID Creator (Generator Example)
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

let nameId = createIds();

console.log(nameId.next());
console.log(nameId.next());
console.log(nameId.next());
console.log(nameId.next());
console.log(nameId.next());
