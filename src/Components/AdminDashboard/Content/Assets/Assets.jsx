import React from 'react';
import { Card } from 'antd';
import data from '../../../../assets/assets.json'
const { Meta } = Card;
const Assets = () => (
    <section className="flexCenter innerWidth  assets">
        {
            data.map((item,i)=>(
               <Card
    hoverable
    key={i}
    style={{
      width: 250,
      outline:'1px solid rgba(128, 128, 128, 0.404)',
      padding:'2px'
      
    }}
    cover={<img alt="example" src={item.image} />}
  >
    <Meta title={item.name} description="www.instagram.com" />
  </Card> 
            ))
            
        }
        
        </section>
  
);
export default Assets;