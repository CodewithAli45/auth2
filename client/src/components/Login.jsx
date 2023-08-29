import React, {useState} from 'react';
import Home from './Home';
import '../styles/Style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/login', {
            email, password
        }).then((logged) => {
            console.log(logged);
            if(logged.data.status === 'success'){
                navigate('/');
            }
        }).catch(err => console.log(err));
    }
    return (
        <div>
            <Home />
            <div className="container-signup">
                <form action="" onSubmit={handleLogin}>
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
                            type="password" 
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
