// const Create = () => {
//     const [email, setEmail] = useState ('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => { e.preventDefault();
//         const profile = {email, password};

//         fetch('http://localhost:3000/profiles/auth/login', {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(blog)
//         }).then(() => {
//             console.log('Login attempt');
//         })
//     }

//     return (
//         <div className="Create">
//             <h2>Login with profile</h2>
//             <form> onSubmit={handleSubmit}
//                 <label>Profile Email:</label>
//                 <input
//                  type="text"
//                  required
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label>Profile password:</label>
//                 <textarea
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}>
//                 </textarea>
//             </form>
//         </div>
//     )
// }