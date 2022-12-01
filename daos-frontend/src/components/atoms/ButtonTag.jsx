import styles from "./ButtonTag.module.css";

export default function ButtonTag({buttonFunction, buttonType, buttonColor, buttonPosition, buttonText}) {
    return (
        <button onClick={buttonFunction} className={`${styles.buttonDefaultTag} ${styles[buttonType]} ${styles[buttonColor]} ${styles[buttonPosition]}`}>
            {buttonText}
        </button>
    );
}