import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';

function Signup() {

    const Admin = {
        email: "jvishvaa2001@gmail.com",
        password: "jvj@2001"
    }

    const [ user, setUser ] = useState({name:"",email:""});
    const [ error, setError ] = useState("");

    const Login = details => {
        console.log(details);

        if ( details.email == Admin.email && details.password == Admin.password)
        {
            console.log("Logged IN");

            setUser({
                name: details.name,
                email: details.email
            })
        }
        else
        {
            setError("Details doesnot match Admin!!!!!");
        }
    }

    const Logout = () => {
        
        setUser({name:"",email:""});
    }

    return (
        <div>
            {(user.email != "") ? (
                <div className="Welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm login={Login} error={error}/>
            )}
        </div>
    )
}

export default Signup;
