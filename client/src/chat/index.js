import React, { useState, useRef, useEffect } from 'react';
import TopNav from '../util/nav-bar/top-navigation'
import BottomMessage from './BottomMessage';
import UserPopUp from '../UserDetailsPop.js';
import socketClient from 'socket.io-client'
import './chat.css'
const SERVER = "http://127.0.0.1:5000";
const socket = socketClient('http://localhost:5000', { transports: ['websocket', 'polling', 'flashsocket'] });

const Chat = () => {

    const ref = useRef();
    const scroll = () => ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" });

    const [msgList, setMsgList] = useState([]);
    const [userName, setUserName] = useState();

    useEffect(() => {
        socket.on('messageChannel', (payload) => {
            console.log(`recieved message ${payload}`);
            setMsgList(msgList => [...msgList, { msg: payload.message, userName: payload.userName }])
        });
    }, [])

    useEffect(() => {
        scroll();
    }, [msgList])

    const onSubmit = (message) => {
        socket.emit('chat', { message, userName })
        setMsgList(msgList => [...msgList, { msg: message, userName: userName }])
    }

    const onNameSubmit = (name) => {
        setUserName(name)
    }

    return (
        <div>
            <TopNav />
            {!userName ? <UserPopUp onNameSubmit={onNameSubmit} /> : null}
            <div className="chat-room">
                <ul>
                    {msgList.map((item, index) => {
                        return <div>
                            {item.userName != userName ?
                                (index === (msgList.length - 1) ? < li ref={ref} key={index}>
                                    <div className="list-right">
                                        <p className="time">{item.userName}</p>
                                        <p>{item.msg}</p>
                                        <p className="time">12th june, 2021</p>
                                    </div>
                                </li> : <li key={index}>
                                    <div className="list-right">
                                        <p className="time">{item.userName}</p>
                                        <p>{item.msg}</p>
                                        <p className="time">12th june, 2021</p>
                                    </div>
                                </li>) : (index === (msgList.length - 1) ?
                                    <li ref={ref} key={index}>
                                        <div className="list-left">
                                            <p className="time">{item.userName}</p>
                                            <p>{item.msg}</p>
                                            <p className="time">12th june, 2021</p>
                                        </div>
                                    </li> : <li key={index}>
                                        <div className="list-left">
                                            <p className="time">{item.userName}</p>
                                            <p>{item.msg}</p>
                                            <p className="time">12th june, 2021</p>
                                        </div>
                                    </li>)
                            }
                        </div >
                    })}
                </ul>
            </div>
            {userName ? <BottomMessage onSubmit={onSubmit} /> : null}
        </div>
    )

}

export default Chat;