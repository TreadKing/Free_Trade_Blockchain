pragma solidity >=0.4.25 <0.6.0;

contract SupplierPlus
{

    //Set of States
    enum StateType { Requested, Submitted, Accepted, Rejected }
    
    //List of properties
    StateType public  State;
    address public  Importer;
    address public  Supplier;
    string public  ProductID;
    string public  ProductDescription;
    string public  OriginCountry;
    string public  ImportCountry;
    string public  Year;
    
    constructor(address supplier, string memory productid, string memory productdescription, string memory year) public
    {
        Importer = msg.sender;
        Supplier = supplier;
        ProductID = productid;
        ProductDescription = productdescription;
        Year = year;
        State = StateType.Requested;
    }

    function CertifyOrigin(string memory origincountry, string memory importcountry ) public
    {
        OriginCountry = origincountry;
        ImportCountry = importcountry;
        State = StateType.Submitted;   
    }

    function Accepted() public
    {
        State = StateType.Accepted;
       
    }

    function Rejected() public
    {
        State = StateType.Rejected;
       
    }
}