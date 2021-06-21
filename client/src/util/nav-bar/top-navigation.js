import React from 'react';
import { useHistory } from 'react-router-dom';
import './nav.css'

const TopNav = () => {

    const history = useHistory();

    const onMenuClick = (menu) => {
        history.push(`/${menu}`)
    }

    return (
        <div className="nav-bar">
            <ul>
                <li className="go-left" onClick={() => onMenuClick('')}>Home</li>
                <li className="go-right" onClick={() => onMenuClick('about')}>About</li>
            </ul>
        </div>
    )
}

export default TopNav;