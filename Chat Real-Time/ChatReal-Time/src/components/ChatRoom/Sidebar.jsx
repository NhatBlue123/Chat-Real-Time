import { Row,Col } from 'antd'
import React from 'react'
import UserInfor from './UserInfor'
import ListRoom from './ListRoom'
import styled from 'styled-components'

const SidebarStyled = styled.div`
  background: #3f0e40;
  color: white;
  height: 100vh; 
`;

export default function Sidebar() {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfor></UserInfor>
        </Col>
        <Col span={24}>
          <ListRoom></ListRoom>
        </Col>
    </Row>
    </SidebarStyled>
  )
}
