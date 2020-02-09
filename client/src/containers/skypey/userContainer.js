import React from "react";
import {connect} from "react-redux";
import {setActiveUserId} from '../../actions'

const UserContainer = ({ user, handleUserClick }) => {
    const { name, profile_pic, status } = user;

    return (
        <div className="User" onClick={handleUserClick.bind(null, user)}>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    );
};



const mapDispatchToProps = dispatch => {
    return {
        handleUserClick({user_id}) {
            dispatch(setActiveUserId(user_id))
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(UserContainer);
