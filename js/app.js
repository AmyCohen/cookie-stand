'use strict';
var hoursOfOperation = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var allLocations = [];
var output = [];
var salmonCookieStands = document.getElementById('salmonCookieStands');
var storeLocations = document.getElementById('storeLocations');



function SalmonCookiesByLocation(nameOfLocation, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.nameOfLocation = nameOfLocation;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.arrayOfHoursAndCookies = [];
  this.runningCookieDailyTotals = 0;
  allLocations.push(this);

}

SalmonCookiesByLocation.prototype.customersPerHour = function() {
  var customerTrafficFlow = Math.floor(Math.random() * this.maxCustPerHour) + 1;
  return customerTrafficFlow;
};
SalmonCookiesByLocation.prototype.customersPerHour();


SalmonCookiesByLocation.prototype.cookiesSoldPerHour = function() {

  for (var i = 0; i < hoursOfOperation.length; i++) {

    var customersAtHour = this.customersPerHour();
    var cookiesSoldEveryHour = Math.floor(customersAtHour * this.avgCookiesPerCust);

    this.arrayOfHoursAndCookies.push(cookiesSoldEveryHour);

    this.runningCookieDailyTotals += cookiesSoldEveryHour;
    // console.log(this.nameOfLocation + ': ' + this.runningCookieDailyTotals);
  }
};

new SalmonCookiesByLocation('1st and Pike', 23, 65, 6.3);
new SalmonCookiesByLocation('SeaTac Airport', 3, 24, 1.2);
new SalmonCookiesByLocation('Seattle Center', 11, 38, 3.7);
new SalmonCookiesByLocation('Capitol Hill', 20, 38, 2.3);
new SalmonCookiesByLocation('Alki', 2, 16, 4.6);


var hourlyTotals = function() {
  var pike = firstPike.arrayOfHoursAndCookies;
  var sta = seaTac.arrayOfHoursAndCookies;
  var sc = seattleCenter.arrayOfHoursAndCookies;
  var ch = CapitolHill.arrayOfHoursAndCookies;
  var ab = alki.arrayOfHoursAndCookies;

  for (var i = 0; i < hoursOfOperation.length; i++) {
    output.push(pike[i] + sta[i] + sc[i] + ch[i] + ab[i]);
  }
  return output;
};

SalmonCookiesByLocation.prototype.render = function() {
  var tBodyElement = document.createElement('tbody');
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement = document.createElement('td');
  tdElement.textContent = this.nameOfLocation;
  trElement.appendChild(tdElement);
  tBodyElement.appendChild(trElement);

  for (var j = 0; j < this.arrayOfHoursAndCookies.length; j++){
    tdElement = document.createElement('td');
    tdElement.textContent = this.arrayOfHoursAndCookies[j];
    trElement.appendChild(tdElement);
    tBodyElement.appendChild(trElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.runningCookieDailyTotals;
  trElement.appendChild(tdElement);
  tBodyElement.appendChild(trElement);

  salmonCookieStands.appendChild(tBodyElement);
};

function renderAllLocations() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

function addNewLocation(event) {
  event.preventDefault();

  var newLocation = event.target.storeName.value;
  var newMinCustFlow = event.target.minCust.value;
  var newMaxCustFlow = event.target.maxCust.value;
  var newAvgSale = event.target.avgSale.value;

  new SalmonCookiesByLocation(newLocation, newMinCustFlow, newMaxCustFlow, newAvgSale);

  salmonCookieStands.innerHTML = '';
  headerRow();
}

storeLocations.addEventListener('submit', addNewLocation);

function headerRow() {

  var tHeadElement = document.createElement('thead');
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = '';
  headerTrElement.appendChild(thElement);
  tHeadElement.appendChild(headerTrElement);

  for (var i = 0; i < hoursOfOperation.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hoursOfOperation[i];
    headerTrElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  headerTrElement.appendChild(thElement);
  tHeadElement.appendChild(headerTrElement);
  storeLocations.appendChild(headerTrElement);


  salmonCookieStands.appendChild(tHeadElement);
}

function footerRow() {

  var footerTrElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = 'Hourly Totals';
  footerTrElement.appendChild(tdElement);

  for (var i = 0; i < output.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = output[i];
    footerTrElement.appendChild(tdElement);
  }
  var endElement = document.createElement('td');
  endElement.textContent = '';
  footerTrElement.appendChild(endElement);

  salmonCookieStands.appendChild(footerTrElement);
}

// firstPike.cookiesSoldPerHour();
// seaTacAirport.cookiesSoldPerHour();
// seattleCenter.cookiesSoldPerHour();
// capitolHill.cookiesSoldPerHour();
// alki.cookiesSoldPerHour();

// firstPike.render();
// seaTacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();

hourlyTotals();
headerRow();
footerRow();
renderAllLocations;
console.log(output);


//TODO: possibly add a new table element to try and get the totals at the bottom
// var totalsTableContainer = document.getElementById('hourly-totals');

// function totalsTable() {
//   var totalsTrElement = document.createElement('tr');
//   var tdElement = document.createElement('td');
//   tdElement.textContent = 'Hourly Totals:';
//   totalsTrElement.appendChild(tdElement);

//   for (var i = 0; i < output.length; i++){
//     tdElement = document.createElement('td');
//     tdElement.textContent = output[i];
//     totalsTrElement.appendChild(tdElement);
//   }

//   tdElement = document.createElement('td');
//   tdElement.textContent = '';
//   totalsTrElement.appendChild(tdElement);

//   totalsTableContainer.appendChild(totalsTrElement);
// }
// totalsTable();

