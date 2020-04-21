var todaysDate = new Date();
var weekday = todaysDate.toLocaleString("default", { weekday: "short"});
var currentYear = todaysDate.getFullYear();

const copyrightYear = document.querySelector('#current-year');

console.log(todaysDate);
console.log(weekday);
console.log(currentYear);

copyrightYear.innerHTML = currentYear;