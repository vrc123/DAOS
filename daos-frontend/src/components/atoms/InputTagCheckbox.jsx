import styles from "./InputTagCheckbox.module.css";

export default function InputTagCheckbox({inputCheckboxFunction}) {
    return (
        <input className={styles.inputDefaultTagCheckbox} type="checkbox" onChange={inputCheckboxFunction} />
    );
}