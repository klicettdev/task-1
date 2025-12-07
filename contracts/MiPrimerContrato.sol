// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract MiPrimerContrato {
    string public nombre;

    function cambiarNombre(string memory _nombre) public {
        nombre = _nombre;
    }
}
