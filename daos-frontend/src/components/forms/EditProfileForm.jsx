import ButtonTag from "../atoms/ButtonTag";
import PTag from "../atoms/PTag";
import LabelTag from "../atoms/LabelTag";
import InputTagText from "../atoms/InputTagText";
import styles from "./EditProfileForm.module.css";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import NameInputs from "../others/NameInputs";
import TerritoryInputs from "../others/TerritoryInputs";
import TextareaTag from "../atoms/TextareaTag";
import DisabledButton from "../others/DisabledButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfileFormValidation from "./EditProfileFormValidation";

export default function EditProfileForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const profileId = localStorage.getItem("profileId");

    function firstNameProp(e) {
        setFirstName(e.target.value);
    }

    function lastNameProp(e) {
        setLastName(e.target.value);
    }

    function descriptionProp(e) {
        setDescription(e.target.value);
    }

    function zipCodeProp(e) {
        setZipCode(e.target.value);
    }

    function cityProp(e) {
        setCity(e.target.value);
    }

    function emailProp(e) {
        setEmail(e.target.value);
    }

    function phoneProp(e) {
        setPhone(e.target.value);
    }

    function statusProp(e) {
        setStatus(e.target.checked);
    }

    function editProfile(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = { 
            firstName,
            lastName,
            description,
            zipCode,
            city, 
            email,
            phone,
            status,
        }

        const validationArray = EditProfileFormValidation(profile);

        if(validationArray.length == 0) {
            fetch("http://127.0.0.1:3000/profiles/" + profileId, {
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
                    if(res.statusCode == 500 || res.statusCode == 400) {
                        validationArray.push("This e-mail is already in use")
                        setIsLoading(false);
                        console.log(validationArray)
                    } else {
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
            console.log(validationArray);
        }
    }

    return (
        <form className={styles.editProfileFormDefault} onSubmit={editProfile}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Name" />
            <NameInputs firstName={firstName} firstNameProp={firstNameProp} lastName={lastName} lastNameProp={lastNameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textAreaText="Here you can write briefly about your musical experience or what you are looking for..." textAreaFunction={descriptionProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Territory" />
            <TerritoryInputs zipCode={zipCode} zipCodeProp={zipCodeProp} city={city} cityProp={cityProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Contact Info" />
            <PTag pType="small" pColor="grey" pText="Your email address and mobile number are only visible to others if you have marked on your profile that you are looking for someone to play with or if you have an active posting." />
            <InputTagText inputText="E-mail" value={email} inputTextFunction={emailProp} />
            <InputTagText inputText="Phone" value={phone} inputTextFunction={phoneProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Profile stauts" />
            <PTag pType="small" pColor="grey" pText="Are you currently looking for someone to play with? If you check the checkbox below, your profile will not appear when other musicians do a search." />
            <div>
                <InputTagCheckbox value={status} inputCheckboxFunction={statusProp} />
                <PTag pType="small" pColor="grey" pText="I'm looking for some to play with" />
            </div>
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes" />}
        </form>
    );
}