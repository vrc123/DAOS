import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";
import InputTagText from "../atoms/InputTagText";
import LabelTag from "../atoms/LabelTag";
import SelectTag from "../atoms/SelectTag";
import TextareaTag from "../atoms/TextareaTag";
import Chips from "../others/Chips";
import DisabledButton from "../others/DisabledButton";
import styles from "./EditEnsemblePostForm.module.css";
import EnsemblePostFormValidation from "./EnsemblePostFormValidation";

export default function EditEnsemblePostForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instruments, setInstruments] = useState(["Violone", "Violin", "Viola", "Viol", "Vihuela", "Trumpet", "Theorbo", "Slide trumpet", "Serpent", "Sackbut", "Natural trumpet", "Natural horn"]);
    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [minimumskillLevel, setMinimumSkillLevel] = useState(["1 - Beginner", "2 - Intermediate", "3 - Advanced", "4 - Expert"]);
    const [selectedMinimumSkillLevel, setSelectedMinimumSkillLevel] = useState("");
    const [genres, setGenres] = useState(["Baroque", "Folk music", "Chamber music", "Romantic", "Late modern", "Late Romantic", "Symphonic"]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { id, postId } = useParams();

    function titleProp(e) {
        setTitle(e.target.value);
    }

    function descriptionProp(e) {
        setDescription(e.target.value);
    }

    function instrumentNameProp(e) {
        setSelectedInstrument(e.target.value);
    }
    
    function selectMinimumSkillLevel(e) {
        let selectedMinimumLevel = e.target.value;

        if (selectedMinimumLevel == "1 - Beginner") {
            setSelectedMinimumSkillLevel("1");
        } else if (selectedMinimumLevel == "2 - Intermediate") {
            setSelectedMinimumSkillLevel("2");
        } else if (selectedMinimumLevel == "3 - Advanced") {
            setSelectedMinimumSkillLevel("3");
        } else if (selectedMinimumLevel == "4 - Expert") {
            setSelectedMinimumSkillLevel("4");
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

    function editEnsemblePost(e) {
        e.preventDefault();

        setIsLoading(true);

        const post = { 
            title,
            description,
            instrumentName: selectedInstrument,
            minimumSkillLevel: selectedMinimumSkillLevel,
            genre: selectedGenres,
        }

        const validationArray = EnsemblePostFormValidation(post);

        if(validationArray.length == 0) {
            fetch("http://127.0.0.1:3000/ensembles/" + id + "/post/" + postId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
                })
                .then((res) => {
                    if (!res.status === 200) {
                        throw new Error("Could not fetch the data!")
                    }
                    return res.json();
                }).then((res) => {
                    if(res.title != "") {
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
        <form className={styles.editEnsemblePostFormDefault} onSubmit={editEnsemblePost}>
            <InputTagText inputText="Title" value={title} inputTextFunction={titleProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textAreaText="Write a short description of what you are looking for..." textAreaFunction={descriptionProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Instrument" />
            <SelectTag selectPlaceholder="Select instrument" selectOptions={instruments} selectFunction={instrumentNameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Minimum skill level" />
            <SelectTag selectPlaceholder="Select minimum skill level" selectOptions={minimumskillLevel} selectFunction={selectMinimumSkillLevel} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            <SelectTag selectPlaceholder="Genres" selectOptions={genres} selectFunction={selectGenre} />
            <Chips selected={selectedGenres} setSelectedGenres={setSelectedGenres} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes" />}
        </form>
    );
}