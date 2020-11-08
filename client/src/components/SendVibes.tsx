import React, { useState } from 'react';
import vibeService from '../services/vibes';

import './SendVibes.css';

const SendVibes: React.FC = () => {

    const [ vibe, setVibe ] = useState("")

    const sendAVibe = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        vibeService.uploadVibe(vibe);
        console.log("Vibe submitted")
        setVibe("")
    }

    return (
     <div>
         <h1>Send some vibes &#128526;</h1>
        <form id='send-vibes-form' onSubmit={sendAVibe}>
            <div>
                <input type='text' value={vibe} placeholder='send a vibe...' onChange={e => setVibe(e.target.value)} /><button type='submit'>Submit your vibe!</button>
            </div>
        </form>
     </div>
    );
};

export default SendVibes;