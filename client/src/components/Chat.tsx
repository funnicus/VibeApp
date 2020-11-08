import React from 'react';

const Chat: React.FC = () => { 

    return (
      <div id='chat-container'>
          <iframe src="https://nano-chat.herokuapp.com/" width="100%" height="300">
          </iframe>
      </div>
    );
};

export default Chat;