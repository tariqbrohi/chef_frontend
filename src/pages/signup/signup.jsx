import axios from '../../config/axios';
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import style from './signup.module.scss';
import img from '../../assets/img/login.jpg';
const Signup = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/user/auth', {
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
            age: age,
            gender: gender,
        })
            .then(function (response) {
                window.location = "/dashboard";
                <Redirect to="/dashboard" />
            })
            .catch(function (err) {
                console.log(err);
                window.alert("Something Went Wrong");
            })
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    useEffect(() => {
        let token = localStorage.getItem("jwt-token");
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
                        <h1>Sign Up</h1>
                        <strong>It's quick and easy.</strong>
                    </div>
                    <div className={style.inputs}>
                        <div className={style.name}>
                            <input required type="text" placeholder="First Name" value={fName} onChange={(e) => setfName(e.target.value)} />
                            <input required type="text" placeholder="Last Name" value={lName} onChange={(e) => setlName(e.target.value)} />
                        </div>
                        <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input required type="Number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className={style.gender}>
                        <select required onChange={handleGenderChange} name="gender" id="gender">
                            <option value="gender">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={style.signin}>
                        Already have an account?
                        <Link className={style.link} to="/login">Log In</Link>
                    </div>
                    <div className={style.signupBtn}>
                        <button onClick={onSubmit}>Sign Up</button>
                    </div>
                </div>
                <div className={style.imgDiv}>
                    <img src={img} alt="couple cooking" />
                </div>
            </div>
        </div>
    );
}

export default Signup;