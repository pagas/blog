import React from "react";
import {connect} from "react-redux";
import Header from '../../components/skypey/header';
import Chats from "../../components/skypey/chats";
import MessageInput from '../../components/skypey/messageInput';
import {setTypingValue, sendMessage} from '../../actions'
import _ from 'lodash';
import store from '../../store';

const ChatWindowContainer = ({activeUser, activeMsgs, typing, handleChange, handleSubmit}) => {
    return (
        <div className="ChatWindow">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeMsgs)}/>
            <MessageInput value={typing} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    );
};

const mapStateToProps = ({activeUserId, contacts, messages, typing}) => {
    return {
        activeUser: contacts[activeUserId],
        activeMsgs: messages[activeUserId],
        typing: typing
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (e) => {
            dispatch(setTypingValue(e.target.value));
        },
        handleSubmit: (e) => {
            e.preventDefault();
            const {typing, activeUserId} = store.getState();
            dispatch(sendMessage(typing, activeUserId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindowContainer);