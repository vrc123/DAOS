import styles from "./ProfileChangePasswordForm.module.css";
import ButtonTag from "../atoms/ButtonTag";
import HideAndShowPassword from "../others/HideAndShowPassword";
import DisabledButton from "../others/DisabledButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileChangePasswordFormValidation from "./ProfileChangePasswordFormValidation";
import Validation from "../others/Validation";

export default function ProfileChangePasswordForm() {

    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState(false);
    const [validations, setValidations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const profileId = localStorage.getItem("profileId");

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function changePassword(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            password,
        }

        const validationArray = ProfileChangePasswordFormValidation(profile);

        if(validationArray.length == 0) {

            setValidation(false);

            fetch("http://127.0.0.1:3000/profiles/" + profileId + "/password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            })
            .then((res) => {
                if (!res.status === 200) {
                    throw new Error("Could not fetch the data!")
                }
                return res.json();
            })
            .then((res) => {
                if(res.firstName != "") {
                    setIsLoading(false);
                    navigate("/profile");
                }
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
            setValidation(true);
            setValidations(validationArray);
        }
    }

    return (
        <form className={styles.profileChangePasswordFormDefault} onSubmit={changePassword}>
            <HideAndShowPassword password={password} passwordProp={passwordProp} inputPlaceholder="New password" />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes" />}
            {validation && <Validation validations={validations} />}
        </form>
    );
}