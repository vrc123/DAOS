import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import ProfileSettingsComponent from "../components/page-components/profile-settings/ProfileSettingsComponent";
import styles from "./ProfileSettings.module.css";

export default function ProfileSettings() {
    return (
        <div className={styles.profileSettingsDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Settings" />
                <ProfileSettingsComponent />         
            </div>
        </div>
    );
}