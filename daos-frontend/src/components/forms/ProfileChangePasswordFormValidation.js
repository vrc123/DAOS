export default function ProfileChangePasswordFormValidation(profile) {
    let errorValidationArray = [];
  
    if (!profile.password.length >= 8) {
      errorValidationArray.push("Password must at least be 8 chars long!");
    }

    return errorValidationArray;
}