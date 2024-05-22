import React, { useContext,useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Checkbox, Form, Input,Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Password from 'antd/es/input/Password';
import { AuthContext } from '../AuthProvider'; // Import the AuthContext
import swal from 'sweetalert';
import { Spin } from 'antd';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  status: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const { login ,activeUser,setActiveUser,token,setToken,fetchAssets,fetchUsers,requests } = useContext(AuthContext); // Use the login function from the AuthContext
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const { from } = location.state || { from: { pathname: "/admin" } };
  const fromProtectedRoute = location.state?.fromProtectedRoute || false;

  const formik = useFormik({
    initialValues: {
      username: '',
      status:'',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Send a POST request to the authentication API
        const response = await fetch('https://server-asset-ace-1.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Send form values to the server
        });
    
        // Check if the request was successful
        if (!response.ok) {
          console.log(JSON.stringify(values))
          throw new Error('Authentication failed');
        }
    
        // Parse the response data
        const data = await response.json();
    
        // Store the user data and token
        setActiveUser(data.user);
        localStorage.setItem('token', data.token);
        setToken(data.token)
    
        // Log in the user and redirect them to the appropriate page
        login();
        swal({
          title: "Login!",
          text: "Logged in succesfully!",
          icon: "success",
          button: "Get started!",
        });
        fetchAssets()
        fetchUsers()
        console.log(data.user)
        
        
        console.log(requests)
        if (data.user.role === 'Manager' || data.user.role === 'projectManager') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } catch (error) {
        console.error('Authentication failed:', error);
      }
      setLoading(false)
    },
    
  });

  return (
    <section className="flexCenter innerWidth paddings formik">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 690,height:690,fontWeight:600 ,overflow:'hidden'}}
        initialValues={{ remember: true }}
        onFinish={formik.handleSubmit}
        onFinishFailed={formik.handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
          style={{marginLeft:'90px',marginTop:'65px',borderRadius:'30px'}}
        >
          <Input
            name="username"
            type="string"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{borderRadius:'5px'}}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </Form.Item>
        <Form.Item
          label="status"
          name="status"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
          style={{marginLeft:'90px',marginTop:'0px',borderRadius:'30px'}}
        >
          <Input
            name="status"
            type="string"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{borderRadius:'5px'}}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          style={{marginLeft:'90px'}}
        >
          <Password
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{borderRadius:'5px'}}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={loading}>
  {loading ? <Spin /> : 'Submit'}
</Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Login;
