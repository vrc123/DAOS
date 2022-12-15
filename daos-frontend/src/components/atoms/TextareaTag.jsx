import styles from "./TextareaTag.module.css";

export default function TextareaTag({textAreaFunction, textAreaText}) {
    return (
        <textarea className={styles.textAreaDefaultTag} placeholder={textAreaText} onChange={textAreaFunction} ></textarea>
    );
}