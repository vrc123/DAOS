import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";
import InputTagText from "../atoms/InputTagText";
import DisabledButton from "../others/DisabledButton";
import HideAndShowPassword from "../others/HideAndShowPassword";
import styles from "./LoginForm.module.css";

export default function LoginForm({setLoggedIn}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function emailProp(e) {
        setEmail(e.target.value);
    }

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function login(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            email, 
            password,
        }

        fetch("http://127.0.0.1:3000/profiles/auth/login", {
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
            }).then((res) => {
                localStorage.setItem("token", (res.access_token));
                localStorage.setItem("profileId", (res.profileId));
                setIsLoading(false);
                if (localStorage.getItem("token") != "undefined") {
                    setLoggedIn(true);
                    navigate("/welcome");
                } else {
                    console.log("Profile does not exist!")
                }
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }

    return (
        <form className={styles.loginFormDefault} onSubmit={login}>
            <InputTagText inputText="E-mail" value={email} inputTextFunction={emailProp} />
            <HideAndShowPassword inputPlaceholder="Password" password={password} passwordProp={passwordProp} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Login" />}
            {isLoading && <DisabledButton disabledButtonText="Logging in" />}
        </form>
    );
}