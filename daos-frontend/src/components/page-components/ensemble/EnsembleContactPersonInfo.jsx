import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./EnsembleContactPersonInfo.module.css";

export default function EnsembleContactPersonInfo({admin}) {

    return ( 
        <div className={styles.ensembleContactPersonInfoDefault}>
            <div>
                <HTag hType="h3" hColor="red" hText={`${admin.firstName} ${admin.lastName}`} />
                <LabelTag labelType="small" labelColor="grey" labelText={admin.city} />
            </div>
            <Link to={`/musicians/${admin._id}`}>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Show more" />
            </Link>
        </div>
    );
}