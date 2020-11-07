import React, { useState } from 'react';
import vibeService from '../services/vibes';

const SendVibes: React.FC = () => {

    const [ vibe, setVibe ] = useState("")

    const sendAVibe = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        vibeService.uploadVibe(vibe);
        console.log("Vibe submitted")
        setVibe("")
    }

    return (
     <form onSubmit={sendAVibe}>
         <label>Send a vibe &#128151;</label>
         <input type='text' value={vibe} placeholder='send a vibe...' onChange={e => setVibe(e.target.value)} /><button type='submit'>Submit your vibe!</button>
     </form>
    );
};

export default SendVibes;