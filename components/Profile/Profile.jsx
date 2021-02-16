import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MessagesContainer from "./MyPosts/messagesContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         userUpdateStatusThunk={props.userUpdateStatusThunk} isOwner={props.isOwner}
                         savePhotoThunk={props.savePhotoThunk}/>
            <MessagesContainer />
        </div>
    )
}

export default Profile;