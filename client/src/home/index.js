import React from 'react';
import TopNav from '../util/nav-bar/top-navigation'
import './home.css';
import randomChat from '../images/random-strangers.png'
import { useHistory } from 'react-router-dom';

const Home = () => {

  const history = useHistory();

  const onChatClick = (event) => {
      history.push("/chat")
  }

  return (
    <div className="remove-default">
      <TopNav />
      <div className="main-body">
        <div className="image">
          <img src={randomChat} alt="randomchat"></img>
        </div>
        <p>
          Chat with random strangers
        </p>
        <p>
          This is one on one random text chat with strangers. You can safely start chat This is a great text chat alternative.
        </p>
        <p>
          By starting random chat you agree to the Terms of Use and Privacy policy
        </p>
        <div className="chat-area" onClick={(e) => { onChatClick(e) }}>
          <p className="chat-button">Chat Now</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
