import { useEffect, useState } from "react";
import styles from "./DisabledButton.module.css";

export default function DisabledButton({isLoading, disabledButtonText}) {

    const [dots, setDots] = useState("");

    function loadingDots () {
        if(dots == "") {
            setDots(".") 
        } else if (dots == ".") {
            setDots("..");
        } else if (dots == "..") {
            setDots("...");
        }else {
            setDots("");
        }
    }

    useEffect(() => {
        let interval;
        if (!isLoading) {
            clearInterval(interval);
        } else {
            interval = setInterval(() => loadingDots(), 2000);
        }
    }, [dots]);

    return (
        <button disabled className={styles.disabledButtonDefault}>
            {`${disabledButtonText}${dots}`}
        </button>
    );
}