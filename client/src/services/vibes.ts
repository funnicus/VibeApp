import axios from 'axios';
const baseUrl = '/api/vibes/';

import { Vibe } from '../types';

const getRandom = async (): Promise<Vibe> => {
    const response = await axios.get(`${baseUrl}random`);
    const vibe = response.data as Vibe;
    return vibe;
}

const uploadVibe = async (vibe: string): Promise<Vibe> => {
    const vibeObj: Vibe = { vibe: vibe }
    const response = await axios.post(`${baseUrl}`, vibeObj);
    const receivedVibe = response.data as Vibe;
    console.log(receivedVibe)
    return receivedVibe;
}


export default { getRandom, uploadVibe }