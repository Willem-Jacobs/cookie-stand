'use strict';

// setup hours array of stores operational hours
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Not in scope - added a company total array for later usage.
let totalCookiesCompany = [];
let companyTotalByHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// grab the <div> node from the DOM to append to later
let listContainer = document.getElementById('data-container');

// Seattle Store Object
let seattle = {
  storeName: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  dailyCookieTotal: 0,
  cookiesByHourArray: [],
  avgCookiesPerCustomer: 6.3,
  // Generate a random amount of customers per hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  calcCookierPerHour: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
      // line below for grand total - out of scope
      companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    }
  },
  render: function() {
    // run calcCookierPerHour function to build data line to display
    this.calcCookierPerHour();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);
    // 2 lines below for grand total - out of scope.
    totalCookiesCompany.push(this.storeName);
    totalCookiesCompany.push(this.dailyCookieTotal);

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
  }
};

// Tokyo Store Object
let tokyo = {
  storeName: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  dailyCookieTotal: 0,
  cookiesByHourArray: [],
  avgCookiesPerCustomer: 1.2,
  // Generate a random amount of customers per hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  calcCookierPerHour: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
      // line below for grand total - out of scope
      companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    }
  },
  render: function() {
    // run calcCookierPerHour function to build data line to display
    this.calcCookierPerHour();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);
    // 2 lines below for grand total - out of scope.
    totalCookiesCompany.push(this.storeName);
    totalCookiesCompany.push(this.dailyCookieTotal);

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
  }
};

// Dubai Store Object
let dubai = {
  storeName: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  dailyCookieTotal: 0,
  cookiesByHourArray: [],
  avgCookiesPerCustomer: 3.7,
  // Generate a random amount of customers per hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  calcCookierPerHour: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
      // line below for grand total - out of scope
      companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    }
  },
  render: function() {
    // run calcCookierPerHour function to build data line to display
    this.calcCookierPerHour();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);
    // 2 lines below for grand total - out of scope.
    totalCookiesCompany.push(this.storeName);
    totalCookiesCompany.push(this.dailyCookieTotal);

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
  }
};

// Paris Store Object
let paris = {
  storeName: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  dailyCookieTotal: 0,
  cookiesByHourArray: [],
  avgCookiesPerCustomer: 2.3,
  // Generate a random amount of customers per hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  calcCookierPerHour: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
      // line below for grand total - out of scope
      companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    }
  },
  render: function() {
    // run calcCookierPerHour function to build data line to display
    this.calcCookierPerHour();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);
    // 2 lines below for grand total - out of scope.
    totalCookiesCompany.push(this.storeName);
    totalCookiesCompany.push(this.dailyCookieTotal);

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
  }
};

// Lima Store Object
let lima = {
  storeName: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  dailyCookieTotal: 0,
  cookiesByHourArray: [],
  avgCookiesPerCustomer: 4.6,
  // Generate a random amount of customers per hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
  calcCookierPerHour: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
      // line below for grand total - out of scope
      companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    }
  },
  render: function() {
    // run calcCookierPerHour function to build data line to display
    this.calcCookierPerHour();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);
    // 2 lines below for grand total - out of scope.
    totalCookiesCompany.push(this.storeName);
    totalCookiesCompany.push(this.dailyCookieTotal);

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
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// This below is some testing I am doing with grand totals. Not part of project at this point.
console.log(totalCookiesCompany);
console.log(companyTotalByHour);
