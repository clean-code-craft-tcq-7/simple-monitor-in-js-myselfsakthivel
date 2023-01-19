const { expect } = require('chai');
const { batteryIsOk } = require("./bms-monitor");

expect(isThresholdBreach(0, 45, 20, "Temperature")).to.be.true;
expect(isThresholdBreach(0, 45, 0, "Temperature")).to.be.true;
expect(isThresholdBreach(0, 45, 45, "Temperature")).to.be.true;

expect(isThresholdBreach(20, 80, 20, "State of Charge")).to.be.true;
expect(isThresholdBreach(20, 80, 21, "State of Charge")).to.be.true;
expect(isThresholdBreach(20, 80, 81, "State of Charge")).to.be.false;

expect(isChargeRateNormal(0.8, 0.4, "Charge Rate")).to.be.true;
expect(isChargeRateNormal(0.8, 0.9, "Charge Rate")).to.be.false;

expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0.0)).to.be.true;
