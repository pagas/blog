import React from 'react';
import Empty from './empty';
import ChatWindowContainer from '../../containers/skypey/chatWindowContainer';

const Main = ({user, activeUserId}) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId}/>;
        } else {
            return <ChatWindowContainer activeUserId={activeUserId}/>;
        }
    };

    return <main className="Main">{renderMainContent()}</main>;
};

export default Main;