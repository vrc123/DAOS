import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./ProfileInfo.module.css";

export default function ProfileInfo({profile}) {

    if (profile.status === true) {
        profile.status = "Looking";
    } else if (profile.status === false) {
        profile.status = "Not looking";
    }

    return ( 
        <div className={styles.profileInfoDefault}>
            <div>
                <HTag hType="h1" hColor="red" hText={`${profile.firstName} ${profile.lastName}`} />
                <LabelTag labelType="normal" labelColor="blue" labelStatus="status" labelText={profile.status} />
            </div>
            <div>
                <Link to="/profile/edit">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Edit profile" />
                </Link>
                <Link to="/profile/settings">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Settings" />
                </Link>
            </div>
        </div>
    );
}