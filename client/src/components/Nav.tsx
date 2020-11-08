import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav: React.FC = () => {
    return (
      <div id='nav'>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/send-vibes">Send some vibes!</Link></li>
                  <li><Link to="/chat">Vibe with your homies!</Link></li>
              </ul>
          </nav>
          <hr/>
      </div>
    );
};

export default Nav;