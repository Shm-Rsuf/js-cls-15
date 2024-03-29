"use strict";

/*property of restaurent*/
const openingHours = {
  sun: {
    open: 10,
    close: 22,
  },
  fri: {
    open: 12,
    close: 20,
  },
  wed: {
    open: 8,
    close: 20,
  },
};

const restaurant = {
  name: "Burger House",
  location: "Puran Bogura, Dhaka,Bangladesh",
  category: ["Italian", "Thailand", "Indian", "Local", "Organic"],
  startMenu: [
    "Chicken Cheese Burger",
    "Beef Burger",
    "Garlic Bread",
    "Italian Spicy Pasta",
  ],
  mainMenu: ["Burger", "Pasta", "Pizza", "French Fries"],

  openingHours,
  order: function (startInd, mainInd) {
    return [this.startMenu[startInd], this.mainMenu[mainInd]];
  },
  orderDelivery: function ({
    startIndex = 0,
    mainIndex = 0,
    time = "10:00pm",
    address = "Unknown",
  }) {
    console.log(
      `${this.startMenu[startIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  burgerOrder: function (ing1, ing2, ing3) {
    console.log(`Here is your is burger with ${ing1} , ${ing2} & ${ing3}`);
  },
  orderPizz: function (mainIng, ...other) {
    console.log(mainIng, other);
  },
};

////////////////////////////////////////
/*Rest Pattern And Parameters  */

/*Destructuring*/
/*Spread Operator-- সমান চিনহের ডান পাশে কাজ করলে তাকে  Destructuring বলে।*/
/////////////////////////////////////////////////////////////////////////////////
// const arr = [10, 2, ...[3, 4]];
// const [a, b, c, d] = arr;

// const myArr1 = [1, 2, 3, 5, 10];
// const myArr2 = [11, 22, 3, 5, 10];

// const myArr3 = [...myArr1, ...myArr2];
// const [fe, , td, , last] = myArr1;
// console.log(myArr3);
// console.log(fe, td, last);

// console.log(a + b * c - d);

/* Rest Pattern---কাজ করে সমান চিনহের বাম দিকে এবং সবার শেষে।*/
///////////////////////////////////////////////////////////////////

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const [one, , three, ...rest] = arr2;
// console.log(one, three, rest);

// const someName = ["Salman", "Rahat", "Evan", "Jony", "Priti"];
// const [s, , e, , p] = someName;
// const [, r, ...names] = someName;
// console.log(r, names);
// console.log(s, e, p);

// console.log(all);
// console.log(s, r, others);

// const [checkenBurger, beefBurger, , ...allOthers] = [
//   ...restaurant.startMenu,
//   ...restaurant.mainMenu,
// ];
// const [italian, ...otherCategories] = restaurant.category;
// console.log(italian, otherCategories);
// console.log(checkenBurger, beefBurger, allOthers);

/*Objects*/
/////////////////////
// const teacher = {
//   name: "Mahabub Alom",
//   age: 35,
//   cls: ["six", "seven", "eight", "nine", "ten"],
// };

// const { name, cls } = teacher;

// console.log(name, cls);

// const { fri, ...otherHours } = restaurant.openingHours;
// console.log(fri, otherHours);

/*Rest Parameter--যখন ফাংশরের ভিতরে ব্যবহার করা তখন তাকে Rest Parameter বলে।*/
////////////////////////////////////////////////////////////////////////////////

// function add(...numbers) {
//   let sum = 0;
//   let len = numbers.length;
//   for (let i = 0; i < len; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
// add(2, 3, 4, 5, 6);

// add(10, 12, 14, 16, 18, 20);

// restaurant.orderPizz('Mashroom', 'Mangoes', 'Apple');

/*Short Circuiting */
//////////////////////////
// console.log(5 || 'momin');
// console.log(0 || false);
// console.log(0 || 'undefined');
// console.log('' || "Usuf");

// restaurant.guest = 50;
// const guest = restaurant.guest ? restaurant.guest : 20;
// console.log(guest);
// const founder = restaurant.founder || 'Tumpa';
// console.log(founder)

// console.log(0 && 5);
// console.log(true && false);
// console.log(true && 5 && ' ' && 'Jony' && undefined);
// console.log('mitu' && 5 && true && null);

// if (restaurant.orderPizz) {
//   console.log('Mashrum', 'Tomato');
// }
// restaurant.orderPizz && restaurant.orderPizz('Pasta', 'mango')

/*Nullish Operator(null , undefined)*/
//////////////////////////////////////////////////
// restaurant.malik = 0;
// const malik = restaurant.malik ?? 20;
// console.log(malik)

/*For Of Loop:use for iterable:এর ভেতরে কোন index থাকে না বাইরে থেকে আনতে হয় entries() ফাংশন ব্যবহার করে। */
///////////////////////////////
// const arr4 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// for (const [key, value] of arr4.entries()) {
//   console.log(key, value);
// }

// const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

// for (const [index, food] of menu.entries()) {
//   // console.log(`${index + 1}: ${food}`);
// }

// const friends = ['Atik', 'Jony', 'Nafiul', 'Tozam', 'Kuddus'];
// for (let [index, friend] of friends.entries()) {
//   console.log(`${index + 1}: ${friend}`);
// }

/* Optional Chaining*/
////////////////////////////
// console.log(restaurant?.openingHours?.fri?.close);
// console.log(restaurant.openingHours.mon?.open);

/*Objects Itarator*/
////////////////////////////////
const properties = Object.keys(restaurant.openingHours);
for (const [index, property] of properties.entries()) {
  console.log(`${index + 1}: ${property}`);
}

// for (const day of objProperty) {
//   console.log(day);
// }
// const objValue = Object.values(restaurant.openingHours);
// console.log(objValue);

// for (const value of objValue) {
//   console.log(value.open);
// }

// const entries = Object.entries(restaurant.openingHours);

// for (const [key, value] of entries) {
//   console.log(`On ${key}, We are open at ${value.open} & close at ${value.close}`);
// }

/*-----------sets------------*/
//////////////////////////////////////

const food = [
  "burger",
  "pizza",
  "mattan biriyani",
  "pasta",
  "noodles",
  "pasta",
  "burger",
];
const uniqueFood = [...new Set(food)];

const myArr = [10, 11, 10, 15, 20, 11, 25, 20, 15];
const uniqueArr = [...new Set(myArr)];

console.log(uniqueFood);
console.log(uniqueArr);
