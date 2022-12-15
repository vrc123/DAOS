export default function EnsembleFormValidation(ensemble) {
    let errorValidationArray = [];
  
    if (ensemble.name == "") {
      errorValidationArray.push("Name is required!");
    }
  
    if (!ensemble.name.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
      errorValidationArray.push(
        "Name must begin with a capitalized letter or a number!"
      );
    }

    if (!ensemble.description == "") {
      if (!ensemble.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
        errorValidationArray.push(
          "Description must begin with a capitalized letter or a number!"
        );
      }
    }

    if (!ensemble.website == "") {
      if (
        !ensemble.website.match(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)/g
        )
      ) {
        errorValidationArray.push("Website must be a url");
      }
    }
  
    if (!ensemble.zipCode.match(/[0-9]{4,4}/g)) {
      errorValidationArray.push("Zipcode must be 4 numbers");
    }
  
    if (ensemble.city == "") {
      errorValidationArray.push("City is required!");
    }
  
    if (!ensemble.city.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
      errorValidationArray.push("City must be letters only!");
    }
  
    if (!ensemble.city.match(/^[A-ZÆØÅ]/g)) {
      errorValidationArray.push("City must be capitalized!");
    }

    if (ensemble.activeMusicians == "") {
      errorValidationArray.push("Number of active musicians is required!");
    }

    return errorValidationArray;
}