import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";
import LabelTag from "../atoms/LabelTag";
import SelectTag from "../atoms/SelectTag";
import Chips from "../others/Chips";
import DisabledButton from "../others/DisabledButton";
import Validation from "../others/Validation";
import styles from "./AddInstrumentForm.module.css";
import InstrumentFormValidation from "./InstrumentFormValidation";

export default function AddInstrumentForm() {

    const [instruments, setInstruments] = useState(["Violone", "Violin", "Viola", "Viol", "Vihuela", "Trumpet", "Theorbo", "Slide trumpet", "Serpent", "Sackbut", "Natural trumpet", "Natural horn"]);
    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [skillLevel, setSkillLevel] = useState(["1 - Beginner", "2 - Intermediate", "3 - Advanced", "4 - Expert"]);
    const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [validation, setValidation] = useState(false);
    const [validations, setValidations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const profileId = localStorage.getItem("profileId");

    function instrumentNameProp(e) {
        setSelectedInstrument(e.target.value);
    }

    function selectSkillLevel(e) {
        let selectedLevel = e.target.value;

        if (selectedLevel == "1 - Beginner") {
            setSelectedSkillLevel("1");
        } else if (selectedLevel == "2 - Intermediate") {
            setSelectedSkillLevel("2");
        } else if (selectedLevel == "3 - Advanced") {
            setSelectedSkillLevel("3");
        } else if (selectedLevel == "4 - Expert") {
            setSelectedSkillLevel("4");
        }
    }

    function selectGenre(e) {
        let selectedGenre = e.target.value;

        if(!selectedGenre == "") {
            if (selectedGenres.indexOf(selectedGenre) == -1) {
                setSelectedGenres((selectedGenres) => [...selectedGenres, selectedGenre]);
            }
        }
    }

    function addInstrument(e) {
        e.preventDefault();

        setIsLoading(true);

        const instrument = { 
            instrumentName: selectedInstrument,
            skillLevel: selectedSkillLevel,
            genre: selectedGenres,
        }

        const validationArray = InstrumentFormValidation(instrument);

        if(validationArray.length == 0) {

            setValidation(false);

            fetch("http://127.0.0.1:3000/profiles/" + profileId + "/instrument", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(instrument)
                })
                .then((res) => {
                    if (!res.status === 201) {
                        throw new Error("Could not fetch the data!")
                    }
                    return res.json();
                }).then((res) => {
                    if(res.instrumentName != "") {
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
        <form className={styles.addInstrumentFormDefault} onSubmit={addInstrument}>
            <SelectTag selectPlaceholder="Select instrument" selectOptions={instruments} selectFunction={instrumentNameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="What is your skill level?" />
            <SelectTag selectPlaceholder="Select your skill level" selectOptions={skillLevel} selectFunction={selectSkillLevel} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Add instrument" />}
            {isLoading && <DisabledButton disabledButtonText="Adding instrument" />}
            {validation && <Validation validations={validations} />}
        </form>
    );
}