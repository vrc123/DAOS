import { useState } from "react";
import styles from "./HideAndShowPassword.module.css";

export default function HideAndShowPassword({password, passwordProp, inputPlaceholder}) {

    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");
    const [buttonText, setButtonText] = useState("Show");

    function HideAndShowPassword() {
        if(showPassword == false) {
            setInputType("text");
            setShowPassword(true);
            setButtonText("Hide");
        } else {
            setInputType("password");
            setShowPassword(false);
            setButtonText("Show");
        }
    }

    return (
        <div className={styles.hideAndShowPasswordDefault}>
            <input type={inputType} placeholder={inputPlaceholder} value={password} onChange={passwordProp} />
            <div onClick={HideAndShowPassword}>
                {buttonText}
            </div>
        </div>
    );
}