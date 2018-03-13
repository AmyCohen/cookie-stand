'use strict';

var firstPike = {
  nameOfLocation: '1st and Pike',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: function() {
    var customerTrafficFlow = Math.floor(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('pike');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour = Math.floor(customersAtHour * this.avgCookiesPerCust);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      var cookieSales = document.createElement('li');
      cookieSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookieSales);
    }
  }
};

firstPike.cookiesSoldPerHour();
console.log(firstPike.arrayOfHoursAndCookies);

var seaTacAirport = {
  nameOfLocation: 'SeaTac Airport',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: function() {
    var customerTrafficFlow = Math.floor(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {

    var hourlyCookieSalesContainer = document.getElementById('seatac');

    for (var i = 0; i < this.hoursOfOperation.length; i ++) {

      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour = Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      var cookieSales = document.createElement('li');
      cookieSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookieSales);
    }
  }
};

seaTacAirport.cookiesSoldPerHour();
console.log(seaTacAirport.arrayOfHoursAndCookies);


var seattleCenter = {
  nameOfLocation: 'Seattle Center',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: function () {
    var customerTrafficFlow = Math.round(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('seattle-center');

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour =  Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      var cookiesSales = document.createElement('li');
      cookiesSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookiesSales);
    }
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
  customersPerHour: function () {
    var customerTrafficFlow = Math.round(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('capitol-hill');

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour =  Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      var cookiesSales = document.createElement('li');
      cookiesSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookiesSales);
    }
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
  customersPerHour: function () {
    var customerTrafficFlow = Math.round(Math.random() * this.maxCustPerHour) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    var hourlyCookieSalesContainer = document.getElementById('alki');

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour =  Math.floor(this.avgCookiesPerCust * customersAtHour);

      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');

      var cookiesSales = document.createElement('li');
      cookiesSales.textContent = this.arrayOfHoursAndCookies[i];
      hourlyCookieSalesContainer.appendChild(cookiesSales);
    }
  }
};

alki.cookiesSoldPerHour();
console.log(alki.arrayOfHoursAndCookies);

