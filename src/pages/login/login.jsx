import axios from "../../config/axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import style from './Login.module.scss';
import img from '../../assets/img/login.jpg'
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        let url = '/user/auth/' + username + "/" + password;
        axios.get(url)
            .then(function (res) {
                localStorage.setItem("jwt-token", res.data.token);
                localStorage.setItem("user_id", res.data.user_id);
                window.location = '/dashboard';
            })
            .catch(function (err) {
                document.getElementById("errorText").style.display = "block";
            })
    }
    useEffect(() => {
        let token = localStorage.getItem("jwt-token");
        console.log(token);
        let url = '/auth/' + token;
        axios.get(url)
            .then((res) => {
                if (res) {
                    window.location = '/dashboard';
                } else {
                    window.alert("Session Expired! Please log in again");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.userInfo}>
                    <div className={style.header}>
                        <h1>Log In</h1>
                        <strong>Let's try some new!</strong>
                    </div>
                    <div className={style.inputs}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email or Phone Number" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className={style.error} id="errorText">Invalid Username or Password</div>
                    <div className={style.signup}>
                        Don't have an account?
                        <Link className={style.link} to="/signup">Create new account</Link>
                    </div>
                    <div className={style.loginBtn}>
                        <button onClick={handleClick} >Log In</button>
                    </div>
                </div>
                <div className={style.imgDiv}>
                    <img src={img} alt="couple cooking" />
                </div>
            </div>
        </div>
    );
}

export default Login;