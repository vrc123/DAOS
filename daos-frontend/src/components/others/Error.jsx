import HTag from "../atoms/HTag";
import styles from "./Error.module.css";

export default function Error({error}) {
    return (
        <div className={styles.errorDefault}>
            <HTag hType="h2" hColor="red" hText={error}/>
        </div>
    );
}