import HTag from "../atoms/HTag";
import styles from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loadingDefault}>
            <HTag hType="h2" hColor="red" hText="Loading"/>
            <div></div>
        </div>
    );
}