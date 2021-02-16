import './App.css';
import React from 'react'
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedAppThunk} from "./Redux/appReducer";
import Preloader from "./common/preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedAppThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className='App-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedAppThunk}))(App);
