'use strict';

console.log('Hello World');

let hours = ['6am', '7am', '8am'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],
  avg: 6.3,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  // enter your sudo code:
  // come up with a plan of how to do this!
};

console.log(seattle.getRandomNumberCustomers());
