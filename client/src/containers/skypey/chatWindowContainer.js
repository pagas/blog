import React from "react";
import {connect} from "react-redux";
import Header from '../../components/skypey/header';
import Chats from "../../components/skypey/chats";
import MessageInput from '../../components/skypey/messageInput';
import {setTypingValue} from '../../actions'
import _ from 'lodash';

const ChatWindowContainer = ({ activeUser, activeMsgs, typing, handleChange}) => {
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)}/>
            <MessageInput value={typing} handleChange={handleChange}/>
        </div>
    );
};

const mapStateToProps = ({activeUserId, contacts, messages, typing}) => {
    return {
        activeUser: contacts[activeUserId],
        activeMsgs: messages[activeUserId],
        typing: typing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (e) => {
            dispatch(setTypingValue(e.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindowContainer);