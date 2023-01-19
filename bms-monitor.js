const {expect} = require('chai');

function isThresholdBreach(startValue, endValue, valueToBeChecked, errMsg) {
    if (valueToBeChecked < startValue || valueToBeChecked > endValue) {
        console.log(errMsg + 'is out of range!');
        return false;
    }
    return true;
}

function isChargeRateNormal(limit, valueToBeChecked, errMsg) {
	if (valueToBeChecked > limit) {
        console.log(errMsg + 'is out of range!');
        return false;
    }
    return true;
}

function batteryIsOk(temperature, soc, chargeRate) {
	var isTemperatureNormal = isThresholdBreach(0, 45, temperature, "Temperature");
	var isSocNormal = isThresholdBreach(20, 80, soc, "State of Charge");
	var isChrgRateNormal = isChargeRateNormal(0.8, chargeRate, "Charge Rate");
	return isTemperatureNormal && isSocNormal && isChrgRateNormal;
}

expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false;
