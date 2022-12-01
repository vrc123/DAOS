import HTag from "../components/atoms/HTag";
import SignUpForm from "../components/forms/SignUpForm";
import styles from "./SignUp.module.css";

export default function SignUp() {
    return (
        <div className={styles.signUpDefault}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Sign up" />
                <SignUpForm />
            </div>
        </div>
    );
}