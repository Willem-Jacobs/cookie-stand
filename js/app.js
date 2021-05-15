'use strict';

// Global Variables
let totalCookiesCompany = [];
let companyTotalByHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// constructor

function Store(name, min, max, avg) {
  this.storeName = name;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.dailyCookieTotal = 0;
  this.cookiesByHourArray = [];
  this.randomCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  };
  this.calcCookierPerHour = function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < this.hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
      // line below for grand total - out of scope
      companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    }
  };
  this.render = function() {
    // run calcCookierPerHour function to build data line to display
    this.calcCookierPerHour();
    let dataArray = [];
    for (let i = 0; i < this.hours.length; i++) {
      let dataLine = `${this.hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);
    // 2 lines below for grand total - out of scope.
    totalCookiesCompany.push(this.storeName);
    totalCookiesCompany.push(this.dailyCookieTotal);

    // grab the <div> node from the DOM to append to later
    let listContainer = document.getElementById('data-container');
    // build DOM elements required using a section for each object
    let storeSection = document.createElement('section');
    // setting a class for future styling
    storeSection.className = 'data-section';
    let storeNameH2El = document.createElement('h2');
    let ulEl = document.createElement('ul');
    storeNameH2El.textContent = this.storeName;
    listContainer.appendChild(storeSection);
    storeSection.appendChild(storeNameH2El);
    storeSection.appendChild(ulEl);

    // loop to add data to the list
    for (let i = 0; i < dataArray.length; i++) {
      let dataEl = document.createElement('li');
      dataEl.textContent = dataArray[i];
      ulEl.appendChild(dataEl);
    }
  };
}

// instantiating objects from Store constructor
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// invoke the object (store) render method on each.
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// This below is some testing I am doing with grand totals. Not part of project at this point.
console.log(totalCookiesCompany);
console.log(companyTotalByHour);
