let email = 'malviyashreya26@gmail.com';
let emailRegex = RegExp('^[0-9a-zA-Z]+([._-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$');
// analyze a pin to make sure it only contained numbers and was either 4 or 6 characters
	//\D Metacharacter in JavaScript is used to search non digit 
	//characters i.e all the characters except digits
	// test() method tests for a match in a string. It returns true or false.

if(emailRegex.test(email))
	console.log("Valid Email");
else
	console.log("Invalid Email");


function validatePIN(pin) {
	// analyze a pin to make sure it only contained numbers and was either 4 or 6 characters
	//\D Metacharacter in JavaScript is used to search non digit 
	//characters i.e all the characters except digits
	// test() method tests for a match in a string.
	if (/^(\d{4}|\d{6})$/.test(pin)) {
	  return true;
	} else {
	  return false;
	}
  }
  
  console.log(validatePIN("400088"));
  console.log(validatePIN("A400088"));
  console.log(validatePIN("400088B"));


  ///...................FirstName...................///

function validateFirstName(firstName) {
	// analyze a pin to make sure it only contained numbers and was either 4 or 6 characters
	//\D Metacharacter in JavaScript is used to search non digit 
	//characters i.e all the characters except digits
	// test() method tests for a match in a string.
	if (/^[a-zA-Z ]{2,30}$/.test(firstName)) {
	  return true;
	} else {
	  return false;
	}
  }
  
  console.log(validateFirstName("shreya"));
  console.log(validateFirstName("SHREYA"));
  console.log(validateFirstName("Shnhreta12563"));


///...................MobileNo...................///

function validateMobileNo(mobileNo) {
	// analyze a pin to make sure it only contained numbers and was either 4 or 6 characters
	//\D Metacharacter in JavaScript is used to search non digit 
	//characters i.e all the characters except digits
	// test() method tests for a match in a string.
	if (/^\d{10}$/.test(mobileNo)) {
	  return true;
	} else {
	  return false;
	}
  }
  
  console.log(validateMobileNo("8793761898"));
  console.log(validateMobileNo("912568745200"));
  console.log(validateMobileNo("+918579654780"));