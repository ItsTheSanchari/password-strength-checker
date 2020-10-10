let passwordStrength = 0
strengthCalculator = (statusArr) => {
    statusArr.forEach(status => {
       passwordStrength = status && status.testResult ? passwordStrength+1 : passwordStrength
    });
    return passwordStrength
}
module.exports = strengthCalculator