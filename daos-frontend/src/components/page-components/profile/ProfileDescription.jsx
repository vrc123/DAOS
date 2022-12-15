import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";
import styles from "./ProfileDescription.module.css";

export default function ProfileDescription({profile}) {

    return ( 
        <div className={styles.profileDescriptionDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
                <Link to="/profile/edit">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
            </div>
            <PTag pType="normal" pColor="grey" pText={profile.description} />
        </div>
    );
}