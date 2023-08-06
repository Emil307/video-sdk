import React from 'react';

const JoinCall: React.FC = () => {
    async function startCall() {}

    function joinCall() {}

  return (
    <>
      <button onClick={startCall}>start</button>
      <button onClick={joinCall}>join</button>
    </>
  )
}

export default JoinCall;
