import PostDescription from "./PostDescription";
import PostEnsemble from "./PostEnsemble";
import PostInstrument from "./PostInstrument";
import styles from "./PostPropsList.module.css";

export default function PostPropsList({post, ensemble}) {

    return ( 
        <div className={styles.postPropsListDefault}>
            <PostDescription post={post} />
            <PostInstrument post={post} />
            <PostEnsemble ensemble={ensemble} />
        </div>
    );
}