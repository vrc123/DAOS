export default function EditProfileFormValidation(profile) {
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

    if (!profile.description == "") {
        if (!profile.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
            errorValidationArray.push(
              "Description must begin with a capitalized letter or a number!"
            );
        }
    }
  
    if (!profile.zipCode == "") {
        if (!profile.zipCode.match(/[0-9]{4,4}/g)) {
            errorValidationArray.push("Zipcode must be 4 numbers!");
        }
    }
  
    if (!profile.city == "") {
        if (!profile.city.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
            errorValidationArray.push("City must be letters only!");
        }

        if (!profile.city.match(/^[A-Za-zæøåÆØÅ.\s_-]+$/g)) {
            errorValidationArray.push("City must be capitalized!");
        }
    }
  
    if (!profile.email != "") {
      errorValidationArray.push("Email is required!");
    }
  
    if (!profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
      errorValidationArray.push("Email must be a valid Email!");
    }

    if (!profile.phone.length == "") {
        if (!profile.phone.length == 8) {
            errorValidationArray.push("phone number must at least be 8 numbers long!");
        }
    }
  
    return errorValidationArray;
}