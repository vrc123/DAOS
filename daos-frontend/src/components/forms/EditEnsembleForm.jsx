import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import InputTagText from "../atoms/InputTagText";
import LabelTag from "../atoms/LabelTag";
import PTag from "../atoms/PTag";
import SelectTag from "../atoms/SelectTag";
import TextareaTag from "../atoms/TextareaTag";
import Chips from "../others/Chips";
import DisabledButton from "../others/DisabledButton";
import TerritoryInputs from "../others/TerritoryInputs";
import Validation from "../others/Validation";
import styles from "./EditEnsembleForm.module.css";
import EnsembleFormValidation from "./EnsembleFormValidation";

export default function EditEnsembleForm() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [continuously, setContinuously] = useState(false);
    const [projectBased, setProjectBased] = useState(false);
    const [activeMusicians, setActiveMusicians] = useState(["1 - 4 musicians", "5 - 9 musicians", "10 - 24 musicians", "25 - 49 musicians", "More than 50 musicians"]);
    const [selectedActiveMusicians, setSelectedActiveMusicians] = useState("");
    const [frequency, setFrequency] = useState(["Several times a week", "1 time per week", "1 time every two weeks", "1 time per month", "1 time per month", "1 time every two months or"]);
    const [practiceFrequency, setPracticeFrequency] = useState("");
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [validation, setValidation] = useState(false);
    const [validations, setValidations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();

    function nameProp(e) {
        setName(e.target.value);
    }

    function descriptionProp(e) {
        setDescription(e.target.value);
    }

    function websiteProp(e) {
        setWebsite(e.target.value);
    }

    function zipCodeProp(e) {
        setZipCode(e.target.value);
    }

    function cityProp(e) {
        setCity(e.target.value);
    }

    function activeMusiciansProp(e) {
        setSelectedActiveMusicians(e.target.value);
    }

    function practiceFrequencyProp(e) {
        setPracticeFrequency(e.target.value);
    }

    function continuouslyProp(e) {
        setContinuously(e.target.checked);
    }

    function projectBasedProp(e) {
        setProjectBased(e.target.checked);
    }

    function selectGenre(e) {
        let selectedGenre = e.target.value;

        if(!selectedGenre == "") {
            if (selectedGenres.indexOf(selectedGenre) == -1) {
                setSelectedGenres((selectedGenres) => [...selectedGenres, selectedGenre]);
            }
        }
    }

    function editEnsemble(e) {
        e.preventDefault();

        setIsLoading(true);

        const ensemble = { 
            name,
            description,
            website,
            zipCode,
            city,
            activeMusicians: selectedActiveMusicians,
            practiceFrequency: practiceFrequency,
            continuously,
            projectBased,
            genre: selectedGenres,
        }

        const validationArray = EnsembleFormValidation(ensemble);

        if(validationArray.length == 0) {

            setValidation(false);

            fetch("http://127.0.0.1:3000/ensembles/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ensemble)
                })
                .then((res) => {
                    if (!res.status === 200) {
                        throw new Error("Could not fetch the data!")
                    }
                    return res.json();
                }).then((res) => {
                    if(res.name != "") {
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
        <form className={styles.editEnsembleFormDefault} onSubmit={editEnsemble} >
            <InputTagText inputText="Ensemble name" value={name} inputTextFunction={nameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textAreaText="Write a short description of your ensemble or orchestra..." value={description} textAreaFunction={descriptionProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Website" />
            <InputTagText inputText="Insert link" value={website} inputTextFunction={websiteProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Territory" />
            <TerritoryInputs zipCode={zipCode} zipCodeProp={zipCodeProp} city={city} cityProp={cityProp}/>
            <LabelTag labelType="normal" labelColor="blue" labelText="Number of active musicians" />
            <SelectTag selectPlaceholder="Select number" selectOptions={activeMusicians} value={selectedActiveMusicians} selectFunction={activeMusiciansProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Practice frequency" />
            <SelectTag selectPlaceholder="Select frequency" selectOptions={frequency} value={practiceFrequency} selectFunction={practiceFrequencyProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="The ensemble plays…" />
            <div>
                <InputTagCheckbox value={continuously} inputCheckboxFunction={continuouslyProp} />
                <PTag pType="small" pColor="grey" pText="Continuously" />
            </div>
            <div>
                <InputTagCheckbox value={projectBased} inputCheckboxFunction={projectBasedProp} />
                <PTag pType="small" pColor="grey" pText="Project-based" />
            </div>
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes" />}
            {validation && <Validation validations={validations} />}
        </form>
    );
}