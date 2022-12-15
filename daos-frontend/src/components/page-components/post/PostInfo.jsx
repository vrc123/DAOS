import HTag from "../../atoms/HTag";
import styles from "./PostInfo.module.css";
import PostInfoContactButtons from "./PostInfoContactButtons";

export default function PostInfo({post, ensemble}) {

    return ( 
        <div className={styles.postInfoDefault}>
            <div>
                <HTag hType="h1" hColor="blue" hText={post.title} />
            </div>
            <PostInfoContactButtons admin={ensemble.admin} />
        </div>
    );
}