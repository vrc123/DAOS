export default function Validation(profile) {
  let errorValidationArray = [];

  if (!profile.email != "") {
    errorValidationArray.push("Email is required!");
  }

  if (!profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
    errorValidationArray.push("Email must be a valid Email!");
  }

  if (!profile.password.length >= 8) {
    errorValidationArray.push("Password must at least be 8 chars long!");
  }

  // if length er 0, så´er der ingen fejl
  return errorValidationArray;
}
