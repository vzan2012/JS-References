// MemberFactory - Pattern
function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}) ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "5 Euros";
};

const StandardMembership = function(name) {
  this.name = name;
  this.cost = "15 Euros";
};

const SuperMembership = function(name) {
  this.name = name;
  this.cost = "25 Euros";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John", "simple"));
members.push(factory.createMember("Xyz", "standard"));
members.push(factory.createMember("Admin", "super"));

// console.log(members);

members.map(member => member.define());
