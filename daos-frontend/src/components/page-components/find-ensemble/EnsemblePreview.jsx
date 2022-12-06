import styles from "./EnsemblePreview.module.css";
import EnsemblePreviewInfo from "./EnsemblePreviewInfo";
import EnsemblePreviewPostsInfo from "./EnsemblePreviewPostsInfo";

export default function EnsemblePreview({ensemble}) {
    return (
        <div className={styles.ensemblePreviewDefault}>
            <EnsemblePreviewInfo ensemble={ensemble} />
            <EnsemblePreviewPostsInfo ensemble={ensemble} />
        </div>
    );
}