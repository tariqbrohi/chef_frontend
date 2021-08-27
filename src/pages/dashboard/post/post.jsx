import React from 'react';
import style from './post.module.scss';
import user from '../../../assets/img/user.JPG'
import img from '../../../assets/img/background1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'
const Post = (props) => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.userInfo}>
                    <div className={style.imgDiv}>
                        <img src={user} alt="profile img" />
                    </div>
                    <div className={style.username}>
                        <p>Tariq Brohi</p>
                    </div>
                </div>
            </div>
            <div className={style.descriptionDiv}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, cupiditate!</p>
            </div>
            <div className={style.contentDiv}>
                <img src={img} alt="img" />
            </div>
            <div className={`${style.socialDiv} ${style.counts}`}>
                <div className={style.likesCount}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>100</p>
                </div>
                <div className={style.commentsCount}>
                    <FontAwesomeIcon icon={faCommentDots} />
                    <p>10</p>
                </div>
            </div>
            <hr />
            <div className={style.socialDiv}>
                <div className={style.like}>
                    <button className={style.socialBtn}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>Like</p>
                    </button>
                </div>
                <div className={style.comment}>
                    <button className={style.socialBtn}>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <p>Comment</p>
                    </button>
                </div>
            </div>
            <hr />
            <div className={style.commentSection}>
                <span>
                    <img src={user} alt="userImg" />
                    <input type="text" placeholder="Write a comment"/>
                </span>
            </div>
        </div>
    );
};

export default Post;