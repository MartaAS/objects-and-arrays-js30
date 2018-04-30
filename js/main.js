'use strict';

// start with strings, numbers and booleans
let age = 100;
let age2 = age;
//console.log(age, age2);

age = 200;
//console.log(age, age2);

let name = 'Wes';
let name2 = name;
//console.log(name, name2);

name = 'Wesley';
//console.log(name, name2);


//en este caso no estamos haciendo una copia del array, si no modificamos el array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
//console.log(players, team);

team[2] = 'Lux';
const team2 = players.slice();


// en este caso si que estariamos haciendo una copia del array
const team3 = [].concat(players);

// con ES6
const team4 = [...players];
team[3] = 'heeee hawww';
//console.log(team4);

const team5 = Array.from(players);


//con los objetos ocurre lo mismo
const person = {
	name: 'Wes Bos',
	age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99;

const cap2 = Object.assign({}, person, { number: 99, age: 12});
//console.log(cap2);

//Es solo un nivel de profundidad, tanto para matrices como para objetos

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

//console.clear();
//console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));

 