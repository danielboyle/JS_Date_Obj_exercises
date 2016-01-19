// Question 1
var today = new Date();

// Question 2
console.log("Today's day is " + today.getDay());

// Question 3
var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log("Today's day is " + days_of_week[today.getDay()]);

// Question 4
console.log("Today's day is " + days_of_week[today.getDay()] + ", the " + today.getDate());

// Question 5
function dateSuffix(date) {
  var suffix = 'th',
      date_string = date.toString(),
      digit;

  if (date_string.length === 1) { digit = date_string[0]; }
  else if (date_string[0] !== '1') { digit = date_string[1]; }

  if (digit === '1') { suffix = 'st'; }
  else if (digit === '2') { suffix = 'nd'; }
  else if (digit === '3') { suffix = 'rd'; }

  return date + suffix;
}
console.log("Today's date is " + days_of_week[today.getDay()] + ", the " + dateSuffix(today.getDate()));

// Question 6
console.log("Today's date is " + days_of_week[today.getDay()] + ", " + today.getMonth() + " " + dateSuffix(today.getDate()));

// Question 7
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log("Today's date is " + days_of_week[today.getDay()] + ", " + months[today.getMonth()] + " " + dateSuffix(today.getDate()));

// Question 8
function formatWeekday(date) {
  var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      day_idx = date.getDay();

  return days_of_week[day_idx];
}

function formatMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      month_idx = date.getMonth();

  return months[month_idx];
}

function formatDateNumber(date) {
  return dateSuffix(date.getDay());
}

function printFullDate(date) {
  var weekday = formatWeekday(date),
      month = formatMonth(date),
      date_number = formatDateNumber(date);

  var full_date = "The date is " + weekday + ", " + month + " " + date_number;

  console.log(full_date);
}

printFullDate(today);

// Question 9
console.log(today.getYear());

function formatYear(date) {
  return date.getYear() + 1900;
}

// Question 10
console.log(today.getFullYear());

// Question 11
console.log(today.getTime());

// Question 12
var tomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);
printFullDate(tomorrow);

// Question 13
var next_week = new Date(today);

console.log(today === next_week);

// Question 14
var next_week_str = next_week.toDateString();
var today_str = today.toDateString();

console.log(today_str === next_week_str);

next_week.setDate(today.getDate() + 7);

// Question 15
function formatTime(date) {
  return date.getHours() + ":" + date.getMinutes();
}

console.log(formatTime(today));
