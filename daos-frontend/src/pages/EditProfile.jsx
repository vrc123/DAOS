import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditProfileForm from "../components/forms/EditProfileForm";
import styles from "./EditProfile.module.css";

export default function EditProfile() {
    return (
        <div className={styles.editProfileDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Edit profile" />
                <EditProfileForm />
            </div>
        </div>
    );
}