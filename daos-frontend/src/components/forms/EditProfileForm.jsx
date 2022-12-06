import ButtonTag from "../atoms/ButtonTag";
import PTag from "../atoms/PTag";
import LabelTag from "../atoms/LabelTag";
import InputTagText from "../atoms/InputTagText";
import styles from "./EditProfileForm.module.css";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import NameInputs from "../others/NameInputs";
import TerritoryInputs from "../others/TerritoryInputs";

export default function EditProfileForm() {
    return (
        <form className={styles.editProfileFormDefault}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Name" />
            <NameInputs />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <InputTagText inputText="Textarea" />
            <LabelTag labelType="normal" labelColor="blue" labelText="Territory" />
            <TerritoryInputs />
            <LabelTag labelType="normal" labelColor="blue" labelText="Contact Info" />
            <PTag pType="small" pColor="grey" pText="Your email address and mobile number are only visible to others if you have marked on your profile that you are looking for someone to play with or if you have an active posting." />
            <InputTagText inputText="E-mail" />
            <InputTagText inputText="Phone" />
            <LabelTag labelType="normal" labelColor="blue" labelText="Profile stauts" />
            <PTag pType="small" pColor="grey" pText="Are you currently looking for someone to play with? If you check the checkbox below, your profile will not appear when other musicians do a search." />
            <div>
                <InputTagCheckbox />
                <PTag pType="small" pColor="grey" pText="I'm looking for some to play with" />
            </div>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />
        </form>
    );
}