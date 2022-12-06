import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import PTag from "../../atoms/PTag";
import styles from "./EnsemblePreviewPostInfo.module.css";
import EnsemblePreviwPostInfoInstrument from "./EnsemblePreviewPostInfoInstrument";

export default function EnsemblePreviwPostInfo({post}) {
    return (
        <div className={styles.ensemblePreviwPostInfo}>
            <EnsemblePreviwPostInfoInstrument post={post} />
            <PTag pType="normal" pColor="grey" pText={post.title} />
            <Link to="#">
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show post" />
            </Link>
        </div>
    );
}