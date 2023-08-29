import React, {useState} from 'react';
import Home from './Home';
import '../styles/Style.css';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Home />
            <div className="container-signup">
                <form action="">
                    <h1>Registration</h1>
                    <div className="name">
                        <label htmlFor="fullName">Name</label>
                        <input 
                            type="text" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="passwrod" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="btns">
                        <button>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
