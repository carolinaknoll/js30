// ## Array Cardio Day 2

const vampireCheckup = [
  { name: 'Zoey Redbird', vampireLevel: 100 },
  { name: 'Kiryuu Zero', vampireLevel: 37 },
  { name: 'James Stark', vampireLevel: 93 },
  { name: 'Lenobia', vampireLevel: 999 }
];

// Array.prototype.some() // does at least one person have a vampire level >= 50?
const isVampire = vampireCheckup.some(vampire => vampire.vampireLevel >= 50);
console.log({isVampire}); // log like this to get const name and bool value in one go

// Array.prototype.every() // is everyone a vampire?
const allVampire = vampireCheckup.every(vampire => vampire.vampireLevel >= 50);
console.log({allVampire});

const seasonPrep = [
  { season: 'Spring', prep: 'Flower seeds, garden tools, fertilizer' },
  { season: 'Summer', prep: 'Popsicles, swimsuits, swimming goggles' },
  { season: 'Autumn', prep: 'Pumpkins, coats, umbrellas' },
  { season: 'Winter', prep: 'Winter clothes, warm duvets, fluffy scarves' },
];

// Array.prototype.find() // returns just the one you are looking for
// find the prep list for the Winter season
const prepForWinter = seasonPrep.find(item => item.season === 'Winter');
console.log(prepForWinter);

// find the index of the Winter season
const index = seasonPrep.findIndex(item => item.season === 'Winter');
console.log(index);

// Create new seasonPrep array using the content on the existing one
const newSeasonPrep = [
  ...seasonPrep.slice(0, index),
  ...seasonPrep.slice(index + 1)
];
