import styles from "./SelectTag.module.css";

export default function SelectTag({selectOptions, selectPlaceholder, selectFunction}) {

    return(
        <select className={styles.selectDefaultTag} onChange={selectFunction}>
            <option value="">{selectPlaceholder}</option>
            {selectOptions.map((option, index) =>
                <option key={index} value={option}>{option}</option>
            )}
        </select>
    );
}