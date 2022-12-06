import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./ProfileSettingsComponent.module.css";

export default function ProfileSettingsComponent() {
    return (
        <div className={styles.profileSettingsComponentDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Password" />
                <Link to="/profile/change-password">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Change password" />
                </Link>
            </div>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Newsletters" />
                <Link to="/profile/change-newsletter-settings">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Newsletter settings" />
                </Link>
            </div>
            <ButtonTag buttonType="normal" buttonColor="red" buttonText="Delete profile" />
        </div>
    );
}