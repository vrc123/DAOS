import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditEnsemblePostForm from "../components/forms/EditEnsemblePostForm";
import styles from "./EditEnsemblePost.module.css";

export default function EditEnsemblePost() {
    return (
        <div className={styles.editEnsemblePostDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Edit post" />
                <EditEnsemblePostForm />
            </div>
        </div>
    );
}