'use strict';

const restaurant = {
  name: 'Burger House',
  location: 'Puran Bogura, Dhaka,Bangladesh',
  category: ['Italian', 'Thailand', 'Indian', 'Local', 'Organic'],
  startMenu: [
    'Chicken Cheese Burger',
    'Beef Burger',
    'Garlic Bread',
    'Italian Spicy Pasta'
  ],
  mainMenu: ['Burger', 'Pasta', 'Pizza', 'French Fries'],
  openingHours: {
    sun: {
      open: 10,
      close: 22
    },
    fri: {
      open: 12,
      close: 20
    },
    wed: {
      open: 8,
      close: 20
    }
  },
  order: function (startInd, mainInd) {
    return [this.startMenu[startInd], this.mainMenu[mainInd]];
  },
  orderDelivery: function ({ startIndex = 0, mainIndex = 0, time = '10:00pm', address = 'Unknown' }) {
    console.log(`${this.startMenu[startIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  burgerOrder: function (ing1, ing2, ing3) {
    console.log(`Here is your is burger with ${ing1} , ${ing2} & ${ing3}`)
  },
  orderPizz: function (mainIng, ...other) {
    console.log(mainIng, other);
  }
}
console.log(restaurant.name);

////////////////////////////////////////
/*Rest Pattern And Parameters  */

/*Destructuring*/
/*Spread Operator-- সমান চিনহের ডান পাশে কাজ করলে তাকে  Destructuring বলে।*/
/////////////////////////////////////////////////////////////////////////////////
const arr = [10, 2, ...[3, 4]];
const [a, b, c, d] = arr;

console.log(a + b * c - d);

/* Rest Pattern---কাজ করে সমান চিনহের বাম দিকে এবং সবার শেষে।*/
///////////////////////////////////////////////////////////////////

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const [x, y, ...all] = arr2;

const someName = ['Salman', 'Rahat', 'Evan', 'Jony', 'Priti'];
const [s, , r, ...others] = someName;

console.log(all);
console.log(s, r, others);

const [checkenBurger, beefBurger, , ...allOthers] = [...restaurant.startMenu, ...restaurant.mainMenu];

console.log(checkenBurger, beefBurger, allOthers)

/*Objects*/
/////////////////////

const { fri: friday, ...otherDays } = restaurant.openingHours;
console.log(friday, otherDays);

/*Rest Parameter--যখন ফাংশরের ভিতরে ব্যবহার করা তখন তাকে Rest Parameter বলে।*/
////////////////////////////////////////////////////////////////////////////////

function add(...numbers) {
  let sum = 0;
  let len = numbers.length;
  for (let i = 0; i < len; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
add(2, 3, 4, 5, 6);

add(10, 12, 14, 16, 18, 20);

restaurant.orderPizz('Mashroom', 'Mangoes', 'Apple');