import EnsemblePreviwPostInfo from "./EnsemblePreviewPostInfo";
import styles from "./EnsemblePreviewPostsInfo.module.css";

export default function EnsemblePreviewPostsInfo({ensemble}) {
    return (
        <div className={styles.ensemblePreviewPostsInfo}>
            {ensemble.posts.map((post, index) => {
                return (
                    <EnsemblePreviwPostInfo key={index} ensemble={ensemble} post={post} />
                );
            })}
        </div>
    );
}