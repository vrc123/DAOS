import styles from "./LabelTag.module.css";

export default function LabelTag({labelType, labelColor, labelText}) {
    return (
        <label className={`${styles.labelDefaultTag} ${styles[labelType]} ${styles[labelColor]}`}>
            {labelText}
        </label>
    );
}