const leapYears = function(num) {
    if (Number.isInteger(num)==false) {return "Please enter a valid year"}
    if (((num%4==0)&&(num%100!=0))||(num%400==0)) {return true}
    return false
};

// Do not edit below this line
module.exports = leapYears;
