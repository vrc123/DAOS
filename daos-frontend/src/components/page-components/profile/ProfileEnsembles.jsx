import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./ProfileEnsembles.module.css";
import ProfileEnsemblesList from "./ProfileEnsemblesList";

export default function ProfileEnsembles({ensembles}) {

    return ( 
        <div className={styles.profileEnsemblesDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Ensembles" />
                <Link to="/profile/ensembles/create">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Create" />
                </Link>
            </div>
            <ProfileEnsemblesList ensembles={ensembles} />
        </div>
    );
}