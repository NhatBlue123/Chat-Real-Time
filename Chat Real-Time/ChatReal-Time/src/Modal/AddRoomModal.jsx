import React from 'react'
import { Modal,Input,Form } from 'antd'
import { AppContext } from '../Context/AppProvider.jsx'
export default function AddRoomModal() {
  
  const {isAddRoomVisible,setIsAddRoomVisible} = React.useContext(AppContext);  
  
  const [form] = Form.useForm();

  const handleOk = () =>{
    console.log({ formData: form.getFieldValue() })
    setIsAddRoomVisible(false);
  } 
  const handleCancel = () =>{
    setIsAddRoomVisible(false);
  } 

  return (
    <div>
        <Modal title="Create Room" visible={isAddRoomVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form form={form} layout='vertical'>
                <Form.Item label="Room name" name='name'>
                    <Input placeholder='Enter name room'/>
                </Form.Item>
                <Form.Item label="Description" name='description'>
                    <Input.TextArea placeholder='Enter description'/>
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}
