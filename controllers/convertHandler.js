/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    return this.splitNumberAndUnit(input)
      .initNumber.split("/")
      .reduce((acc, num) => acc / this.numberChecker(num));
  };

  this.getUnit = function (input) {
    return this.splitNumberAndUnit(input).initUnit;
  };

  this.getReturnUnit = function (initUnit) {
    const units = {
      liquids: ["gal", "L"],
      weights: ["lbs", "Kg"],
      distances: ["mi", "Km"],
    };
    for (type in units) {
      if (units[type].indexOf(initUnit) >= 0) {
        const switchedIndex = 1 - units[type].indexOf(initUnit);
        return units[type][switchedIndex];
      }
    }
  };

  this.spellOutUnit = function (unit) {
    const unitSpelling = {
      gal: "gallons",
      L: "litres",
      lbs: "pounds",
      Kg: "kilograms",
      mi: "miles",
      Km: "kilometers",
    };
    return unitSpelling[unit];
  };

  this.convert = function (initNum, initUnit) {
    const unitCaltulations = {
      gal: 3.78541,
      L: 1 / 3.78541,
      lbs: 0.453592,
      Kg: 1 / 0.453592,
      mi: 1.60934,
      Km: 1 / 1.60934,
    };
    const calculation = initNum * unitCaltulations[initUnit];
    return parseFloat(calculation).toFixed(5);
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
    return input.match(/(?<initNumber>[.0-9\/]*)(?<initUnit>[a-zA-Z]*)/).groups;
  };

  this.numberChecker = function (input) {
    // Check whether we have a real number
    // Especially important here to check the number of dots
    if (isNaN(input)) return undefined;
    else return input;
  };
}

module.exports = ConvertHandler;
