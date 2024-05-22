import React,{useContext, useState} from 'react'
import SearchBar from './Search'
import { BellOutlined,BgColorsOutlined } from '@ant-design/icons'
import { CgProfile } from "react-icons/cg";
import { MenuFoldOutlined } from '@ant-design/icons';


import 'materialize-css/dist/css/materialize.min.css';
import './navadmin.css'
import AddUserButton from './AddUserButton';
import { message } from 'antd';


function NavAdmin({setIsOpen,requests,activeUser}) {
  const bellStyle = {
    color: requests.length > 0 ? 'blue' : 'black',
    display: activeUser.role === 'Manager' ? 'none' : ''
  };
  // const Manager ={
    
  // }
 
  return (
    <section className="nav-admin">
        <nav>
    <div class="nav-wrapper white">
   
      <a href="#!" class="brand-logo">
        
      <img src="./logo.svg" alt="" /> 
      <span className='asset-ace'>Asset-Ace</span> 
      <i class="material-icons"><span className='menu' onClick={()=>setIsOpen((prev)=>!prev)}> <MenuFoldOutlined /></span></i>
       </a>
      
      <ul class="right hide-on-med-and-down">
        <li><SearchBar/></li>
        {/* <li><a href="Text" style={{
            fontSize:'20px',
            margin:'0 20px 0 0'
        }}>Add asset</a></li> */}
        <li><a href=""><BgColorsOutlined style={{
            fontSize:'22px'
        }}/></a></li>
        <li><a><i className="material-icons" style={bellStyle} ><BellOutlined style={bellStyle}/>{requests.length}</i></a></li>
        
    
      </ul>
     <div className='flexCenter adduser'> <AddUserButton/></div>
    </div>
  </nav>
    </section>
  )
}

export default NavAdmin