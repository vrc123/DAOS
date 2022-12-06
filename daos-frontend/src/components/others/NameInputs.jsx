import InputTagText from "../atoms/InputTagText";
import styles from "./NameInputs.module.css";

export default function NameInputs({firstName, firstNameProp, lastName, lastNameProp}) {
    return (
        <div className={styles.nameInputsDefault}>
            <InputTagText inputPosition="right" inputText="First name" value={firstName} inputTextFunction={firstNameProp} />
            <InputTagText inputPosition="left" inputText="Last name" value={lastName} inputTextFunction={lastNameProp} />
        </div>
    );
}