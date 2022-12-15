import ButtonTag from "../atoms/ButtonTag";
import PTag from "../atoms/PTag";
import InputTagText from "../atoms/InputTagText";
import styles from "./SignUpForm.module.css";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import { Link, useNavigate } from "react-router-dom";
import NameInputs from "../others/NameInputs";
import { useState } from "react";
import DisabledButton from "../others/DisabledButton";
import HideAndShowPassword from "../others/HideAndShowPassword";
import SignUpFormValidation from "./SignUpFormValidation";

export default function SignUpForm({setLoggedIn}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conditions, setConditions] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [status, setStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
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
            newsletter,
            status,
        }

        const validationArray = SignUpFormValidation(profile);

        if(validationArray.length == 0) {
            fetch("http://127.0.0.1:3000/profiles/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
            })
            .then((res) => {
                if (!res.status === 201) {
                    throw new Error("Could not fetch the data!")
                }
                return res.json();
            })
            .then((res) => {
                if(res.statusCode == 500 || res.statusCode == 400) {
                    validationArray.push("This e-mail is already in use")
                    setIsLoading(false);
                    console.log(validationArray)
                } else {
                    localStorage.setItem("token", (res.access_token));
                    localStorage.setItem("profileId", (res.profileId));
                    setIsLoading(false);
                    setLoggedIn(true);
                    navigate("/welcome");
                }
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
            console.log(validationArray);
        }
    }

    return (
        <form className={styles.signUpFormDefault} onSubmit={signUp}>
            <NameInputs firstName={firstName} firstNameProp={firstNameProp} lastName={lastName} lastNameProp={lastNameProp} />
            <InputTagText inputText="E-mail" value={email} inputTextFunction={emailProp} />
            <HideAndShowPassword password={password} passwordProp={passwordProp} inputPlaceholder="Password" />
            <div>
                <InputTagCheckbox value={conditions} inputCheckboxFunction={conditionsProp} />
                <p className={styles.pCustom}>I accept the <Link to="#">conditions</Link></p>
            </div>
            <div>
                <InputTagCheckbox value={newsletter} inputCheckboxFunction={newsletterProp} />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Sign up" />}
            {isLoading && <DisabledButton isLoading={isLoading} disabledButtonText="Signing up"/>}
        </form>
    );
}