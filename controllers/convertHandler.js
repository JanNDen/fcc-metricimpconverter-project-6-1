/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    const allNumbers = this.splitNumberAndUnit(input).initNumber.split("/");
    let areValidNumbers = true;
    allNumbers.forEach(function (ele) {
      if (isNaN(ele) || ele == "") areValidNumbers = false;
    });
    if (areValidNumbers) return allNumbers.reduce((acc, val) => acc / val);
    else return undefined;
  };

  this.getUnit = function (input) {
    return this.splitNumberAndUnit(input).initUnit;
  };

  this.getReturnUnit = function (initUnit) {
    const original = ["gal", "L", "mi", "km", "lbs", "kg"];
    const converted = ["L", "gal", "km", "mi", "kg", "lbs"];
    const correctIndex = original.indexOf(initUnit);
    if (correctIndex >= 0) return converted[correctIndex];
    else return undefined;
  };

  this.spellOutUnit = function (unit) {
    const unitSpelling = {
      gal: "gallons",
      L: "litres",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers",
    };
    return unitSpelling[unit];
  };

  this.convert = function (initNum, initUnit) {
    const unitCaltulations = {
      gal: 3.78541,
      L: 1 / 3.78541,
      lbs: 0.453592,
      kg: 1 / 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934,
    };
    console.log(initNum, initUnit);
    const calculation = initNum * unitCaltulations[initUnit];
    return parseFloat(parseFloat(calculation).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const words = [
      initNum,
      this.spellOutUnit(initUnit),
      "converts to",
      returnNum,
      this.spellOutUnit(returnUnit),
    ];
    return words.join(" ");
  };

  this.splitNumberAndUnit = function (input) {
    // Helper function that returns an object with separated number and unit

    //return input.match(/(?<initNumber>[.0-9\/]*)(?<initUnit>[a-zA-Z]*)/).groups;
    let initNumber =
      input.match(/(?<initNumber>[.0-9\/]*)(?<initUnit>[a-zA-Z]*)/).groups
        .initNumber || "1";
    if (/\/.*\//.test(input)) initNumber = ""; // We accept only one backslash in the number
    let initUnit = input
      .match(/(?<initNumber>[.0-9\/]*)(?<initUnit>[a-zA-Z]*)/)
      .groups.initUnit.toLowerCase();
    if (initUnit == "l") initUnit = "L"; // only liters has capital abbreviation
    return { initNumber, initUnit };
  };

  this.numberChecker = function (input) {
    // Check whether we have a real number
    return !isNaN(input);
  };
}

module.exports = ConvertHandler;
