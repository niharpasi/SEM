// eslint-disable-next-line no-undef
const contract = artifacts.require("SEM");

module.exports = function (deployer) {
    deployer.deploy(contract);
};