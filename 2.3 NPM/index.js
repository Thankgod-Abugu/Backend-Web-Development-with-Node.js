// var generateName = require('sillyname'); 
// // line above uses CJS (by default)

import generateName from 'sillyname';
// line above uses ESM, a better alternative to CJS

var sillyName = generateName();
console.log(`My name is ${sillyName}`);

// using superheroes npm
import {randomSuperhero} from 'superheroes';

var heroName = randomSuperhero();
console.log(`My super hero name is ${heroName}`);