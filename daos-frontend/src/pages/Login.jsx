import { Link } from "react-router-dom";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";
import LoginForm from "../components/forms/LoginForm";
import styles from "./Login.module.css";

export default function Login({setLoggedIn}) {
    return (
        <div className={styles.loginDefault}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Login" />
                <LoginForm setLoggedIn={setLoggedIn} />
                <Link to="#">
                    <PTag pType="small" pColor="grey" pText="Forgot password?" />
                </Link>
            </div>
        </div>
    );
}