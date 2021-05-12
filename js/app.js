'use strict';

// setup hours array of stores operational hours
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// grab the <ul> node from the DOM to append to later
let listContainer = document.getElementById('data-section');

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
  calcCookiesPerDay: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
    }
  },
  render: function() {
    // run calCookiesPerDay function to build data
    this.calcCookiesPerDay();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      console.log('dataline: ' + dataLine);
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);

    // build DOM elements required
    let storeSection = document.createElement('section');
    let ulEl = document.createElement('ul');
    let storeNameH2El = document.createElement('h2');
    storeNameH2El.textContent = this.storeName;
    ulEl.appendChild(storeNameH2El);
    storeSection.appendChild(ulEl);
    listContainer.appendChild(storeSection);

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
  calcCookiesPerDay: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
    }
  },
  render: function() {
    // run calCookiesPerDay function to build data
    this.calcCookiesPerDay();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      console.log('dataline: ' + dataLine);
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);

    // build DOM elements required
    let storeSection = document.createElement('section');
    let ulEl = document.createElement('ul');
    let storeNameH2El = document.createElement('h2');
    storeNameH2El.textContent = this.storeName;
    ulEl.appendChild(storeNameH2El);
    storeSection.appendChild(ulEl);
    listContainer.appendChild(storeSection);

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
  calcCookiesPerDay: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
    }
  },
  render: function() {
    // run calCookiesPerDay function to build data
    this.calcCookiesPerDay();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      console.log('dataline: ' + dataLine);
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);

    // build DOM elements required
    let storeSection = document.createElement('section');
    let ulEl = document.createElement('ul');
    let storeNameH2El = document.createElement('h2');
    storeNameH2El.textContent = this.storeName;
    ulEl.appendChild(storeNameH2El);
    storeSection.appendChild(ulEl);
    listContainer.appendChild(storeSection);

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
  calcCookiesPerDay: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
    }
  },
  render: function() {
    // run calCookiesPerDay function to build data
    this.calcCookiesPerDay();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      console.log('dataline: ' + dataLine);
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);

    // build DOM elements required
    let storeSection = document.createElement('section');
    let ulEl = document.createElement('ul');
    let storeNameH2El = document.createElement('h2');
    storeNameH2El.textContent = this.storeName;
    ulEl.appendChild(storeNameH2El);
    storeSection.appendChild(ulEl);
    listContainer.appendChild(storeSection);

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
  calcCookiesPerDay: function() {
    // Build the data needed based on properties of object
    let cookiesByHour = 0;
    for (let i = 0; i < hours.length; i++) {
      cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
      this.cookiesByHourArray.push(cookiesByHour);
      this.dailyCookieTotal += cookiesByHour;
    }
  },
  render: function() {
    // run calCookiesPerDay function to build data
    this.calcCookiesPerDay();
    let dataArray = [];
    for (let i = 0; i < hours.length; i++) {
      let dataLine = `${hours[i]}: ${this.cookiesByHourArray[i]} cookies`;
      console.log('dataline: ' + dataLine);
      dataArray.push(dataLine);
    }
    dataArray.push(`Total: ${this.dailyCookieTotal} cookies`);

    // build DOM elements required
    let storeSection = document.createElement('section');
    let ulEl = document.createElement('ul');
    let storeNameH2El = document.createElement('h2');
    storeNameH2El.textContent = this.storeName;
    ulEl.appendChild(storeNameH2El);
    storeSection.appendChild(ulEl);
    listContainer.appendChild(storeSection);

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
