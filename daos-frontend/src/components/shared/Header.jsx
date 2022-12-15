import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HTag from "../atoms/HTag";
import PTag from "../atoms/PTag";
import HeaderNavigation from "../others/HeaderNavigation";
import ToggleHeaderNavigation from "../others/ToggleHeaderNavigation";
import styles from "./Header.module.css";

export default function Header({loggedIn, setLoggedIn}) {

    const [changeLogo, setChangeLogo] = useState(true);
    const [showHeaderNavigation, setShowHeaderNavigation] = useState(true);
    const [changeToggle, setChangeToggle] = useState(true);

    useEffect(() => {

        if(screen.width < 428 ) {
            setShowHeaderNavigation(false);
            setChangeLogo(false)
        } else {
            setShowHeaderNavigation(true);
            setChangeLogo(true)
        }

    }, []);

    function show() {
        setChangeToggle(false);
    }

    function hide() {
        setChangeToggle(true);
    }

    return (
        <header className={styles.headerDefault}>
            <div>
                <Link to="/">
                    <HTag hType="h3" hColor="red" hText="Music Interaction" />
                    {changeLogo && <PTag pType="small" pColor="grey" pText="Created by DAOS - Danish Amateur Orchestra Samvirke" />}
                    {!changeLogo && <PTag pType="small" pColor="grey" pText="Created by DAOS" />}
                </Link>
                {showHeaderNavigation && <HeaderNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
                {!showHeaderNavigation && <ToggleHeaderNavigation changeToggle={changeToggle} show={show} hide={hide} />}
            </div>
            {!changeToggle && <HeaderNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        </header>
    );
}