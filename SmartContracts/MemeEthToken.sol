pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract MyRinkebyToken is ERC721Token {

struct Token {
    address mintedBy;
    uint64 mintedAt;
    string nameT;
  }

  Token[] tokens;


    constructor() ERC721Token("MemeToken", "MEM") public {
    }

    function mint(uint256 _uid,_tokenName) public
    {
	Token memory token = Token({
	mintedBy: _owner,
	mintedAt: uint64(now),
	nameT:_tokenName
   });
    tokenId = tokens.push(token) - 1;


        _mint(msg.sender, _uid);
    }

    // Convenience function to get around crappy function overload limitations in Web3
    function depositToGateway(address _gateway, uint256 _uid) public {
        safeTransferFrom(msg.sender, _gateway, _uid);
    }

 function mintToGateway(uint256 _uid) public
    {
        require(msg.sender == gateway, "only the gateway is allowed to mint"); // проверка что создает гетавей
        _mint(gateway, _uid);
    }


}
