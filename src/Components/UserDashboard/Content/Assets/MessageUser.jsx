import React, { useContext, useState,useEffect } from 'react';
import { Card } from 'antd';
import { AuthContext } from '../../../AuthProvider';


const MessageUser = (props) => {
    const{messages,fetchMessages,activeUser} =useContext(AuthContext)
    useEffect(() => {
        // This effect will run whenever the `messages` state changes
       
         fetchMessages
        // You can call fetchMessages here if you need to fetch the latest messages from the backend
        // fetchMessages();
      }, [messages]);
  return (
    <section className="messa" style={{
      border: '0.2px solid grey',
      backgroundColor: 'blue',
      borderRadius: '10px'
    }}>
      <Card
        title={'Request'}
        bordered={false}
        key={props.id}
        style={{
          width: 500,
          height: 300,
          background: 'aliceblue'
        }}
      >
        <p className='orangeText' >Request asset info .....</p>
        <p> {activeUser.requests[0].status}</p>
       

        <div className="buttons">
        <button className="buttonn">Accept</button>
      </div>
      </Card>
    </section>
  );
};

export default MessageUser;
