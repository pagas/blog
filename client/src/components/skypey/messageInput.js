import React from "react";

const MessageInput = ({ value, handleChange }) => {
    return (
        <form className="Message">
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;