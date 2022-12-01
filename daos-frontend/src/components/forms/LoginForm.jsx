import ButtonTag from "../atoms/ButtonTag";
import InputTagText from "../atoms/InputTagText";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    return (
        <form className={styles.loginFormDefault}>
            <InputTagText inputText="E-mail" />
            <InputTagText inputText="Password" />
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Login" />
        </form>
    );
}