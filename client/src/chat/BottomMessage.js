import React, { useState } from 'react';
import './chat.css';

const BottomMessage = (props) => {

    const { onSubmit } = props;

    const [message, setMessage] = useState('');

    const messageChange = (e) => {
        setMessage(e.target.value)
    }

    const onSend = () => {
        if (message)
            onSubmit(message)

        setMessage('')
    }

    return (<div className="bottom-message">
        <input className="message-box" value={message}
            onChange={(e) => messageChange(e)} onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "NumpadEnter") return onSend()
            }}>
        </input>
        <button className="message-button" onClick={(e) => onSend()}>SEND</button>
    </div>)
}

export default BottomMessage;