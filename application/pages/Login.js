import React, {useState} from 'react';
import Router from 'next/router';
export default function Login() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    // return (
    //     <div>
    //         <p>You clicked {count} times</p>
    //         <button onClick={() => setCount(count + 1)}>
    //             Click me
    //         </button>
    //     </div>
    // );
    const [loginError, setLoginError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert("username: "+ username + ", pw: " + password)
        //call api
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username,
        //         password,
        //     }),
        // })
        //     .then((r) => {
        //         return r.json();
        //     })
        //     .then((data) => {
        //         if (data && data.error) {
        //             setLoginError(data.message);
        //         } else {
        //             Router.push('/');
        //         }
        //     });
        if (username === "john" && password === "1234") {
            Router.push('/');
        } else {
            setLoginError('Username or password are incorrect');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Login</p>
            <input
                name="email"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Submit"/>
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}
        </form>
    );
}