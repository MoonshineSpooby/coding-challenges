import { assertDeepEquals } from "./testModule";

/*Section 1: Encryption
* input: must be 9 character length over set of lowercase a - z;
*
*/

function encrypt(passcode) {
    if(passcode.length !== 9){
        return "BANG!"
    } 
    passcode.split("")
            
    for(let i = 0; i < 9; i++)
        if(passcode[i].charCodeAt(0) < 97 || passcode[i].charCodeAt(0) > 122)
            return "BANG!";
        passcode[i] = passcode.charCodeAt(i) - 96 ? i == 1 || i == 3
        passcode[i] = 
  }
  
  //Section 2: Decryption
  var validPasscodes = passcodes; // Do not change this! Only the boss knows all the passcodes,
                                  // but you can still check through this var
  
  function decrypt(password) {
    //And now check if the password you were given is correct!
    
  }

assertDeepEquals(encrypt("jamesbond"), "bsepoe10a13");