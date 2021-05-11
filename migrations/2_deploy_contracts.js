//var Day1RegistryArtifact = artifacts.require("Day1Registry");

//module.exports = function (deployer) {
 // deployer.deploy(Day1RegistryArtifact);
//};

//New code for vaccine deployment 
var covidVaccineRegisterArtifact = artifacts.require("covidVaccineRegister");

module.exports = function (deployer) {
  deployer.deploy(covidVaccineRegisterArtifact);
};