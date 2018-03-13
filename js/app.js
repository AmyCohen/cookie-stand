'use strict';
var hoursOfOperation = ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

function SalmonCookiesByLocation(nameOfLocation, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.nameOfLocation = nameOfLocation;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.arrayOfHoursAndCookies = [];
  this.runningCookieDailyTotals = 0;
}

SalmonCookiesByLocation.prototype.customersPerHour = function() {
  var customerTrafficFlow = Math.floor(Math.random() * this.maxCustPerHour) + 1;
  return customerTrafficFlow;
};

SalmonCookiesByLocation.prototype.cookiesSoldPerHour = function() {
  var hourlyCookieSalesContainer = document.getElementById('pike');
  var totalCookiesContainer = document.getElementById('pike-totals');

  for (var i = 0; i < hoursOfOperation.length; i++) {

    var customersAtHour = this.customersPerHour();
    var cookiesSoldEveryHour = Math.floor(customersAtHour * this.avgCookiesPerCust);

    this.arrayOfHoursAndCookies.push(hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

    this.runningCookieDailyTotals += cookiesSoldEveryHour;
    console.log('Pike: ' + this.runningCookieDailyTotals);

    var cookieSales = document.createElement('li');
    cookieSales.textContent = this.arrayOfHoursAndCookies[i];
    hourlyCookieSalesContainer.appendChild(cookieSales);

  }
  var dailyTotals = document.createElement('li');
  dailyTotals.textContent = 'Total: ' + this.runningCookieDailyTotals;
  totalCookiesContainer.appendChild(dailyTotals);
};


var firstPike = new SalmonCookiesByLocation('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new SalmonCookiesByLocation('SeaTac Airport', 3, 24, 1.2);



firstPike.cookiesSoldPerHour();
console.log(firstPike.arrayOfHoursAndCookies);

seaTacAirport.cookiesSoldPerHour();
console.log(seaTacAirport.arrayOfHoursAndCookies);


var seattleCenter = {
  nameOfLocation: 'Seattle Center',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  runningCookieDailyTotals: 0,
  customersPerHour: function () {
    var customerTrafficFlow = Math.round(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('seattle-center');
    var totalCookiesContainer = document.getElementById('seattle-center-totals');

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour =  Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      this.runningCookieDailyTotals += cookiesSoldEveryHour;
      console.log('Seattle Center: ' + this.runningCookieDailyTotals);

      var cookiesSales = document.createElement('li');
      cookiesSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookiesSales);
    }
    var dailyTotals = document.createElement('li');
    dailyTotals.textContent = 'Total: ' + this.runningCookieDailyTotals;
    totalCookiesContainer.appendChild(dailyTotals);
  }
};

seattleCenter.cookiesSoldPerHour();
console.log(seattleCenter.arrayOfHoursAndCookies);


var capitolHill = {
  nameOfLocation: 'Capitol Hill',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  runningCookieDailyTotals: 0,
  customersPerHour: function () {
    var customerTrafficFlow = Math.round(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('capitol-hill');
    var totalCookiesContainer = document.getElementById('capitol-hill-totals');

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour =  Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      this.runningCookieDailyTotals += cookiesSoldEveryHour;
      console.log('Capitol Hill: ' + this.runningCookieDailyTotals);

      var cookiesSales = document.createElement('li');
      cookiesSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookiesSales);
    }
    var dailyTotals = document.createElement('li');
    dailyTotals.textContent = 'Total: ' + this.runningCookieDailyTotals;
    totalCookiesContainer.appendChild(dailyTotals);
  }
};

capitolHill.cookiesSoldPerHour();
console.log(capitolHill.arrayOfHoursAndCookies);


var alki = {
  nameOfLocation: 'Alki',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  runningCookieDailyTotals: 0,
  customersPerHour: function () {
    var customerTrafficFlow = Math.round(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('alki');
    var totalCookiesContainer = document.getElementById('alki-totals');

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour =  Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      this.runningCookieDailyTotals += cookiesSoldEveryHour;
      console.log('Alki: ' + this.runningCookieDailyTotals);

      var cookiesSales = document.createElement('li');
      cookiesSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookiesSales);
    }
    var dailyTotals = document.createElement('li');
    dailyTotals.textContent = 'Total: ' + this.runningCookieDailyTotals;
    totalCookiesContainer.appendChild(dailyTotals);
  }
};

alki.cookiesSoldPerHour();
console.log(alki.arrayOfHoursAndCookies);

