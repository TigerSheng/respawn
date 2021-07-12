pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CollectibleMemo is ERC721URIStorage {

    uint256 public tokenCounter;

    constructor() public 
    ERC721("CollectibleMemo", "MEMO") 
    {
        tokenCounter = 0;
    }

    function createMemo(string memory tokenURI)
    public returns (bytes32) 
    {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1;
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _setTokenURI(tokenId, _tokenURI);
    }
}