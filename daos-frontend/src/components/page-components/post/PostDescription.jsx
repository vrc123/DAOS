import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";
import styles from "./PostDescription.module.css";

export default function PostDescription({post}) {

    return ( 
        <div className={styles.postDescriptionDefault}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            </div>
            <PTag pType="normal" pColor="grey" pText={post.description} />
        </div>
    );
}