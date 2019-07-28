// Observer Patterns - ES5
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback stays on the list. The filter returns a new list and reassigns to the list of observers.
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) return item;
    });
    console.log(`You are unsubscribed to ${fn.name}`);
  },
  fire: function() {
    // this.observers.map(item => item.call());
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

const getCurMilliseconds = function() {
  console.log(`Current Milliseconds is ${new Date().getMilliseconds()}`);
};

const getCurSeconds = () =>
  console.log(`Current Seconds is ${new Date().getSeconds()}`);

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function() {
  click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  click.fire();
});
