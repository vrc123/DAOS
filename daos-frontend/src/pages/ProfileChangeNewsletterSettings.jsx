import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import ProfileChangeNewsletterSettingsForm from "../components/forms/ProfileChangeNewsletterSettingsForm";
import styles from "./ProfileChangeNewsletterSettings.module.css";

export default function ProfileChangeNewsletterSettings() {
    return (
        <div className={styles.profileChangeNewsletterSettingsDefault}>
            <div>
                <Link to="/profile/settings">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Newsletter settings" />
                <ProfileChangeNewsletterSettingsForm />
            </div>
        </div>
    );
}