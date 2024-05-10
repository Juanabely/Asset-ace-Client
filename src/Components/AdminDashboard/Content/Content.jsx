import React,{useState} from 'react'
import './content.css'
import SearchBar2 from './SearchBar2'
import Drop from './Drop'
import { BsFillFilterSquareFill } from "react-icons/bs";
import Assets from './Assets/Assets';
import Footer from '../../Footer/Footer'
import OutsideClickHandler from 'react-outside-click-handler'


function Content({ isOpen,setIsOpen }) {
const [display,setDisplay]=useState('assets');


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
                <button className="buttonn">Admin</button>
                <div className="circle"/>
                <span className='span'>Admin</span>
                <span className='span2'>Refresh profile</span>
                <button className="button-black">Profile</button>
                <button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('assets'); }} >Assets</button>
<button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('employees'); }}>Employees</button>

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
                        Employees(52)</span>
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
                </div>
            </div>
            <div className="content-footer">
            <Footer/>
        </div>
        </div>
       
    </section>
  )
}

export default Content