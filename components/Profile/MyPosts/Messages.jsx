import React from 'react'
import s from './Messages.module.css'
import Post from "./Post/Post";


const Messages = React.memo( (props) => {

    let posts = props.postData.map(posts => <Post id={posts.id} message={posts.message} likesCount={posts.likesCount} key={posts.id}/>);


    let postElement = React.createRef();

    let addPost = () => {
        props.addPostContainer()
    }

    let addNewPostText = () => {
        let text = postElement.current.value
        props.addNewPostTextContainer(text)
    }

    return (
        <div>
            <div>
                <div className={s.posts}>
                    <h3>My posts</h3>
                    {posts}
                </div>
                <div>
                    <div>
                        <textarea onChange={addNewPostText} value={props.newPostText} ref={postElement} />
                    </div>
                    <div>
                        <button onClick={addPost}>add post</button>
                    </div>

                </div>

            </div>

        </div>
    )

}
)

export default Messages;