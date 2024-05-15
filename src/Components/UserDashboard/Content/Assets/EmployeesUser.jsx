import React,{useState,useEffect} from 'react';
import { Card } from 'antd';
const { Meta } = Card;



function EmployeeUser(props){
 
    return (
   
    <>
    

    <section className="assets">
       
               <Card
    hoverable
    key={props.key}
    style={{
      width: 250,
      outline:'1px solid rgba(128, 128, 128, 0.404)',
      padding:'2px'
      
    }}
    cover={<img alt="example" src={props.image} />}
  >
    <Meta title={props.username} description={props.role} />
  </Card> 
            
        
        </section>
        </>
  
    )};
export default EmployeeUser;