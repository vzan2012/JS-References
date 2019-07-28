// Mediator Pattern - Scripts (ES 6)
// Example: Chat Room

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`Message ${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    // List of Users
    let users = {};

    return {
      register(user) {
        users[user.name] = user;
        user.chatroom = this;
      },

      send(message, from, to) {
        if (to) {
          //   Single User Message
          to.receive(message, from);
        } else {
          //   Mass Message
          for (let key in users) {
            if (users[key] !== from) users[key].receive(message, from);
          }
        }
      }
    };
  }
}

// Creating Users
const vzan2012 = new User("vzan2012");
const xyzuser = new User("xyzuser");
const abcuser = new User("abcuser");

// Create Chatroom
const chatroom = new Chatroom();
chatroom.register(vzan2012);
chatroom.register(xyzuser);
chatroom.register(abcuser);

vzan2012.send("Hello XYZ !!!", xyzuser);
xyzuser.send("Hello vzan2012 !!!", vzan2012);
abcuser.send("Hello Guys !!!");
