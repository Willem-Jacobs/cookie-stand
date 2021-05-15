'use strict';

// Global Variables
let storeArray = [];
let companyTotalByHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let hourTotal = [];
// let storeTotal = [];

// Constructor for Store
function Store(name, min, max, avg) {
  this.storeName = name;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.dailyCookieTotal = 0;
  this.cookiesByHourArray = [];
  storeArray.push(this);
}

// Methods for the Store constructor as prototypes
Store.prototype.randomCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
};

Store.prototype.calcCookiesPerHour = function () {
  let cookiesByHour = 0;
  for (let i = 0; i < this.hours.length; i++) {
    cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
    this.cookiesByHourArray.push(cookiesByHour);
    this.dailyCookieTotal += cookiesByHour;
    companyTotalByHour[i] += cookiesByHour;
  }
  console.log('Total by Hour: ' + companyTotalByHour);
};

// Store.prototype.updateGlobalTotal = function() {
//   for (let i = 0; i < storeArray.length; i++) {
//     for (let j = 0; j < storeArray[i].this.cookiesByHour[j].length; j++) {
//       let hours
//     }
//   }
// };

Store.prototype.renderTableStructure = function() {
  let tableContainer = document.getElementById('table-container');
  let tableEl = document.createElement('table');
  let tableHeadEl = document.createElement('thead');
  let tableHeadRowEl = document.createElement('tr');
  let tableBodyEl = document.createElement('tbody');
  let tableFooterEl = document.createElement('tfoot');
  tableContainer.appendChild(tableEl);
  tableEl.appendChild(tableHeadEl);
  tableHeadEl.appendChild(tableHeadRowEl);
  tableEl.appendChild(tableBodyEl);
  tableEl.appendChild(tableFooterEl);
};

Store.prototype.renderTableHeader = function() {
  let tableHeaderRow = document.querySelector('thead>tr');
  let tableHeaderEl = document.createElement('th');
  tableHeaderRow.appendChild(tableHeaderEl);
  for (let i = 0; i < this.hours.length; i++) {
    tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = this.hours[i];
    tableHeaderRow.appendChild(tableHeaderEl);
  }
  let tableHeaderTotalEl = document.createElement('th');
  tableHeaderTotalEl.textContent = 'Total';
  tableHeaderRow.appendChild(tableHeaderTotalEl);
};

Store.prototype.renderTableRow = function() {
  this.calcCookiesPerHour();
  let tableRowBody = document.querySelector('tbody');
  let tableRowEl = document.createElement('tr');
  let tableRowDataEl = document.createElement('td');
  tableRowDataEl.textContent = this.storeName;
  tableRowEl.appendChild(tableRowDataEl);
  tableRowBody.appendChild(tableRowEl);
  for (let i = 0; i < this.cookiesByHourArray.length; i++) {
    tableRowDataEl = document.createElement('td');
    tableRowDataEl.textContent = this.cookiesByHourArray[i];
    tableRowEl.appendChild(tableRowDataEl);
  }
  tableRowDataEl = document.createElement('td');
  tableRowDataEl.textContent = this.dailyCookieTotal;
  tableRowEl.appendChild(tableRowDataEl);
};

Store.prototype.renderTableFooter = function() {
  let tableFooterEl = document.querySelector('tfoot');
  let tableFooterRowEl = document.createElement('td');
  tableFooterRowEl.textContent = 'Total';
  tableFooterEl.appendChild(tableFooterRowEl);
};

function run() {
  new Store('Seattle', 23, 65, 6.3);
  new Store('Tokyo', 3, 24, 1.2);
  new Store('Dubai', 11, 38, 3.7);
  new Store('Paris', 20, 38, 2.3);
  new Store('Lima', 2, 16, 4.6);
  for (let i = 0; i < storeArray.length; i++) {
    if (i === 0) {
      storeArray[i].renderTableStructure();
      storeArray[i].renderTableHeader();
      storeArray[i].renderTableRow();
    } else {
      storeArray[i].renderTableRow();
    }
  }
}

run();
