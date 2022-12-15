import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditInstrumentForm from "../components/forms/EditInstrumentForm";
import styles from "./EditInstrument.module.css";

export default function EditInstrument() {
    return (
        <div className={styles.editInstrumentDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Edit instrument" />
                <EditInstrumentForm />
            </div>
        </div>
    );
}