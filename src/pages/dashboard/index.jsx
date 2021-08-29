import CreatePost from './Create Post/create_post';
import style from './index.module.scss';
import React, { useState, useEffect } from 'react'
import axios from '../../config/axios';
import PostTemplate from './post/post';
const Dashboard = () => {


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('/posts')
        .then(res => {
            setPosts(res.data.posts);
        })
        .catch(err => {
            console.log(err);
        })
    }, [posts]);

    const handleClick = (e) => {
        localStorage.setItem("jwt-token", null);
        window.location = "/";
    }
    const showForm = (e) => {
        document.getElementById('post_container').style.display = 'block';
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.nav}>
                    <div className={style.CreatePostWrapper}>
                        <CreatePost />
                    </div>
                    <button onClick={handleClick}>Logout</button>
                    <button onClick={showForm}>Create New Post</button>
                </div>
                <div></div>
                <div className={style.body}>
                    {console.log(posts)}
                    {
                        posts.map((post) => {
                            return (
                                <div key={post._id}>
                                    <PostTemplate post={post} />
                                    {console.log(post)}
                                </div>
                            )
                        })
                    }
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Dashboard;