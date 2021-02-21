/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    // Validate numbers and units
    // If they are undefined, it means they failed tests in convertHandler.js
    if (!initNum && (!initUnit || !returnUnit)) {
      console.log(input, "invalid number and unit");
      res.send("invalid number and unit");
    } else if (!initNum) {
      console.log(input, "invalid number");
      res.send("invalid number");
    } else if (!initUnit || !returnUnit) {
      console.log(input, "invalid unit");
      res.send("invalid unit");
    } else {
      // Return the output
      const output = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      };
      console.log(input, output);
      res.json(output);
    }
  });
};
