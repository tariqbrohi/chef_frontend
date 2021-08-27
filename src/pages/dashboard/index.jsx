import CreatePost from './Create Post/create_post';
import style from './index.module.scss';
import React from 'react'
const Dashboard = () => {
    const handleClick = (e) => {
        localStorage.setItem("jwt-token", null);
        window.location = "/";
    }
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.postTemplate}>
                    <CreatePost />
                </div>
                <button onClick={handleClick}>Logout</button>
                <button>Create New Post</button>
            </div>
        </div>
    );
}

export default Dashboard;