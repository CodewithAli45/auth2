import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <ul>
                <li>
                    <Link to={'/'} className='list'>Home</Link>
                </li>
                <li>
                    <Link to={'/signup'}className='list'>Signup</Link>
                </li>
                <li>
                    <Link to={'/login'}className='list'>Login</Link>
                </li>
            </ul>
            <img src={'backdrop.jpg'} alt="backdop" />
        </div>
    );
}

export default Home;
