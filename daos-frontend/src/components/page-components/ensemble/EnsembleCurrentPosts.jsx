import LabelTag from "../../atoms/LabelTag";
import EnsemblePostsInfo from "./EnsembleCurrentPostsInfo";
import styles from "./EnsembleCurrentPosts.module.css";

export default function EnsembleCurrentPosts({ensemble}) {

    return ( 
        <div className={styles.ensembleCurrentPostsDefault}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Current posts" />
            <EnsemblePostsInfo ensemble={ensemble} />
        </div>
    );
}