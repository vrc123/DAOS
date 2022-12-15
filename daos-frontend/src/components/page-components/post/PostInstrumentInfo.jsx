import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./PostInstrumentInfo.module.css";
import MusicianInstrumentSkillLevelComponent from "../../others/MusicianInstrumentSkillLevelComponent";

export default function PostInstrumentInfo({post}) {
    return (
        <div className={styles.postInstrumentInfoDefault}>
            <HTag hType="h3" hColor="blue" hText={post.instrument} />
            <div>
                <LabelTag labelType="small" labelColor="grey" labelText="Skill level" />
                <MusicianInstrumentSkillLevelComponent skillLevel={post.minimumSkillLevel + "+"} />
            </div>
        </div>
    );
}