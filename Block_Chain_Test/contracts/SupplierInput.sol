pragma solidity ^0.5.*;

contract SupplierInput{
    //states
    enum StateType {Requested, Accepted, Rejected}
    

    StateType public State;
    address public Supplier;
    address public Importer;
    string public PartNumber;
    string public PartDescription;
    string public LocationCode;
    string public ImportCountry;
    string public Year;
    
    //constructor
    constructor(string memory partnumber, string memory partdescription, string memory locationcode, string memory importcountry, string memory year) public
    {
        Supplier = msg.sender;
        PartDescription = partdescription;
        PartNumber = partnumber;
        LocationCode = locationcode;
        ImportCountry = importcountry;
        Year = year;
        State = StateType.Requested;
        //change to started
    }

    function AcceptedInput() public{
        State = StateType.Accepted;
    }

    function MakeRequest(string memory partnumber, string memory partdescription, string memory year) public{
        PartNumber = partnumber; 
        PartDescription = partdescription;
        Year = year;
        State = StateType.Requested;
    }

    function SubmitOrigin(string memory locationcode, string memory importcountry) public{
        LocationCode = locationcode;
        ImportCountry = importcountry;
        Supplier = msg.sender;
        if(importcountry == "MX" || importcountry == "CA"){
            State = StateType.Accepted;
        }
        else{
            State = StateType.Rejected;
        }
    }

}

