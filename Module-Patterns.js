// Basic Structure of the Module Patterns

(function() {
    // Declare the private vars and the function
    return() {
        // Declare the public vars and the function
    }
})();

// Standard Module Pattern
const UIControl = (function() {
  let text = "Modal Pattern Example";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

// UIControl.callChangeText();

// Revealing Module Pattern
const ItemControl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemControl.add({ id: 1, name: "Star Wars" });
ItemControl.add({ id: 2, name: "Face Off" });
console.log(ItemControl.get(1));
console.log(ItemControl.get(2));
