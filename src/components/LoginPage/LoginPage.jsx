import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const { username, password } = formData;

        if (username === 'testuser' && password === 'password123') {
            alert('Login Successful!');
            history.push('/');
        } else {
            alert('Invalid credentials. Please try again.');

        }
    };

    return (
        <div className="loginContainer">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>

            </form>
        </div>
    )
};

export default LoginPage;
