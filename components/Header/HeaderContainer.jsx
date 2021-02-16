import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunk} from "../../Redux/authReducer";



class HeaderContainer extends React.Component {
    render() {

        return (
            <Header {...this.props} />
        )

    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login
})


export default connect(mapStateToProps, {logOutThunk}) (HeaderContainer);

