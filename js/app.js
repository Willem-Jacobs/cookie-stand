'use strict';

console.log('Hello World');

let hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

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
