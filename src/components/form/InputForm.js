import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/index';

import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import './InputForm.css';

function InputForm() {
  const dispatch = useDispatch();
  const authEmail = useSelector(state => state.email);
  const authPassword = useSelector(state => state.password);
  
  const finishHandler = (values) => {
    console.log('[VALUES]', values);

    dispatch(authActions.login({
      email: values.email,
      password: values.password,
    }));
  }

  const finishFailedHandler = (error) => {
    console.log('[ERROR]:', error);

    dispatch(authActions.login({
      email: '',
      password: '',
    }));
  }

  return (
    <div>
      <Form 
        className = "form"
        name = "Login Page"
        initialValues= {{
          remember: true
        }}
        onFinish = { finishHandler }
        onFinishFailed = { finishFailedHandler }
      >
        <Form.Item 
          className = "form-label"
          label = "Email"
          name = "email"
          rules = {[
            {
              required: true,
              message: 'Please input your email!',
            }
          ]}
        >
          <Input className="form-input"  placeholder="Email"/>
        </Form.Item>

        <Form.Item
          className = "form-label"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password className="form-input" placeholder="Password"/>
        </Form.Item>

        <Form.Item>
            <Checkbox className = "form-left">Remember me</Checkbox>
            <a href = "/" className="form-forgot">Forgot password</a>
            <Button type="primary" block htmlType="submit" className = "form-login-button">
              Log in
            </Button>
            <a href = "/" className = "form-left">register now!</a>
        </Form.Item>
      </Form>

      <h1>Email: {authEmail}</h1>
      <h1>Password: {authPassword}</h1>
    </div>
  );
}

export default InputForm;
