import LabelTag from "../atoms/LabelTag";
import styles from "./MusicianInstrumentSkillLevelComponent.module.css";

export default function MusicianInstrumentSkillLevelComponent({skillLevel}) {
    return (
        <div className={styles.musicianInstrumentSkillLevelComponentDefault}>
            <LabelTag labelType="small" labelColor="white" labelText={skillLevel} />
        </div>
    );
}