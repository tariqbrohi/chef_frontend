import React, { useState } from 'react';
import style from './CreatePost.module.scss';
import axios from '../../../config/axios';
const CreatePost = () => {
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState('');
    const handleSubmit = (e) => {
        let userID = localStorage.getItem('userID');
        const data = {
            userId: userID,
            description: desc
        }
        axios.post('/post', data)
        .then((res) => {
            console.log(res);
        }) 
        .catch((errr) => {
            console.log(errr);
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', file);
        console.log(file);
        console.log(formData)
        const config = {
            encType: "multipart/form-data"
        }
        axios.post('/imgTest', formData, config)
        .then((res) => {
            console.log(res.data);
        })
        .catch((er) => {
            console.log(er);
        })
    }
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <form onSubmit={onFormSubmit}>
                    <div className={style.header}>
                        <h3>What's New Today</h3>
                    </div>
                    <div className={style.inputWrapper}>
                        <textarea onChange={(e) => setDesc(e.target.value)} rows="8" placeholder="Tell something about your recipi!" />
                        <br />
                        <input name='image' type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className={style.submitBtn}>
                        <button type="submit">Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;