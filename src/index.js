// functions are first class citizens

function greet(fn) {
  console.log(fn());
}

function sayHello() {
  return function() {
    return "Hello world";
  };
}

// functional composing and piping using lodash

import { compose, pipe } from 'lodash/fp';

let input = "    JavaScript      ";

let output = "div" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); // difficult to read

const transformCompose = compose(wrapInDiv, toLowerCase, trim);
const resultComposed = transformCompose(input);

const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
const resultPiped = transformPipe(input);
console.log({resultPiped});

// use currying

const wrap = type => str => `<${type}>${str}</${type}>`;

const transformPipeCurry = pipe(trim, toLowerCase, wrap('span'));
const resultPipedCurry = transformPipeCurry(input);
console.log({resultPipedCurry});

// Updating object properties

const person = { name: 'John' };
const updated = Object.assign({}, person, { name: 'Bob'});
console.log({updated});
const updateSpread = { ...person, name: 'Bob' };
console.log({updateSpread});

// Immutable.js and Immer library for immutable data structures

