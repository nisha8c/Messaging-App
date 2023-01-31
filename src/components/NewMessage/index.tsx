import { Button, Input } from "antd";
import { FunctionComponent, useState } from "react";

interface NewMessageProps {
    onSubmit: (message: string) => void;
}

const NewMessage: FunctionComponent<NewMessageProps> = ({onSubmit}) => {
    const [message, setMessage ] = useState<string>('');

    const _onSubmit = () => {
        if(message){
            onSubmit(message);
            setMessage('');
        }
        
    }
  return (
    <Input.Group compact>
      <Input
        style={{ width: "calc(100% - 77px)" }}
        onPressEnter={_onSubmit}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="primary" onClick={_onSubmit} >Send</Button>
    </Input.Group>
  );
};

export default NewMessage;