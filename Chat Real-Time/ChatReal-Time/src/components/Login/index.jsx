
import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { auth, FacebookAuthProvider } from '../../firebase/config.js';
import { signInWithPopup } from 'firebase/auth';

const { Title } = Typography;

export default function Login() {
  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'Center' }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: '100%', marginBottom: 5 }}>
            Login by Google
          </Button>
          <Button style={{ width: '100%' }} onClick={handleFacebookLogin}>
            Login by Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
