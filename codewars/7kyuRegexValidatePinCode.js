import { assertEquals } from "./testModule.js"

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

assertEquals(validatePIN("1234"), true)
assertEquals(validatePIN("00000000"),false)
assertEquals(validatePIN("1.234"),false)