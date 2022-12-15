import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditEnsembleForm from "../components/forms/EditEnsembleForm";
import styles from "./EditEnsemble.module.css";

export default function EditEnsemble() {
    return (
        <div className={styles.editEnsembleDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Edit ensemble" />
                <EditEnsembleForm />
            </div>
        </div>
    );
}