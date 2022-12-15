import Chip from "./Chip";
import styles from "./Chips.module.css";


export default function Chips({selected, setSelectedGenres}) {

    function deleteitem(selectedGenre) {
        setSelectedGenres(selected.filter(genre => genre !== selectedGenre))
    }

    return (
        <div className={styles.chipsDefault} >
            {selected.map((selectedGenre, index) =>
            <Chip key={index} selectedGenre={selectedGenre} deleteitem={deleteitem}/>
            )}
        </div>
    );
}