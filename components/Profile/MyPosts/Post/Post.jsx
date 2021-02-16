import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div>
            <div>
                <div className={s.ava}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
                    <span>{props.message}</span>
                </div>
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )

}

export default Post;