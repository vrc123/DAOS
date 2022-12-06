import EnsembleCurrentPostInfo from "./EnsembleCurrentPostInfo";
import styles from "./EnsembleCurrentPostsInfo.module.css";

export default function EnsembleCurrentPostsInfo({ensemble}) {
    return (
        <div className={styles.ensembleCurrentPostsInfo}>
            {ensemble.posts.map((post, index) => {
                return (
                    <EnsembleCurrentPostInfo key={index} post={post} />
                );
            })}
        </div>
    );
}