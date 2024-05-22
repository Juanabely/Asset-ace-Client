import React, { useContext, useState } from 'react';
import { Card, Modal, Form, Input, Button } from 'antd';
import { AuthContext } from '../../../AuthProvider';
import { InputNumber } from 'antd';
import { Checkbox } from 'antd';
import { Spin } from 'antd';


const { Meta } = Card;

const AssetsUser = (props) => {
  const{activeUser} = useContext(AuthContext)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [form] = Form.useForm();
  const{token} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  const [loadingb, setLoadingb] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showRequestModal = () => {
    setIsRequestModalVisible(true);
  };

  const handleRequestOk = async () => {
    setLoadingb(true)
    try {
      const values = await form.validateFields(); // Validate form fields
      const response = await fetch(' http://127.0.0.1:5000/requests', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({employee_id:`${activeUser.id}`,asset_id:`${props.id}`,...values}), // Send form values to the server
      });
       console.log(activeUser)
       console.log(props.id)
       console.log(values)
      if (!response.ok) {
        throw new Error('Failed to request asset');
      }

      console.log('Asset requested successfully');
      console.log(activeUser)
      
      swal({
        title: "Asset request sent!",
        text: "Your request has been successfully sent!",
        icon: "success",
        button: "OK!",
      });

      form.resetFields();
      setIsRequestModalVisible(false);
      setIsModalVisible(false); // Close the modal
    } catch (error) {
      console.error('Requesting asset failed:', error);
      swal({
        title: "Asset request Failed!",
        text: "Requesting asset failed. Please retry after a few seconds.",
        icon: "error",
        button: "OK!",
      });
    }
  };

  const handleRequestCancel = () => {
    setLoading(false)
    setIsRequestModalVisible(false);

  };

  return (
    <section className="assets">
      <Card
        hoverable
        key={props.id}
        style={{
          width: 270,
          outline: '1px solid rgba(128, 128, 128, 0.404)',
          padding: '2px',
        }}
        cover={
          <>
            {loading && <Spin />}
            <img
              alt="example"
              src={props.image}
              style={{ maxHeight: '200px', display: loading ? 'none' : 'block' }}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </>
        }
        onClick={showModal}
      >
        <Meta title={props.name} description={props.condition} />
      </Card>

      <Modal title={props.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
      <p>Details for <span className='orangeText'>{props.name}</span> </p>
        <p>{props.name} are {props.number} in total</p>
        <p>The Asset is in a <span className="orangeText">{props.condition}</span>  condition</p>
        <p>Dispursion of this asset is <span className="orangeText">{props.dispursed}</span> </p>
        <Button type="primary" onClick={showRequestModal} disabled={loading}>{loadingb ? <Spin /> : 'Request asset'}</Button>
      </Modal>

      <Modal title="Request Asset" visible={isRequestModalVisible} onOk={handleRequestOk} onCancel={handleRequestCancel}>
        <Form form={form} layout="vertical">
          <Form.Item name="urgency" label="urgency" rules={[{ required: true, message: 'Please input the urgency!' }]}>
            <Input placeholder="Enter urgency" />
          </Form.Item>
          <Form.Item name="reason" label="reason" rules={[{ required: true, message: 'Please input the reason!' }]}>
            <Input placeholder="Enter reason" />
          </Form.Item>
          <Form.Item name="quantity" valuePropName="checked">
           <InputNumber placeholder='Enter number' />
</Form.Item>
        </Form>
      </Modal>
    </section>
  );
};

export default AssetsUser;
