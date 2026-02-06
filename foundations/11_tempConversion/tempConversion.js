const convertToCelsius = function(tempF) {
  let tempC= (tempF-32)*(5/9);
  return roundToOne(tempC);
};

const convertToFahrenheit = function(tempC) {
  let tempF=(tempC*(9/5))+32;
  return roundToOne(tempF);
};

function roundToOne(num){
  return Math.round(num*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
