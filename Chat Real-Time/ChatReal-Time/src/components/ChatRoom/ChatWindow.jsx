import React from "react";
import styled from "styled-components";
import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip, Form, Input } from "antd";
import Message from "./Message.jsx";
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;
 
const FormStyled = styled(Form)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2px 2px 2px 0;
border: 1px solid rgb(230, 230, 230);
border-radius: 2px;

.ant-form-item {
  flex: 1;
  margin-bottom: 0;
}
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const MessageListStyles = styled.div`
  max-height: 100%;
  overflow-y: auto; 
`;
export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header_info">
          <p className="header_title">Room 1</p>
          <span className="header_description">This is room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Invite
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyles>
          <Message
            text="Test"
            photoURL={null}
            displayName="Nhat"
            createAt={11122}
          ></Message>
          <Message
            text="Test"
            photoURL={null}
            displayName="Nhat"
            createAt={11122}
          ></Message>
          <Message
            text="Test"
            photoURL={null}
            displayName="Nhat"
            createAt={11122}
          ></Message>
          <Message
            text="Test"
            photoURL={null}
            displayName="Nhat"
            createAt={11122}
          ></Message>
          
        </MessageListStyles>
        <FormStyled>
          <Form.Item>
            <Input placeholder="Enter a message" bordered={false} autoComplete="off" />
          </Form.Item>
          <Button type="primary">Send</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
