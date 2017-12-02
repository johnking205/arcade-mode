
/* eslint spaced-comment: 0 */
/* eslint no-redeclare: 0 */
/* eslint no-unused-vars: 0 */

const assert = require('assert');

/// title: Discordian date
/// type: rosetta-code

/// categories:


/// difficulty: 5

/// description:
/// <div class="rosetta">
/// <br/><dl class="rosetta__description-list"><dt class="rosetta__description-title">Task:</dt></dl>
/// <p class="rosetta__paragraph">Convert a given date from the  <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Gregorian calendar" title="wp: Gregorian calendar">Gregorian calendar</a>  to the  <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Discordian calendar" title="wp: Discordian calendar">Discordian calendar</a>.</p>
/// <br><br><br/></div>

/// challengeSeed:
function discordianDate (date) {
  // Good luck!
  return true;
}

/// solutions:
/**
 * All Hail Discordia! - this script prints Discordian date using system date.
 *
 * lang: JavaScript
 * author: jklu
 * contributors: JamesMcGuigan
 *
 * source: https://rosettacode.org/wiki/Discordian_date#JavaScript
 */
const seasons = [
  'Chaos', 'Discord', 'Confusion',
  'Bureaucracy', 'The Aftermath'
];
const weekday = [
  'Sweetmorn', 'Boomtime', 'Pungenday',
  'Prickle-Prickle', 'Setting Orange'
];

const apostle = [
  'Mungday', 'Mojoday', 'Syaday',
  'Zaraday', 'Maladay'
];

const holiday = [
  'Chaoflux', 'Discoflux', 'Confuflux',
  'Bureflux', 'Afflux'
];


Date.prototype.isLeapYear = function() {
  const year = this.getFullYear();
  if ((year & 3) !== 0) { return false; }
  return ((year % 100) !== 0 || (year % 400) === 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
  const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const mn = this.getMonth();
  const dn = this.getDate();
  let dayOfYear = dayCount[mn] + dn;
  if (mn > 1 && this.isLeapYear()) { dayOfYear += 1; }
  return dayOfYear;
};

Date.prototype.isToday = function() {
  const today = new Date();
  return this.getDate() === today.getDate()
      && this.getMonth() === today.getMonth()
      && this.getFullYear() === today.getFullYear()
  ;
};

function discordianDate(date) {
  if (!date) { date = new Date(); }

  const y = date.getFullYear();
  const yold = y + 1166;
  let dayOfYear = date.getDOY();
  let celebrateHoliday = null;

  if (date.isLeapYear()) {
    if (dayOfYear === 60) {
      celebrateHoliday = 'St. Tib\'s Day';
    }
    else if (dayOfYear > 60) {
      dayOfYear--;
    }
  }
  dayOfYear--;

  const divDay = Math.floor(dayOfYear / 73);

  const seasonDay = (dayOfYear % 73) + 1;
  if (seasonDay === 5) {
    celebrateHoliday = apostle[divDay];
  }
  if (seasonDay === 50) {
    celebrateHoliday = holiday[divDay];
  }

  const season = seasons[divDay];
  const dayOfWeek = weekday[dayOfYear % 5];

  const nth = (seasonDay % 10 === 1) ? 'st'
          : (seasonDay % 10 === 2) ? 'nd'
          : (seasonDay % 10 === 3) ? 'rd'
                                  : 'th';

  return ''
         + dayOfWeek
         + ', the ' + seasonDay + nth
         + ' day of ' + season
         + ' in the YOLD ' + yold
         + (celebrateHoliday ? '. Celebrate ' + celebrateHoliday + '!' : '')
    ;
}


/// tests:
assert(typeof discordianDate === 'function', 'message: <code>discordianDate</code> is a function.');
assert(discordianDate(new Date(2010, 6, 22)) === 'Pungenday, the 57th day of Confusion in the YOLD 3176', 'message: <code>discordianDate(new Date(2010, 6, 22))</code> should return <code>"Pungenday, the 57th day of Confusion in the YOLD 3176"</code>.');
assert(discordianDate(new Date(2012, 1, 28)) === 'Prickle-Prickle, the 59th day of Chaos in the YOLD 3178', 'message: <code>discordianDate(new Date(2012, 1, 28))</code> should return <code>"Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"</code>.');
assert(discordianDate(new Date(2012, 1, 29)) === 'Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!', 'message: <code>discordianDate(new Date(2012, 1, 29))</code> should return <code>"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!"</code>.');
assert(discordianDate(new Date(2012, 2, 1)) === 'Setting Orange, the 60th day of Chaos in the YOLD 3178', 'message: <code>discordianDate(new Date(2012, 2, 1))</code> should return <code>"Setting Orange, the 60th day of Chaos in the YOLD 3178"</code>.');
assert(discordianDate(new Date(2010, 0, 5)) === 'Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!', 'message: <code>discordianDate(new Date(2010, 0, 5))</code> should return <code>"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"</code>.');
assert(discordianDate(new Date(2011, 4, 3)) === 'Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!', 'message: <code>discordianDate(new Date(2011, 4, 3))</code> should return <code>"Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"</code>.');
assert(discordianDate(new Date(2015, 9, 19)) === 'Boomtime, the 73rd day of Bureaucracy in the YOLD 3181', 'message: <code>discordianDate(new Date(2015, 9, 19))</code> should return <code>"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"</code>.');
/// id: 59f4eafba0343628bb682785
