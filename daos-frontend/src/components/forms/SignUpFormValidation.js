export default function SignUpFormValidation(profile) {
    let errorValidationArray = [];
  
    if (!profile.firstName != "") {
      errorValidationArray.push("First name is required!");
    }
  
    if (!profile.firstName.match(/[A-ZÆØÅ]|[a-zÆØÅ]\w+/g)) {
      errorValidationArray.push("First name must be letters only!");
    }
  
    if (!profile.firstName.match(/^[A-ZÆØÅ]/g)) {
      errorValidationArray.push("First name must be capitalized!");
    }
  
    if (!profile.lastName != "") {
      errorValidationArray.push("Last name is required!");
    }
  
    if (!profile.lastName.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
      errorValidationArray.push("Last name must be letters only!");
    }
  
    if (!profile.lastName.match(/^[A-ZÆØÅ]/g)) {
      errorValidationArray.push("Last name must be capitalized!");
    }
  
    if (!profile.email != "") {
      errorValidationArray.push("Email is required!");
    }
  
    if (!profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
      errorValidationArray.push("Email must be a valid Email!");
    }
  
    if (!profile.password.length >= 8) {
      errorValidationArray.push("Password must at least be 8 chars long!");
    }

    if (!profile.conditions == true) {
        errorValidationArray.push("You must accept the conditions!");
    }
    
    return errorValidationArray;
}