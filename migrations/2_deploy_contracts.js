var DateTime = artifacts.require("DateTime.sol");
var CryptoTorchToken = artifacts.require("CryptoTorchToken.sol");
var CryptoTorch = artifacts.require("CryptoTorch.sol");

module.exports = function(deployer) {
    deployer.deploy(DateTime);
    deployer.deploy(CryptoTorchToken);
    deployer.deploy(CryptoTorch);
};
