import React,{useState,useEffect} from 'react';
import { Card } from 'antd';
import data from '../../../../assets/assets.json'
const { Meta } = Card;



function EmployeeUser(){


    
    const[items,setItems] = useState([])
    useEffect(()=>{
        fetch("http://192.168.8.20:3000/wines")
        .then((response)=>response.json())
        .then((data)=> setItems(data))
        .catch((error)=>console.error('error',error))
    },[])  
    return (
   
    <>
    

    <section className="flexCenter innerWidth  assets">
        {
            items.map((item,i)=>(
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
        </>
  
    )};
export default EmployeeUser;