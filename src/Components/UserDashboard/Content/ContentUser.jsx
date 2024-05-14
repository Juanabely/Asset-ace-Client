import React,{useState,useEffect} from 'react'
import './contentuser.css'
import SearchBar2User from './SearchBar2User'
import DropUser from './DropUser'
import { BsFillFilterSquareFill } from "react-icons/bs";
import AssetsUser from './Assets/AssetsUser';
import Footer from '../../Public routes/Footer/Footer'
import OutsideClickHandler from 'react-outside-click-handler'
import EmployeesUser from './Assets/EmployeesUser';


function ContentUser({ isOpen,setIsOpen }) {
const [display,setDisplay]=useState('assets');
const[items,setItems]=useState([])
useEffect(()=>{
    fetch("http://192.168.8.20:3000/wines")
    .then((response)=>response.json())
    .then((data)=>setItems(data))
    .catch((error)=> console.error('error 123',error))
}, []);


  return (
    <section className="content">
       

        <div className="flexCenter innerWidth paddings content-wrapper"> <OutsideClickHandler
  onOutsideClick={(event) => {
    if(document.documentElement.clientWidth > 640){
        setIsOpen(true)
    }
    else{
        if (!['button-black'].includes(event.target.className)) {
        setIsOpen(false);
      }
    }
    
    
  }}
>
  {/* Your content here */}
</OutsideClickHandler>
            {
                isOpen?<div className="flexColCenter content-right rit" >
                <button className="buttonn">user</button>
                <div className="circle"/>
                <span className='span'>user</span>
                <span className='span2'>Refresh profile</span>
                <button className="button-black">Profile</button>
                <button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('assets'); }} >My Assets</button>
<button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('employees'); }}>Assets</button>

                <button className="button-black">Message</button>
                <button className="button-black">Reviews</button>
            </div> : null
            }
            
            
            <div className="flexColCenter content-left">
                <div className="top">
                    {
                        display === 'assets' &&(
                            <>
                            <span className="blueText title">
                        Assets(12)</span>
                            </>
                        )
                    }
                    {
                        display === 'employees' &&(
                            <>
                            <span className="blueText title">
                        Employees({items.length})</span>
                            </>
                        )
                    }
                     <br />
                    <div className="flexCenter search">
                        <div className="left">  <SearchBar2/></div>
                        <div className="right-side"><span>sort By</span>
                        <span/>
                        <Drop/>
                        <button className='button-filter'><BsFillFilterSquareFill /></button></div>
                      
                        
                    </div>
                    
                </div>
                <div className="flexCenter innerWidth bottom">
                    {
                        display === 'assets' && (
                            <div className="asset-display">
                                <Assets/>
                            </div>
                        )
                    }
                    {
                        display === 'employees' && (
                            <div className="asset-display">
                               <Employees/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="content-footer">
            <Footer/>
        </div>
        </div>
       
    </section>
  )
}

export default ContentUser