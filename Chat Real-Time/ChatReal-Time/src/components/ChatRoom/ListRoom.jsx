import React from 'react';
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import useFireStore from '../../hooks/useFireStore';
import { AuthContext } from '../../Context/AuthProvider';
import { AppContext } from '../../Context/AppProvider.jsx';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function ListRoom() {
  // const { user } = React.useContext(AuthContext);
  // const { uid } = user;

  // const roomsConditions = React.useMemo(() => ({
  //   fieldName: 'members',
  //   operator: 'array-contains',
  //   compareValue: uid
  // }), [uid]);

  const {rooms, setIsAddRoomVisible, setSelectedRoomId} = React.useContext(AppContext);

  const handleAddRoom = () =>{
    setIsAddRoomVisible(true);
  }

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="List of rooms" key="1">
        {
          rooms.map(room => <LinkStyled key={room.id} onClick={()=>setSelectedRoomId(room.id)}>{room.name}</LinkStyled>)
        }
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room" onClick={handleAddRoom} >Add room</Button>
      </PanelStyled>
    </Collapse>
  );
}
