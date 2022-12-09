export default function Validation(profile) {
  let errorValidationArray = [];

  if (!profile.password.length >= 8) {
    errorValidationArray.push("Password must at least be 8 chars long!");
  }

  // if length er 0, så´er der ingen fejl
  return errorValidationArray;
}
