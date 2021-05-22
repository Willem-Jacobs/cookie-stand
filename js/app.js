'use strict';

// Global Variables
const storeArray = [];
let companyTotalByHour = new Array(14).fill(0);
let companyGrandTotal = 0;
let companyTosserTotal = new Array(14).fill(0);
let storeTable = 'store-table-container';
let tosserTable = 'tosse-table-container';

// Constructor for Store
function Store(id, name, min, max, avg) {
  this.storeID = id;
  this.storeName = name;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.dailyCookieTotal = 0;
  this.cookiesByHourArray = [];
  this.cookieTossersPerHour = [];
  storeArray.push(this);
}

// Methods for the Store constructor as prototypes
Store.prototype.randomCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
};

Store.prototype.calcCookiesPerHour = function () {
  let cookiesByHour = 0;
  let tosser = 0;
  for (let i = 0; i < this.hours.length; i++) {
    cookiesByHour = Math.round(this.randomCustomersPerHour() * this.avgCookiesPerCustomer);
    this.cookiesByHourArray.push(cookiesByHour);
    this.dailyCookieTotal += cookiesByHour;
    companyTotalByHour[i] = companyTotalByHour[i] + cookiesByHour;
    // Figure out number of tossers needed
    tosser = Math.ceil(cookiesByHour / 20);
    this.cookieTossersPerHour[i] = tosser;
    companyTosserTotal[i] = companyTosserTotal[i] + tosser;
  }
};

Store.prototype.renderTableStructure = function (tableElement) {
  let tableContainer = document.getElementById(tableElement);
  let tableEl = document.createElement('table');
  let tableHeadEl = document.createElement('thead');
  let tableHeadRowEl = document.createElement('tr');
  tableHeadRowEl.id = tableElement.substring(0, 12) + 'row';
  let tableBodyEl = document.createElement('tbody');
  tableBodyEl.id = tableElement.substring(0, 12) + 'detail';
  let tableFooterEl = document.createElement('tfoot');
  tableFooterEl.id = tableElement.substring(0, 12) + 'foot';
  tableContainer.appendChild(tableEl);
  tableEl.appendChild(tableHeadEl);
  tableHeadEl.appendChild(tableHeadRowEl);
  tableEl.appendChild(tableBodyEl);
  tableEl.appendChild(tableFooterEl);
};

Store.prototype.renderTableHeader = function(headerData, tableName) {
  let tableHeaderRow = document.getElementById(`${tableName.substring(0,12)}row`);
  let tableHeaderEl = document.createElement('th');
  tableHeaderRow.appendChild(tableHeaderEl);
  for (let i = 0; i < headerData.length; i++) {
    tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = headerData[i];
    tableHeaderRow.appendChild(tableHeaderEl);
  }
  let tableHeaderTotalEl = document.createElement('th');
  tableHeaderTotalEl.textContent = 'Total';
  tableHeaderRow.appendChild(tableHeaderTotalEl);
};

Store.prototype.renderTableRow = function(tableName, update) {
  if (tableName === 'store-table-container') {
    this.calcCookiesPerHour();
    let tableRowBody = document.getElementById(`${tableName.substring(0,12)}detail`);
    if (!update) {
      let tableRowEl = document.createElement('tr');
      tableRowEl.id = 'S-' + this.storeID;
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
      companyGrandTotal += this.dailyCookieTotal;
      tableRowEl.appendChild(tableRowDataEl);
    } else {
      // companyTotalByHour = new Array(14).fill(0);
      // companyGrandTotal = 0;
      let tableRowToUpdate = document.getElementById(`S-${this.storeID}`);
      let rowCellCount = tableRowToUpdate.cells.length;
      for (let i = 0; i < rowCellCount - 1; i++) {
        tableRowToUpdate.cells[i + 1].textContent = this.cookiesByHourArray[i];
      }
      tableRowToUpdate.cells[rowCellCount - 1].textContent = this.dailyCookieTotal;
      this.renderTableFooter(storeTable);
    }
  }
  if (tableName === 'tosse-table-container') {
    let tableRowBody = document.getElementById(`${tableName.substring(0,12)}detail`);
    if (!update) {
      let tableRowEl = document.createElement('tr');
      tableRowEl.id = 'T-' + this.storeID;
      let tableRowDataEl = document.createElement('td');
      tableRowDataEl.textContent = this.storeName;
      tableRowEl.appendChild(tableRowDataEl);
      tableRowBody.appendChild(tableRowEl);
      for (let i = 0; i < this.cookieTossersPerHour.length; i++) {
        tableRowDataEl = document.createElement('td');
        tableRowDataEl.textContent = this.cookieTossersPerHour[i];
        tableRowEl.appendChild(tableRowDataEl);
      }
      tableRowDataEl = document.createElement('td');
      // reduce method on array not discussed in class but I know about it
      tableRowDataEl.textContent = this.cookieTossersPerHour.reduce(function (acc, index) {
        return acc + index;
      }, 0);
      tableRowEl.appendChild(tableRowDataEl);
    } else {
      let tableRowToUpdate = document.getElementById(`T-${this.storeID}`);
      let rowCellCount = tableRowToUpdate.cells.length;
      for (let i = 0; i < rowCellCount - 1; i++) {
        tableRowToUpdate.cells[i + 1].textContent = this.cookieTossersPerHour[i];
      }
      this.renderTableFooter(tosserTable);
    }
  }
};

