import React from "react";
import {connect} from "react-redux";
import Header from '../../components/skypey/header';
import Chats from "../../components/skypey/chats";
import _ from 'lodash';

const ChatWindowContainer = ({ activeUser, activeMsgs }) => {
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)}/>
        </div>
    );
};

const mapStateToProps = ({activeUserId, contacts, messages}) => {
    return {
        activeUser: contacts[activeUserId],
        activeMsgs: messages[activeUserId]
    }
}


// const ChatWindow = ({ activeUserId }) => {
//     const state = store.getState();
//     const activeUser = state.contacts[activeUserId];
//
//     return (
//         <div className="ChatWindow">
//             <Header user={activeUser} />
//         </div>
//     );
// };

export default connect(mapStateToProps)(ChatWindowContainer);