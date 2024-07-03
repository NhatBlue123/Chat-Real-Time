import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { auth, FacebookAuthProvider, db } from '../../firebase/config.js';
import { signInWithPopup } from 'firebase/auth';
import { addDoc, doc, setDoc } from 'firebase/firestore';

const { Title } = Typography;

export default function Login() {
  
  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const { _tokenResponse, user } = await signInWithPopup(auth, provider);
      if (_tokenResponse?.isNewUser) {
        await addDoc('users',{
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          providerId: user.providerData[0].providerId,
        })
        console.log('New user added to Firestore');
      } else {
        console.log('Existing user');
      }
    } catch (error) {
      console.error('Error adding new user to Firestore', error);
    }
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