Store.prototype.renderTableFooter = function(tableName) {
  let tableFooterEl = document.getElementById(`${tableName.substring(0,12)}foot`);
  while (tableFooterEl.firstChild) {
    tableFooterEl.removeChild(tableFooterEl.firstChild);
  }
  let tableFooterRowEl = document.createElement('td');
  tableFooterRowEl.textContent = 'Total';
  tableFooterEl.appendChild(tableFooterRowEl);
  if (tableName === 'store-table-container') {
    for (let i = 0; i < companyTotalByHour.length; i++) {
      tableFooterRowEl = document.createElement('td');
      tableFooterRowEl.textContent = companyTotalByHour[i];
      tableFooterEl.appendChild(tableFooterRowEl);
    }
    tableFooterRowEl = document.createElement('td');
    tableFooterRowEl.textContent = companyGrandTotal;
    tableFooterEl.appendChild(tableFooterRowEl);
  } else if (tableName === 'tosse-table-container') {
    for (let i = 0; i < companyTosserTotal.length; i++) {
      tableFooterRowEl = document.createElement('td');
      tableFooterRowEl.textContent = companyTosserTotal[i];
      tableFooterEl.appendChild(tableFooterRowEl);
    }
    tableFooterRowEl = document.createElement('td');
    // reduce method on array not discussed in class but I know about it
    tableFooterRowEl.textContent = companyTosserTotal.reduce(function (acc, index) {
      return acc + index;
    }, 0);
    tableFooterEl.appendChild(tableFooterRowEl);
  }
};

function capFirstLetter(value) {
  if (typeof value !== 'string') return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getFormData(event) {
  event.preventDefault();
  const storeName = capFirstLetter(event.target.storeLocation.value);
  const minCustomers = +event.target.minCust.value;
  const maxCustomers = +event.target.maxCust.value;
  const averageSold = +event.target.cookiesPerHour.value;
  document.getElementById('add-store-form').reset();
  for (let i = 0; i < storeArray.length; i++) {
    if (storeArray[i].storeName === storeName) {
      storeArray[i].minCustomersPerHour = minCustomers;
      storeArray[i].maxCustomersPerHour = maxCustomers;
      storeArray[i].avgCookiesPerCustomer = averageSold;
      storeArray[i].cookiesByHourArray = [];
      storeArray[i].dailyCookieTotal = 0;
      storeArray[i].renderTableRow(storeTable, true);
      storeArray[i].renderTableRow(tosserTable, true);
      return;
    }
  }
  let storeID = storeArray[storeArray.length - 1].storeID + 1;
  new Store(storeID, storeName, minCustomers, maxCustomers, averageSold);
  renderAddTables(storeArray.length -1);
}

function renderAddTables(index) {
  storeArray[index].renderTableRow(storeTable, false);
  storeArray[index].renderTableRow(tosserTable, false);
  storeArray[index].renderTableFooter(storeTable);
  storeArray[index].renderTableFooter(tosserTable);
}

function run() {
  if (!storeArray.length) {
    createStoreObjects();
  }
  for (let i = 0; i < storeArray.length; i++) {
    if (i === 0) {
      storeArray[i].renderTableStructure(storeTable);
      storeArray[i].renderTableHeader(storeArray[i].hours, storeTable);
      storeArray[i].renderTableStructure(tosserTable);
      storeArray[i].renderTableHeader(storeArray[i].hours, tosserTable);
      storeArray[i].renderTableRow(storeTable, false);
      storeArray[i].renderTableRow(tosserTable, false);
    } else {
      storeArray[i].renderTableRow(storeTable, false);
      storeArray[i].renderTableRow(tosserTable, false);
    }
    if (i === storeArray.length - 1) {
      storeArray[i].renderTableFooter(storeTable);
      storeArray[i].renderTableFooter(tosserTable);
    }
  }
}

function createStoreObjects() {
  new Store(1, 'Seattle', 23, 65, 6.3);
  new Store(2, 'Tokyo', 3, 24, 1.2);
  new Store(3, 'Dubai', 11, 38, 3.7);
  new Store(4, 'Paris', 20, 38, 2.3);
  new Store(5, 'Lima', 2, 16, 4.6);
}

run();

const form = document.getElementById('add-store-form');
form.addEventListener('submit', getFormData);
