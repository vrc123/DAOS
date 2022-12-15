import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import AddEnsemblePostForm from "../components/forms/AddEnsemblePostForm";
import styles from "./AddEnsemblePost.module.css";

export default function AddEnsemblePost() {
    return (
        <div className={styles.addEnsemblePostDefault}>
            <div>
                <Link to="/profile">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Add post" />
                <AddEnsemblePostForm />
            </div>
        </div>
    );
}