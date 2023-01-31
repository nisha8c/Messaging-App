import React, { useContext, useEffect } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { IMessage } from "./model/Message";
import { AppHeader, ChatBubble, NewMessage, LoginModal } from './components';
import {AppContext} from "./context/AppContext";
import { socket } from './Socket';


function App() {

  const messageListRef = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  const { userName } = useContext(AppContext);

  const _onNewMessage =  (message: IMessage) => {
    console.log("_onNewMessage", message)
    setMessages(s => [
      ...s,
      message,
    ]);

    messageListRef.current!.scrollTo({
      top: messageListRef.current!.scrollHeight,
      behavior: "smooth",
    });
  }

  const _emitMessage = (message: string) => {
    const newMessage: IMessage = {
      userName,
      time: new Date().getTime(),
      message,
    }

    socket.emit('chat message', newMessage);
  }

  useEffect(() => {
    socket.on('chat message', (message) => {
      console.log("message from socket", message);
      _onNewMessage(message);
    })
  }, [])

  console.log("messages => ",messages)

  return (
    <>
      <LoginModal visible={!userName} />

      <main>
        <AppHeader userName={userName}/>

        <section ref={messageListRef} className="message-list">
          {messages.map((message) => (
            <ChatBubble key={message.time} item={message} isOwner={userName === message.userName} />
          ))}
        </section>

        <footer>
          <NewMessage onSubmit={_emitMessage} />
        </footer>
      </main>
    </>
  );
}

export default App;
