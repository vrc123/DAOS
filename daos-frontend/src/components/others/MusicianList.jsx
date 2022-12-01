import styles from "./MusicianList.module.css";
import MusicianPreview from "./MusicianPreview";

export default function MusicianList({musicians, visibleMusicians}) {
    return (
        <div className={styles.musicianListDefault}>
            {musicians.slice(0, visibleMusicians).map((musician, index) => {
                return (
                    <MusicianPreview key={index} musician={musician} />
                );
            })}
        </div>
    );
}