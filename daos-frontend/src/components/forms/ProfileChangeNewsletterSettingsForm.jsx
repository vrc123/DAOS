import styles from "./ProfileChangeNewsletterSettingsForm.module.css";
import ButtonTag from "../atoms/ButtonTag";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import PTag from "../atoms/PTag";
import DisabledButton from "../others/DisabledButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileChangeNewsletterSettingsForm() {

    const [newsletter, setNewsletter] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const profileId = localStorage.getItem("profileId");

    function newsletterProp(e) {
        setNewsletter(e.target.checked);
    }

    function changeNewsletterSettings(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            newsletter,
        }

        fetch("http://127.0.0.1:3000/profiles/" + profileId + "/newsletter", {
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
                }).then((res) => {
                    if(res.firstName != "") {
                        setIsLoading(false);
                        navigate("/profile");
                    }
                })
                .catch((error) => {
                    setError(error.message);
                    setIsLoading(false);
                });
    }

    return (
        <form className={styles.profileChangeNewsletterSettingsFormDefault} onSubmit={changeNewsletterSettings}>
            <div>
                <InputTagCheckbox inputCheckboxFunction={newsletterProp} />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes" />}
        </form>
    );
}