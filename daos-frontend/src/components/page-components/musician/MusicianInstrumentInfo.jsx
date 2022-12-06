import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import MusicianInstrumentSkillLevelComponent from "../../others/MusicianInstrumentSkillLevelComponent";
import styles from "./MusicianInstrumentInfo.module.css";

export default function MusicianInstrumentInfo({instrument}) {
    return (
        <div className={styles.musicianInstrumentInfoDefault}>
            <HTag hType="h3" hColor="blue" hText={instrument.instrumentName} />
            <div>
                <LabelTag labelType="small" labelColor="grey" labelText="Skill level" />
                <MusicianInstrumentSkillLevelComponent skillLevel={instrument.skillLevel} />
            </div>
        </div>
    );
}