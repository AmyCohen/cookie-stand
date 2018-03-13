'use strict';
var hoursOfOperation = ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var allLocations = [];

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

SalmonCookiesByLocation.prototype.cookiesSoldPerHour = function() {

  for (var i = 0; i < hoursOfOperation.length; i++) {

    var customersAtHour = this.customersPerHour();
    var cookiesSoldEveryHour = Math.floor(customersAtHour * this.avgCookiesPerCust);

    this.arrayOfHoursAndCookies.push(hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

    this.runningCookieDailyTotals += cookiesSoldEveryHour;
    console.log(this.nameOfLocation + ': ' + this.runningCookieDailyTotals);
  }
};


var salmonCookieStands = document.getElementById('salmon-cookie-stands');

SalmonCookiesByLocation.prototype.render = function() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement = document.createElement('td');
  tdElement.textContent = this.nameOfLocation;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.minCustPerHour;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.maxCustPerHour;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.avgCookiesPerCust;
  trElement.appendChild(tdElement);


  salmonCookieStands.appendChild(trElement);
};
var firstPike = new SalmonCookiesByLocation('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new SalmonCookiesByLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new SalmonCookiesByLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new SalmonCookiesByLocation('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonCookiesByLocation('Alki', 2, 16, 4.6);


// var hourlyCookieSalesContainer = document.getElementById('pike');
// var totalCookiesContainer = document.getElementById('pike-totals');

// var cookieSales = document.createElement('li');
// cookieSales.textContent = this.arrayOfHoursAndCookies[i];
// hourlyCookieSalesContainer.appendChild(cookieSales);

// var dailyTotals = document.createElement('li');
// dailyTotals.textContent = 'Total: ' + this.runningCookieDailyTotals;
// totalCookiesContainer.appendChild(dailyTotals);

firstPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
// firstPike.cookiesSoldPerHour();
console.log(firstPike.arrayOfHoursAndCookies);

// seaTacAirport.cookiesSoldPerHour();
console.log(seaTacAirport.arrayOfHoursAndCookies);

// seattleCenter.cookiesSoldPerHour();
console.log(seattleCenter.arrayOfHoursAndCookies);

// capitolHill.cookiesSoldPerHour();
console.log(capitolHill.arrayOfHoursAndCookies);

// alki.cookiesSoldPerHour();
console.log(alki.arrayOfHoursAndCookies);

