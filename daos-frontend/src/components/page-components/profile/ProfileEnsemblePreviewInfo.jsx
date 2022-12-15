import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./ProfileEnsemblePreviewInfo.module.css";

export default function ProfileEnsemblePreviewInfo({ensemble}) {
    return (
        <div className={styles.profileEnsemblePreviewInfoDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name}/>
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
        </div>
    );
}