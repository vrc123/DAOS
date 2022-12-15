import InputTagText from "../atoms/InputTagText";
import styles from "./TerritoryInputs.module.css";

export default function TerritoryInputs({zipCode, zipCodeProp, city, cityProp}) {

    return (
        <div className={styles.territoryInputsDefault}>
            <InputTagText inputWidth="thin" inputPosition="right" inputText="Zip code" value={zipCode} inputTextFunction={zipCodeProp} />
            <InputTagText inputWidth="wide" inputPosition="left" inputText="City" value={city} inputTextFunction={cityProp} />
        </div>
    );
}