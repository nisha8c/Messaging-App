import React, { FunctionComponent } from 'react';
import { Avatar, Tooltip } from "antd";
import moment from 'moment';
import { IMessage } from '../../model/Message';
import './ChatBubble.scss'

interface ChatBubbleProps {
    item: IMessage;
    isOwner: boolean;
}

const ChatBubble: FunctionComponent<ChatBubbleProps> = ({item: {userName, time, message}, isOwner}) => {

  console.log("isOwner: ",isOwner)

  return (
    <>
    <blockquote className="speech-bubble" data-isOwner={isOwner}>
    
      <p>{message}</p>
      <cite>{userName}</cite>
      <Tooltip title={moment(time).format("YYYY-MM-DD HH:mm:ss")}>
          <span style={{ fontSize: 10 }}>{moment(time).fromNow()}</span>
      </Tooltip>
    </blockquote>
    {
      /*
        <div className="chat-bubble" data-isOwner={isOwner}>
          <Avatar style={{ backgroundColor: 'black'}} size="large" alt={userName}>{userName}</Avatar>
          <div className='msg-div'>
            <p style={{ fontSize: 20 }}>{message}</p>
            <Tooltip title={moment(time).format("YYYY-MM-DD HH:mm:ss")}>
                <span style={{ fontSize: 10 }}>{moment(time).fromNow()}</span>
            </Tooltip>
          </div>
        </div>
      */
    }
    
    </>
  );
};

export default ChatBubble;