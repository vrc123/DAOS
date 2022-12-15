import deleteSelected from "../../img/delete-selected.svg";
import styles from "./Chip.module.css";
import LabelTag from "../atoms/LabelTag";

export default function Chip({selectedGenre, deleteitem}) {
    return (
        <div onClick={() => deleteitem(selectedGenre)} className={styles.chipDefault} >
            <LabelTag labelType="small" labelColor="white" labelText={selectedGenre} />
            <img src={deleteSelected} alt="Delete" />
        </div>
    );
}