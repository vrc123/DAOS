import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import styles from "./PostInfoContactButtons.module.css";

export default function PostInfoContactButtons({admin}) {

    return ( 
        <div className={styles.postInfoContactButtonsDefault}>
            <Link to="#">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={admin.phone} />
            </Link>
            <div></div>
            <Link to="#">    
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={admin.email} />
            </Link>
        </div>
    );
}