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
        }).then((response) => {
            if(!response.ok) {
               throw Error("Http error:" + response.status);
            } 
            response.json().then((response) => {
                // console.log(response.access_token)
                // console.log(response.profileId)

                //response.access_token = "Bearer " + response.access_token;
                response.access_token = response.access_token;

                //By using stringify it will give the token ""
                //which will stop the fetchWithAuthentication
                //localStorage.setItem("token", JSON.stringify(response.access_token))
                localStorage.setItem("token", (response.access_token))
                localStorage.setItem("profileId", JSON.stringify(response.profileId))
                if (!localStorage.getItem("token" === undefined)){
                    console.log(localStorage.token, "virker som den skal")
                }
                console.log(localStorage.token, "virker ikke")
            })
            // return something;
        })
        .catch((err) => {
            console.log(err.message);
            console.log(err)
            console.log()
          });
      };

      const fetchWithAuthentication = (e) => {
        e.preventDefault();

         fetch('http://localhost:3000/profiles/protected', {
    //   fetch('http://localhost:3000/profiles', {
            method: 'GET',
            headers: ({
                'Authorization': `Bearer ${localStorage.token}`, 
                'Content-Type': 'application/json',
            })
        })
        .then((response) => {
          response.json().then((response) => {
              console.log(response)
              console.log(response.email)
          })
        })
    };



    //   const testToken = (e) => {
    //     e.preventDefault();
    //     const localStorageToken = localStorage.getItem("token");

    //     fetch('http://localhost:3000/profiles/protected', {
    //         method: 'GET',
    //         headers: {
    //             Authentication: `Bearer ${localStorageToken.token}`
    //         }
    //     }).then((response) => {
    //         console.log(Authentication);
    //         console.log(localStorageToken);
    //         console.log(localStorageToken.token);
    //         if(!response.ok) {
    //             throw Error("Something went wrong: " + response.status);
    //         }
    //         response.json().then((response) => {
    //             console.log(response.email)
    //             console.log(response.password)
    //         })
    //         // return something;
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //       });
    //   };


        // try {
        //     const result = localStorage.getItem("token");
        //     console.log(result);
        //     console.log(localStorage.getItem("token"));
        // } catch (error) {
        //   console.log("redirect to Login page");
        // }

    //   const testToken = () => {
    //     try {
    //         const result = localStorage.getItem("token");
    //         console.log(result);
    //         console.log(localStorage.getItem("token"));
    //     } catch (error) {
    //       console.log("redirect to Login page");
    //     }
    //   };

// -.----------------------------------------------------------------------------


        //       fetch('http://localhost:3000/profiles/auth/login', {
        //     method: 'POST',
        //     headers: {"content-Type": "application/json"},
        //     body: JSON.stringify(profile)
        // }).then((response) => response.json())
        // .then((dataResponse) => {
        //     console.log(dataResponse.access_token)
        //     dataResponse.access_token = "Bearer " + dataResponse.access_token;
        //     // getting the ID from the backend where payload
        //     console.log(dataResponse.profileId)
        //     localStorage.setItem("token", JSON.stringify(dataResponse.access_token))
        //     localStorage.setItem("profileId", JSON.stringify(dataResponse.profileId))
        // })
        //     .catch((err) => {
        //         console.log(err.message);
        //     })
        // }
        


        // fetch('http://localhost:3000/profiles/auth/login', {
        //     method: 'POST',
        //     headers: {"content-Type": "application/json"},
        //     body: JSON.stringify(profile)
        // }).then((response) => response.json())
        // .then((dataResponse) => {
        //     console.log(dataResponse.access_token)
        //     dataResponse.access_token = "Bearer " + dataResponse.access_token;
        //     // getting the ID from the backend where payload
        //     console.log(dataResponse.profileId)
        //     localStorage.setItem("token", JSON.stringify(dataResponse.access_token))
        //     localStorage.setItem("profileId", JSON.stringify(dataResponse.profileId))
        // })
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
            </form>
            <button onClick={fetchWithAuthentication}>TestToken</button>
        </div>        
    );
}


export default Create;