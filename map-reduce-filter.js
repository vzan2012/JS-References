// Scripts

// Map Example
let officersList = [
  { id: 20, name: "Captain" },
  { id: 25, name: "General" },
  { id: 35, name: "Admiral" },
  { id: 70, name: "Commander" }
];

console.log(officersList);

let officer = officersList.map(officer => {
  console.log(officer.id);
});

let officerName = officersList.map(officer => officer.name);

console.log(`Officer Name: ${officerName}`);

// Reduce Example
let pilotList = [
  {
    id: 10,
    name: "Poe",
    years: 20
  },
  {
    id: 20,
    name: "Wexley",
    years: 10
  },
  {
    id: 30,
    name: "Lintra",
    years: 5
  },
  {
    id: 40,
    name: "Ello Asty",
    years: 7
  },
  {
    id: 50,
    name: "Flash",
    years: 25
  }
];

let pilotNames = pilotList.map(pilot => pilot.name);

console.log(pilotNames);

// Using Reduce (Calculate the yrs of exp)
let pilotExp = pilotList.reduce((acc, pilot) => acc + pilot.years, 0);
let totalExp = pilotList.reduce((acc, pilot) => acc + pilot.years, 0);

console.log(pilotExp);
console.log(totalExp);

// Calculate the Most Experience of Pilot
let mostExp = pilotList.reduce(
  (oldest, pilot) =>
    (oldest.years || 0) > pilot.years ? oldest.years : pilot.years,
  {}
);
let mostPilotExp = pilotList.reduce(
  (oldest, pilot) => (oldest.years > pilot.years ? oldest : pilot),
  {}
);

console.log(mostExp);
console.log(mostPilotExp);

// Filter Example (Find the Rebel Pilots)
let pilotList = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];

let pilotsEmpire = pilotList.filter(pilot => pilot.faction.includes("Empire"));
let pilotsEmpire = pilotList.filter(pilot => pilot.faction === "Empire");
console.log(pilotsEmpire);

let pilotsRebels = pilotList.filter(pilot => pilot.faction.includes("Rebels"));
console.log(pilotsRebels);

let personnelList = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

//   Map
let personList = personnelList.map(person => person);
console.log(personList);

let jediList = personnelList.filter(person => person.isForceUser);
console.log(jediList);

let jediListScore = jediList.map(
  jedi => jedi.shootingScore + jedi.pilotingScore
);
console.log(jediListScore);

let jediTotalScore = jediListScore.reduce((total, jedi) => total + jedi, 0);
console.log(jediTotalScore);

// Chaining the map, filter and reduce methods
let jediTotalScore = personnelList
  .filter(person => person.isForceUser)
  .map(jedi => jedi.shootingScore + jedi.pilotingScore)
  .reduce((total, jedi) => total + jedi, 0);
console.log(jediTotalScore);
