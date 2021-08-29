import React, { useState } from 'react';
import style from './CreatePost.module.scss';
import axios from '../../../config/axios';
const CreatePost = ({disp}) => {
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', file);
        console.log(formData)
        console.log(file);
        const config = {
            encType: "multipart/form-data"
        }
        axios.post('/saveImage', formData, config)
        .then((res) => {
            const data = {
                userID:  localStorage.getItem('userID'),
                desc: desc,
                img: res.data
            }
            axios.post('/post', data)
            .then((savePostRes) => {
                console.log(savePostRes);
            })
            .catch((errr) => {
                console.log(errr);
            })
        })
        .catch((er) => {
            console.log(er);
        })
    }
    return (
        <div className={style.container} id="post_container">
            <div className={style.wrapper}>
                <form onSubmit={onFormSubmit}>
                    <div className={style.header}>
                        <h3>What's New Today</h3>
                        <button onClick={(e) => document.getElementById('post_container').style.display = 'none'}>X</button>
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