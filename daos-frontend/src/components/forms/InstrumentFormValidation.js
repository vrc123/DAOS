export default function InstrumentFormValidation(instrument) {
    let errorValidationArray = [];
  
    if (!instrument.instrumentName != "") {
        errorValidationArray.push("Instrument is required");
    }
  
    if (!instrument.skillLevel != "") {
        errorValidationArray.push("Minimum Skill Level is required");
    }

    return errorValidationArray;
}