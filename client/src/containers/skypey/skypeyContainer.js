import React from 'react';
import Sidebar from '../../components/skypey/sidebar'
import Main from '../../components/skypey/main';
import { connect } from 'react-redux'
import _ from 'lodash';

const SkypeyContainer = ({contacts, user, activeUserId}) => <div className="skypey">
    <Sidebar contacts={_.values(contacts)}/>
    <Main user={user} activeUserId={activeUserId}/>
</div>;

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts,
        user: state.user,
        activeUserId: state.activeUserId
    }
}

export default connect(
    mapStateToProps
)(SkypeyContainer);