import styles from "./InputTagText.module.css";

export default function InputTagText({inputWidth, inputPosition, inputTextFunction, inputText}) {

    return (
        <input className={`${styles.inputDefaultTagText} ${styles[inputWidth]} ${styles[inputPosition]}`} type="text" placeholder={inputText} onChange={inputTextFunction} />
    );
}