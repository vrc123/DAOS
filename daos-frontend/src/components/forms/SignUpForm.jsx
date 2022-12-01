import ButtonTag from "../atoms/ButtonTag";
import PTag from "../atoms/PTag";
import InputTagText from "../atoms/InputTagText";
import styles from "./SignUpForm.module.css";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import { Link } from "react-router-dom";

export default function SignUpForm() {
    return (
        <form className={styles.signUpFormDefault}>
            <InputTagText inputText="First name" />
            <InputTagText inputText="Last name" />
            <InputTagText inputText="E-mail" />
            <InputTagText inputText="Password" />
            <div>
                <InputTagCheckbox />
                <p className={styles.pCustom}>I accept the <Link to="#">conditions</Link></p>
            </div>
            <div>
                <InputTagCheckbox />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Sign up" />
        </form>
    );
}