pragma solidity ^0.5.*;

contract Supplier_Input{
    //states
    enum StateType {Requested, Submitted, Accepted, Rejected}
    

    StateType public State;
    address public InstanceSupplier;
    address public Importer;
    string public PartNumber;
    string public PartDescription;
    string public LocationCode;
    string public ImportCountry;
    string public Year;
    
    //contstuctor
    constructor(string memory partnumber, string memory partdescription, string memory year, address instancesupplier) public{
        Importer = msg.sender;
        PartNumber = partnumber; 
        PartDescription = partdescription;
        Year = year;
        State = StateType.Requested;
        InstanceSupplier = instancesupplier;
        //change to started
    }

    function AcceptedInput() public{
        State = StateType.Accepted;
    }

    function MakeRequest(string memory partnumber, string memory partdescription, string memory year, address instancesupplier) public{
        PartNumber = partnumber; 
        PartDescription = partdescription;
        Year = year;
        State = StateType.Submitted;
        Importer = msg.sender;
        InstanceSupplier = instancesupplier;
        
    }

    function SubmitOrigin(string memory locationcode, string memory importcountry) public{
        LocationCode = locationcode;
        ImportCountry = importcountry;
        InstanceSupplier = msg.sender;     

        State = StateType.Submitted;
   
    }

}

