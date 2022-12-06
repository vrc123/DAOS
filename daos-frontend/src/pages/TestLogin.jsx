import { useState } from "react";
import { json, useFetcher } from "react-router-dom";
import { AuthManager } from "../auth/AuthManager";

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
    //.then((dataResponse) => console.log(dataResponse))
    .then((dataResponse) => console.log(dataResponse.access_token))
    //.then((dataResponse) => dataResponse.access_token())
    //.then((dataResponse) => console.log(dataResponse))

    //.then(localStorage.setItem(JSON.stringify(dataResponse.access_token)))


        
        
        // .then((response) => response.json())
        // //.then((token) => console.log(token))
        // .then((response) => console.log(response.body))
        // .then((dataResponse) => console.log(dataResponse))
        // //.then((token) => console.log(token.type))
        // //.then((token) => console.log(token.body))


        //.then(updateToken(token))

        //.then((AuthManager.updateToken(Token)))
        //console.log(Authentication)
        //console.log(Authentication)
        // .then((Token.JSON.stringify))
        // localStorage.setItem(Token)




        .catch((err) => {
            console.log(err.message);
        })


    }

    const ff = "dd";

    const updateToken = () => {
        AuthManager.updateToken(ff);
      };

    // const updateToken = () => {
    //     AuthManager.updateToken("dwadawd");
    //   };

//     fetch('http://localhost:3000/profiles/auth/login', {
//         method: 'POST',
//         headers: {"content-Type": "application/json"},
//         body: JSON.stringify(profile)
//     }).then((response) => response.json())
//     .then((actualData) => console.log(actualData))
//     .catch((err) => {
//         console.log(err.message);
//     })
// }

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
                <button onClick={updateToken}>update token</button>
            </form>
        </div>        
    );
}

// https://www.youtube.com/watch?v=EcRFYF4B3IQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=29

export default Create;