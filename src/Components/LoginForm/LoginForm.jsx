import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                        <input type="text" placeholder='Digite seu nome' required />
                        <FaUser className='icon' />
                </div>
                <div className="input-box">
                        <input type="password" placeholder='Digite sua senha' required />
                        <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button type="submit">Entrar</button>

                <div className="register-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;