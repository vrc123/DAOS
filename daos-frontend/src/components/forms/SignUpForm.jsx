import ButtonTag from "../atoms/ButtonTag";
import PTag from "../atoms/PTag";
import InputTagText from "../atoms/InputTagText";
import styles from "./SignUpForm.module.css";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import { Link, useNavigate } from "react-router-dom";
import NameInputs from "../others/NameInputs";
import { useState } from "react";

export default function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conditions, setConditions] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    function firstNameProp(e) {
        setFirstName(e.target.value);
    }

    function lastNameProp(e) {
        setLastName(e.target.value);
    }

    function emailProp(e) {
        setEmail(e.target.value);
    }

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function conditionsProp(e) {
        setConditions(e.target.checked);
    }

    function newsletterProp(e) {
        setNewsletter(e.target.checked);
    }

    function signUp(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = { 
            firstName,
            lastName, 
            email, 
            password, 
            conditions, 
            newsletter
        }

        fetch("http://127.0.0.1:3000/profiles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        }).then(() => {
            setIsLoading(false);
            navigate("/")
        })
    }

    return (
        <form className={styles.signUpFormDefault} onSubmit={signUp}>
            <NameInputs firstName={firstName} firstNameProp={firstNameProp} lastName={lastName} lastNameProp={lastNameProp} />
            <InputTagText inputText="E-mail" value={email} inputTextFunction={emailProp} />
            <InputTagText inputText="Password" value={password} inputTextFunction={passwordProp} />
            <div>
                <InputTagCheckbox value={conditions} inputCheckboxFunction={conditionsProp} />
                <p className={styles.pCustom}>I accept the <Link to="#">conditions</Link></p>
            </div>
            <div>
                <InputTagCheckbox value={newsletter} inputCheckboxFunction={newsletterProp} />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            {!isLoading &&<ButtonTag buttonType="normal" buttonColor="blue" buttonText="Sign up" />}
            {isLoading &&<ButtonTag buttonType="normal" buttonColor="blue" buttonText="Signing up..." />}
        </form>
    );
}