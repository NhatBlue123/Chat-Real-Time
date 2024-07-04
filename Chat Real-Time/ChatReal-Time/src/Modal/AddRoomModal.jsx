import React from 'react';
import { Modal, Input, Form } from 'antd';
import { AppContext } from '../Context/AppProvider.jsx';
import { addDoc } from '../firebase/services.js';
import { AuthContext } from '../Context/AuthProvider.jsx';

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = React.useContext(AppContext);
  const { user: { uid } } = React.useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = async () => {
    const formData = form.getFieldValue();
    console.log({ formData });

    await addDoc('rooms', { ...formData, members: [uid] });

    setIsAddRoomVisible(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsAddRoomVisible(false);
    form.resetFields();
  };

  return (
    <Modal title="Create Room" visible={isAddRoomVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form} layout='vertical'>
        <Form.Item label="Room name" name='name' rules={[{ required: true, message: 'Please enter the room name' }]}>
          <Input placeholder='Enter name room' />
        </Form.Item>
        <Form.Item label="Description" name='description'>
          <Input.TextArea placeholder='Enter description' />
        </Form.Item>
      </Form>
    </Modal>
  );
}
