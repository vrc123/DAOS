import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import AddInstrumentForm from "../components/forms/AddInstrumentForm";
import styles from "./AddInstrument.module.css";

export default function AddInstrument() {
    return (
        <div className={styles.addInstrumentDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Add instrument" />
                <AddInstrumentForm />
            </div>
        </div>
    );
}