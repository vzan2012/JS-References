// Singleton Pattern
const Singleton = (function() {
  let instance;

  function createInstance() {
    // const object = new Object('Object Created');
    const object = new Object({name: 'JavaScript Patterns'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);

const instanceB = Singleton.getInstance();
console.log(instanceB);

console.log(instanceA === instanceB);
