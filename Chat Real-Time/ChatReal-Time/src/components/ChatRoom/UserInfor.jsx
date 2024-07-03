import React, { useState, useEffect } from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { auth, db } from '../../firebase/config.js';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { AuthContext } from '../../Context/AuthProvider.jsx';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfor() {
  const [user, setUser] = useState(null);

  const data = React.useContext(AuthContext);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userQuery = query(collection(db, 'users'), where('uid', '==', user.uid));
      const unsubscribe = onSnapshot(userQuery, (snapshot) => {
        const userData = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))[0];
        setUser(userData);
      });

      return () => unsubscribe();
    }
  }, []);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={user?.photoURL}>{user?.displayName?.charAt(0)}</Avatar>
        <Typography.Text className='username'>{user?.displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>Log out</Button>
    </WrapperStyled>
  );
}
