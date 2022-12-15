import styles from "./Validation.module.css";

export default function Validation({validations}) {

    return (
        <div className={styles.validationDefault}>
            {validations.map((val, index) => {
                return (
                    <h1 key={index}>{val}</h1>
                );
            })}
        </div>
    );
}