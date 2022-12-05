// import { Link } from "react-router-dom";
// import HTag from "../components/atoms/HTag";
// import PTag from "../components/atoms/PTag";
// import LoginForm from "../components/forms/LoginForm";
// import styles from "./Login.module.css";
// import React from "react";
// import { useState } from "react";

// export default function Login() {
//     return (
//         <div className={styles.loginDefault}>
//             <div>
//                 <HTag hType="h1" hColor="blue" hText="Login" />
//             </div>
//         </div>
//     );
// }

//--------------
// Before changes

import { Link } from "react-router-dom";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";
import LoginForm from "../components/forms/LoginForm";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <div className={styles.loginDefault}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Login" />
                <LoginForm />
                <Link to="#">
                    <PTag pType="small" pColor="grey" pText="Forgot password?" />
                </Link>
            </div>
        </div>
    );
}