import { Form, Input, Modal } from "antd";
import { FunctionComponent, useContext } from "react";
import { AppContext } from "../../context/AppContext";

interface LoginModalProps {
    visible: boolean;
}
 
const LoginModal: FunctionComponent<LoginModalProps> = ({visible}) => {
    const { setUserName } = useContext(AppContext);
    const [form] = Form.useForm();

    const _onOk = () => {
        form.submit()
    }

    return ( 
        <Modal
            open={visible}
            title="Login"
            onOk={_onOk}
            closable={false} 
            cancelButtonProps={{style: {display: 'none'}}}
            >

            <Form form={form} onFinish={(values) =>  setUserName(values.userName)}>
                <Form.Item name="userName" label="User Name" required>
                    <Input />
                </Form.Item>
            </Form>

        </Modal>
     );
}
 
export default LoginModal;