import styles from "./InputTagText.module.css";

export default function InputTagText({inputTextFunction, inputText}) {
    return (
        <input className={styles.inputDefaultTagText} type="text"  placeholder={inputText} onChange={inputTextFunction} />
    );
}