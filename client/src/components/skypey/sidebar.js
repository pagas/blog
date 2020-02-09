import React from 'react';
import UserContainer from '../../containers/skypey/userContainer';

const Sidebar = ({contacts}) => <aside className="Sidebar">
    {contacts.map(contact => <UserContainer user={contact} key={contact.user_id} />)}
</aside>;


export default Sidebar;