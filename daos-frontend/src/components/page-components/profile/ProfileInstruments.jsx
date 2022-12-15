import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";
import ProfileInstrumentList from "./ProfileInstrumentList";
import styles from "./ProfileInstruments.module.css";

export default function ProfileInstruments({profile}) {
    return (
        <div className={styles.profileInstrumentsDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Instruments" />
                <Link to="/profile/instruments/add">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Add" />
                </Link>
            </div>
            <ProfileInstrumentList profile={profile} />
        </div>
    );
}