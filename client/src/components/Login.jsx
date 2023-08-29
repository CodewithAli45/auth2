import React, {useState} from 'react';
import Home from './Home';
import '../styles/Style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <Home />
            <div className="container-signup">
                <form action="">
                    <h1>Login</h1>
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
                        <button>LogIn</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
