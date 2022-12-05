//import { useFetcher } from "react-router-dom";


// const Create = () => {
//     return (
//         <div className="create">
//             <h2>Try loging in</h2>
//         </div>
//     );
// }

// export default Create;

// import { useState, useEffect } from "react";
// import ProfileList from "../Auth/ProfileList";

// export default function TestLogin() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts`)
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error(
//                 `This is an HTTP error: The status is ${response.status}`
//               );
//             }
//             return response.json();
//           })
//           .then((actualData) => console.log(actualData))
//           .catch((err) => {
//             console.log(err.message);
//           });
//       }, []);

//       return <div className="TestLogin">TestLogin</div>;
// }


   
//     useEffect(() => {
//      fetch(`http://localhost:3000/profiles`)
//       //.then((response) => console.log(response.json));
//       .then((response) => response.json())
//       .then((actualData) => console.log(actualData));
//     }, []);
   
//     return <div className="TestLogin">TestLogin</div>;
//    }
   

// const TestLogin = () => {
//     const {data: profiles, isPending, error } = useFetch ('http://localhost:3000/profiles');

//     return (
//         <div className="testLogin">
//             {error && <div>{error}</div>}
//             {isPending && <div>{Loading}</div>}
//             {profiles && <ProfileList profiles={profiles} email="All Emails" />}
//         </div>
//     );
// }

// This works
// const TestLogin = () => {
//     const [profile, setProfiles] = useState ([
//         {email: "TESTER", firstname: "DD", id: 1},
//         {email: "TESTER", firstname: "WW", id: 2}
//     ]);

//     return (
//         <div className="testLogin">
//             <ProfileList profiles={profile}/>
//         </div>
//     );
// }

//export default TestLogin;


// -----------------------

import { useState } from "react";
import { json, useFetcher } from "react-router-dom";

const Create = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = { email, password};
        console.log(profile);

        fetch('http://localhost:3000/profiles/auth/login', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(profile)
        }).then((response) => response.json())
        .then((actualData) => console.log(actualData))
        .catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div className="create">
            <h2>Try loging in</h2>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input
                 type="text"
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}>            
                 </input>

                <label>Password: </label>
                <input 
                 type="text" 
                 required 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}>
                 </input>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Create;