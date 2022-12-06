import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import styles from "./EnsemblePreviewInfo.module.css";

export default function EnsemblePreviewInfo({ensemble}) {
    return (
        <div className={styles.ensemblePreviewInfoDefault}>
            <HTag hType="h3" hColor="red" hText={ensemble.name}/>
            <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
        </div>
    );
}