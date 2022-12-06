import ButtonTag from "../../atoms/ButtonTag";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import styles from "./EnsembleInfo.module.css";

export default function EnsembleInfo({ensemble}) {

    return ( 
        <div className={styles.ensembleInfoDefault}>
            <div>
                <HTag hType="h1" hColor="red" hText={ensemble.name} />
                <PTag pType="nor mal" pColor="grey" pText={`${ensemble.zipCode} ${ensemble.city}`} />
            </div>
            <a href={ensemble.website} target="_blank">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Visit website" />
            </a>
        </div>
    );
}