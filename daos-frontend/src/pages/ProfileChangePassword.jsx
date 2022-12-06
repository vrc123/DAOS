import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import ChangePasswordForm from "../components/forms/ChangePasswordForm";
import styles from "./ProfileChangePassword.module.css";

export default function ProfileChangePassword() {
    return (
        <div className={styles.profileChangePasswordDefault}>
            <div>
                <Link to="/profile/settings">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Change password" />
                <ChangePasswordForm />
            </div>
        </div>
    );
}