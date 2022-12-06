import InputTagText from "../atoms/InputTagText";
import styles from "./TerritoryInputs.module.css";

export default function TerritoryInputs() {
    return (
        <div className={styles.territoryInputsDefault}>
            <InputTagText inputWidth="thin" inputPosition="right" inputText="Zip code" />
            <InputTagText inputWidth="wide" inputPosition="left" inputText="City" />
        </div>
    );
}