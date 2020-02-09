import React from "react";
import {connect} from "react-redux";
import Header from '../../components/skypey/header';
const ChatWindowContainer = ({ activeUser }) => {
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
        </div>
    );
};

const mapStateToProps = ({activeUserId, contacts}) => {
    return {
        activeUser: contacts[activeUserId]
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