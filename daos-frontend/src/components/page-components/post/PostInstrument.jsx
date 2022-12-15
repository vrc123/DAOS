import styles from "./PostInstrument.module.css";
import PostInstrumentInfo from "./PostInstrumentInfo";
import MusicianInstrumentGenreList from "../../others/MusicianInstrumentGenreList";
import LabelTag from "../../atoms/LabelTag";

export default function PostInstrument({post}) {
    return (
        <div className={styles.postInstrumentDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Instrument" />
            </div>
            <PostInstrumentInfo post={post} />
            <MusicianInstrumentGenreList genreList={post} />
        </div>
    );
}