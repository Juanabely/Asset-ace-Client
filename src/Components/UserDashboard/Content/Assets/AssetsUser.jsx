import React from 'react';
import { Card } from 'antd';
import data from '../../../../assets/assets.json'
const { Meta } = Card;
const AssetsUser = (props) => (
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
    <Meta title={props.name} description={props.condition} />
  </Card> 
           
        
        </section>
  
);
export default AssetsUser;