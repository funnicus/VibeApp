import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch, Route
  } from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import SendVibes from './components/SendVibes';
import Chat from './components/Chat';

import vibeService from './services/vibes';

import './App.css';

import { Vibe } from './types';

const App: React.FC = () => {

    const [vibe, setVibe] = useState('')

    useEffect(() => {
        const fetchAVibe = async () => {
            const receivedVibe = await vibeService.getRandom() as Vibe;
            setVibe(receivedVibe.vibe);
        }
        fetchAVibe();
    }, []);

    const getAVibe = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const receivedVibe = await vibeService.getRandom() as Vibe;
        setVibe(receivedVibe.vibe);
    }

    return (
            <Router>
                <div id='home'>
                    <Nav />
                    <Switch>
                        <Route path="/send-vibes">
                            <SendVibes />      
                            <br />
                            <em>Vibe app by Juhana Kuparinen, junction hackathon 2020</em>
                        </Route>
                        <Route path="/chat">
                            <Chat />      
                            <br />
                            <em>Vibe app by Juhana Kuparinen, junction hackathon 2020</em>
                        </Route>
                        <Route path="/">
                            <Home />
                            <div id='random-vibe'>
                                <h3>Here is a random vibe for you!</h3>
                                <p id='vibe'>{vibe ? vibe : 'waiting for a vibe...'}</p>
                                <button onClick={getAVibe}>Get a new vibe!</button>
                                <br />
                                <em>Vibe app by Juhana Kuparinen, junction hackathon 2020</em>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
    );
};

export default App;