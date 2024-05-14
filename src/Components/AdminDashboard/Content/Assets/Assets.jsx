import React, { useContext } from 'react';
import { Card } from 'antd';
import { AuthContext } from '../../../AuthProvider';


const { Meta } = Card;
const Assets=(props)=>{
  return(
    <section className="   assets">
        {
            
               <Card
    hoverable
    key={props.id}
    style={{
      width: 270,
      outline:'1px solid rgba(128, 128, 128, 0.404)',
      padding:'2px',
      
      
    }}
    cover={<img alt="example" src={props.image} style={{
      maxHeight:'200px'
    }} />}
  >
    <Meta title={props.name} description="www.instagram.com" />
  </Card> 
            
            
        }
        
        </section>
  
);
} 
export default Assets;