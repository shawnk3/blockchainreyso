// The contract allows only its creator to create new coins (different issuance scheme are possible). Anyone can send coins to each other without a need for registering with a username and password

pragma solidity >=0.5.0 <0.7.0;

contract Coin {
    address public minter;
    mapping (address => uint) public balances;

    // Events allow clients to react to specific
    // contract changes you declare
    event Sent(address from, address to, uint amount);

    // Constructor code is only run when the contract
    // is created
    constructor() public {
        minter = msg.sender;
    }

    // Sends an amount of newly created coins to an address
    function mint(address receiverID, uint amount) public {
        require(msg.sender == minter);
        require(amount < 1e60);
        balances[receiverID] += amount;
    }

    // Sends an amount of existing coins
    // from any caller to an address
    function send(address receiverID, uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiverID] += amount;
        emit Sent(msg.sender, receiverID, amount);
    }
}

// Link for interacting with smart contracts: https://www.baeldung.com/smart-contracts-ethereum-solidity