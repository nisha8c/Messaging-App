import React, { FunctionComponent } from 'react';
import { Avatar, Tooltip } from "antd";
import moment from 'moment';
import { IMessage } from '../../model/Message';

interface ChatBubbleProps {
    item: IMessage;
    isOwner: boolean;
}

const ChatBubble: FunctionComponent<ChatBubbleProps> = ({item: {userName, time, message}, isOwner}) => {

  console.log("isOwner: ",isOwner)

  return (
    <>
    <div className="chat-bubble" data-isOwner={isOwner}>
      <Avatar src="https://joeschmoe.io/api/v1/random" alt={userName} />
      <div><p>{message}</p></div>
      <Tooltip title={moment(time).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(time).fromNow()}</span>
      </Tooltip>
    </div>
    </>
  );
};

export default ChatBubble;