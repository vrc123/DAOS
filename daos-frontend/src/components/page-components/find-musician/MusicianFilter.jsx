import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import styles from "./MusicianFilter.module.css";

export default function MusicianFilter({musicians}) {
    
    return (
        <div className={styles.musicianFilterDefault}>
            <HTag hType="h1" hColor="blue" hText="Find Musician"/>
            <PTag pType="normal" pColor="grey" pText={`${musicians.length}  musicians found`} />
        </div>
    );
}