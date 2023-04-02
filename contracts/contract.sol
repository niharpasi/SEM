// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.9.0;

contract SEM{
    uint256 public inputValue;
    string public text;

    function saveData(string memory _text) public{
        text = _text;
    }

    function saveData(uint256 _value) public {
        inputValue = _value;
    }
}
