'use strict';

var firstPike = {
  nameOfLocation: '1st and Pike',
  hoursOfOperation: ['6 am', '7 am', '7 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'],
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: function() {
    var customerTrafficFlow = Math.floor(Math.random() * 65) + 1;
    return customerTrafficFlow;
  },
  arrayOfHoursAndCookies: [],
  cookiesSoldPerHour: function() {
    //var hourlyCookieSalesContainer = document.getElementById('first');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {

      var customersAtHour = this.customersPerHour();
      var cookiesSoldEveryHour = Math.floor(customersAtHour * this.avgCookiesPerCust);
      this.arrayOfHoursAndCookies.push(this.hoursOfOperation[i] + ': ' + cookiesSoldEveryHour + ' cookies');
      //var cookieSales = document.createElement('li');
      //cookieSales.textContent = [this.arrayOfHoursAndCookies];
      //hourlyCookieSalesContainer.appendChild([this.arrayOfHoursAndCookies]);
      //return [cookiesSoldEveryHour];
    }
  }
};
firstPike.cookiesSoldPerHour();
console.log(firstPike.arrayOfHoursAndCookies);

