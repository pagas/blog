import React from 'react';
import './index.css';
import Sidebar from '../../components/skypey/sidebar'
import Main from '../../components/skypey/main';
import { connect } from 'react-redux'
import _ from 'lodash';

const SkypeyContainer = ({contacts}) => <div className="skypey">
    <Sidebar contacts={_.values(contacts)}/>
    <Main/>
</div>;

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = () => {
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SkypeyContainer);