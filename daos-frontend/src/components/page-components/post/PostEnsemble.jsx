import LabelTag from "../../atoms/LabelTag";
import styles from "./PostEnsemble.module.css";
import PostEnsembleInfo from "./PostEnsembleInfo";

export default function PostEnsemble({ensemble}) {

    return ( 
        <div className={styles.postEnsembleDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Ensemble" />
            </div>
            <PostEnsembleInfo ensemble={ensemble} />
        </div>
    );
}