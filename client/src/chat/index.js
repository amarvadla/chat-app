import React, { useState, useRef, useEffect } from 'react';
import TopNav from '../util/nav-bar/top-navigation'
import BottomMessage from './BottomMessage';
import socketClient from 'socket.io-client'
import './chat.css'
const SERVER = "http://127.0.0.1:5000";
const socket = socketClient('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});

const Chat = () => {

    const ref = useRef();
    const scroll = () => ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth" });

    const [msgList, setMsgList] = useState([]);

    const userId = 2;

    useEffect(() => {
        socket.on('connection', () => {
            console.log(`I'm connected with the back-end`);
        });
    },[])

    useEffect(() => {
        scroll();
    }, [msgList])

    const onSubmit = (message) => {
        socket.emit('chat', message)
        setMsgList([...msgList, { msg: message }])
    }

    return (
        <div>
            <TopNav />
            <div className="chat-room">
                <ul>
                    {msgList.map((item, index) => {
                        return <div>
                            {item.id !== userId ?
                                (index === (msgList.length - 1) ? < li ref={ref}>
                                    <div className="list-right">
                                        <p>{item.msg}</p>
                                        <p className="time">12th june, 2021</p>
                                    </div>
                                </li> : <li>
                                    <div className="list-right">
                                        <p>{item.msg}</p>
                                        <p className="time">12th june, 2021</p>
                                    </div>
                                </li>) : (index === (msgList.length - 1) ?
                                    <li ref={ref}>
                                        <div className="list-left">
                                            <p>{item.msg}</p>
                                            <p className="time">12th june, 2021</p>
                                        </div>
                                    </li> : <li  >
                                        <div className="list-left">
                                            <p>{item.msg}</p>
                                            <p className="time">12th june, 2021</p>
                                        </div>
                                    </li>)
                            }
                        </div >
                    })}
                </ul>
            </div>
            <BottomMessage onSubmit={onSubmit} />
        </div>
    )

}

export default Chat;