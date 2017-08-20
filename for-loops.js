"use strict";

console.log("for-loops.js");


// Increment By Ten

for (let i = 5; i <= 120; i+=10) {
	console.log("Current value is ", i);
}


//Decrement By Division

for (let i = 4096; i > 1; i = i / 2) {
	console.log("Current value is ", i);
}


// Array Iteration

let presidents = [];
presidents.push({order: "1", name: "George Washington"});
presidents.push({order: "2", name: "John Adams"});
presidents.push({order: "3", name: "Thomas Jefferson"});
presidents.push({order: "4", name: "James Madison"});
presidents.push({order: "5", name: "James Monroe"});
presidents.push({order: "6", name: "John Quincy Adams"});
presidents.push({order: "7", name: "Andrew Jackson"});
presidents.push({order: "8", name: "Martin Van Buren"});
presidents.push({order: "9", name: "William H. Harrison"});
presidents.push({order: "10", name: "John Tyler"});
presidents.push({order: "11", name: "James K. Polk"});
presidents.push({order: "12", name: "Zachary Taylor"});
presidents.push({order: "13", name: "Millard Fillmore"});
presidents.push({order: "14", name: "Franklin Pierce"});
presidents.push({order: "15", name: "James Buchanan"});
presidents.push({order: "16", name: "Abraham Lincoln"});
presidents.push({order: "17", name: "Andrew Johnson"});
presidents.push({order: "18", name: "Ulysses S. Grant"});
presidents.push({order: "19", name: "Rutherford B. Hayes"});
presidents.push({order: "20", name: "James A. Garfield"});
presidents.push({order: "21", name: "Chester A. Arthur"});
presidents.push({order: "22", name: "Grover Cleveland"});
presidents.push({order: "23", name: "Benjamin Harrison"});
presidents.push({order: "24", name: "Grover Cleveland"});
presidents.push({order: "25", name: "William McKinley"});
presidents.push({order: "26", name: "Theodore Roosevelt"});
presidents.push({order: "27", name: "William H. Taft"});
presidents.push({order: "28", name: "Woodrow Wilson"});
presidents.push({order: "29", name: "Warren G. Harding"});
presidents.push({order: "30", name: "Calvin Coolidge"});
presidents.push({order: "31", name: "Herbert Hoover"});
presidents.push({order: "32", name: "Franklin D. Roosevelt"});
presidents.push({order: "33", name: "Harry Truman"});
presidents.push({order: "34", name: "Dwight D. Eisenhower"});
presidents.push({order: "35", name: "John F. Kennedy"});
presidents.push({order: "36", name: "Lyndon B. Johnson"});
presidents.push({order: "37", name: "Richard M. Nixon"});
presidents.push({order: "38", name: "Gerald R. Ford"});
presidents.push({order: "39", name: "James E. Carter"});
presidents.push({order: "40", name: "Ronald Reagan"});
presidents.push({order: "41", name: "George H. Bush"});
presidents.push({order: "42", name: "William Jefferson Clinton"});
presidents.push({order: "43", name: "George W. Bush"});
presidents.push({order: "44", name: "Barack Obama"});
presidents.push({order: "45", name: "Donald Trump"});

for (let i = 0; i < presidents.length; i++) {
	console.log("President #", presidents[i].order + " was "+ presidents[i].name);
}


// Object Iteration

let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (let prop in antSpecies) {
console.log(prop);
}