import InputTagText from "../atoms/InputTagText";
import styles from "./ChangePasswordForm.module.css";
import ButtonTag from "../atoms/ButtonTag";

export default function ChangePasswordForm() {
    return (
        <form className={styles.changePasswordFormDefault}>
            <InputTagText inputText="New password" />
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
        </form>
    );
}