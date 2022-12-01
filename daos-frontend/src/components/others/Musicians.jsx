import MusicianList from "./MusicianList";
import ButtonTag from "../atoms/ButtonTag";
import styles from "./Musicians.module.css";
import NoMoreResults from "./NoMoreResults";

export default function Musicians({musicians, visibleMusicians, showMoreMusicians}) {
    return (
        <div className={styles.musiciansDefault}>
            <MusicianList musicians={musicians} visibleMusicians={visibleMusicians} />
            {!(visibleMusicians > musicians.length || visibleMusicians == musicians.length) && <ButtonTag buttonFunction={showMoreMusicians} buttonType="normal" buttonColor="white" buttonText="Show more"/>}
            {(visibleMusicians > musicians.length || visibleMusicians == musicians.length) && <NoMoreResults />}
        </div>
    );
}