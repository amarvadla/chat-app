import React, { useState } from 'react';
import './popup.css';

const UserPopUp = (props) => {

    const { onNameSubmit } = props;

    const [userName, setUserName] = useState('');

    const nameChange = (e) => {
        setUserName(e.target.value)
    }

    const onSend = () => {
        if (userName)
        onNameSubmit(userName)
        else window.alert('haaaaan ur name should be known in the chat !!!!')
        setUserName('')
    }

    return (<div className="modal">
        <div className="dailog">
            <div>
                Pick your user name and start chatting now !!
            </div>
            <input value={userName} placeholder="User name"
                onChange={(e) => nameChange(e)} onKeyDown={(e) => {
                    if (e.code === "Enter" || e.code === "NumpadEnter") return onSend()
                }}>
            </input>
            <button className="message-button" onClick={(e) => onSend()}>SUBMIT</button>
        </div>
    </div>)
}

export default UserPopUp;