import { useState } from "react";

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
        .then((dataResponse) => {
            console.log(dataResponse.access_token)
            dataResponse.access_token = "Bearer " + dataResponse.access_token;
            // getting the ID from the backend where payload
            console.log(dataResponse.profileId)
            localStorage.setItem("token", JSON.stringify(dataResponse.access_token))
        })
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