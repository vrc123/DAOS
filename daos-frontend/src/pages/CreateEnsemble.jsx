import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import CreateEnsembleForm from "../components/forms/CreateEnsembleForm";
import styles from "./CreateEnsemble.module.css";

export default function CreateEnsemble() {
    return (
        <div className={styles.createEnsembleDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Create ensemble" />
                <CreateEnsembleForm />
            </div>
        </div>
    );
}