import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./MusicianInstrumentPreviewInfo.module.css";
import MusicianInstrumentSkillLevelComponent from "../../others/MusicianInstrumentSkillLevelComponent";

export default function MusicianInstrumentPreviewInfo({instrument}) {
    return (
        <div className={styles.musicianInstrumentPreviewInfoDefault}>
            <HTag hType="h3" hColor="blue" hText={instrument.instrumentName} />
            <div>
                <LabelTag labelType="small" labelColor="grey" labelText="Skill level" />
                <MusicianInstrumentSkillLevelComponent skillLevel={instrument.skillLevel} />
            </div>
        </div>
    );
}