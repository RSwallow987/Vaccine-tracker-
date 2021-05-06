pragma solidity ^0.8.4;

contract covidVaccineRegister{

    struct VaccinationRecord {
      string Name;
      string Surname;
      string VaccinationDate;
      string VaccineName;
      string VaccinationPlace;
      address added_by;
    }
    VaccinationRecord[] public vaccinationRecords;

    function createVaccinationRecord(string calldata _Name, string calldata _Surname, string calldata _VaccinationDate,  string calldata _VaccineName, string calldata _VaccinationPlace ) external returns(uint){
        // get an instance of a Day1User using the input variables and push into the array of day1_users
    vaccinationRecords.push(VaccinationRecord(_Name, _Surname,_VaccinationDate,_VaccineName,_VaccinationPlace, msg.sender)) ;
    //return the id
    uint id = this.getNumberOfVaccinations() - 1;
    // return the user id
    return id ; 
    }

    function getNumberOfVaccinations() external view returns(uint) {
    // return the length of the vaccinationRecords array
    return vaccinationRecords.length;
    }

    //function getVaccinationRecord(uint id) external view returns (struct){

    //Can except value
    //Retrieves a particular instance of ‘VaccinationRecord’ from the array ‘vaccinationRecords’ given a valid index (0 <= index < length of the 'vaccinationRecords' array)
    //Throws an exception if an invalid index is passed to the function (Hint: to get the length of the 'vaccinationRecords' array, use the ‘getNumberOfVaccinations’ function you created in the previous step)

    }


}


