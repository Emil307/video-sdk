import { useEffect, useMemo, useRef, useState } from 'react';
import { getMeetingId, getToken } from './api';

function Id() {
    const [token, setToken] = useState(null);
    const [meetingId, setMeetingId] = useState(null);

    const getMeetingToken = async () => {
        const token = await getToken();
        setToken(token);
        const ID = await getMeetingId(token);
        setMeetingId(ID);
        console.log("id", ID);
    };

    useEffect(() => {
        getMeetingToken();
    }, []);

    return token ? (
        <h1>{meetingId}</h1>
    ) : null;
}

export default Id;
