import LabelTag from "../atoms/LabelTag";
import styles from "./ProfileChangeNewsletterSettingsForm.module.css";
import ButtonTag from "../atoms/ButtonTag";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import PTag from "../atoms/PTag";

export default function ProfileChangeNewsletterSettingsForm() {
    return (
        <form className={styles.profileChangeNewsletterSettingsFormDefault}>
            <div>
                <InputTagCheckbox />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
        </form>
    );
}