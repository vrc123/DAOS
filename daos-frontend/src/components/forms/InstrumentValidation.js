export default function Validation(profile) {
  let errorValidationArray = [];

  profile.instruments.forEach((instrument) => {
    if (!instrument.instrumentName != "") {
      errorValidationArray.push("Instrument is required");
    }

    if (!instrument.skillLevel != "") {
      errorValidationArray.push("Minimum Skill Level is required");
    }
  });

  // if length er 0, så´er der ingen fejl
  return errorValidationArray;
}
