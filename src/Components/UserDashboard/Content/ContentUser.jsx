import React,{useState,useEffect, useContext} from 'react'
import './contentuser.css'
import SearchBar2User from './SearchBar2User'
import DropUser from './DropUser'
import { BsFillFilterSquareFill } from "react-icons/bs";
import AssetsUser from './Assets/AssetsUser';
import Footer from '../../Public routes/Footer/Footer'
import OutsideClickHandler from 'react-outside-click-handler'
import EmployeesUser from './Assets/EmployeesUser';
import { AuthContext } from '../../AuthProvider';
import ProfileUserButton from './ProfileUser';





function ContentUser({ isOpen,setIsOpen,activeUser }) {
   const{assets,users} =useContext(AuthContext)
   const [searchQuery, setSearchQuery] = useState('');

   const filteredAssets = assets.filter(item => {
    const searchQueryLowerCase = searchQuery.toString().toLowerCase();
    return (
      
      item.name.toLowerCase().includes(searchQueryLowerCase) ||
      item.condition.toLowerCase().includes(searchQueryLowerCase)
    );
  });
   const filteredUsers = users.filter(items => {
    const searchQueryLowerCase = searchQuery.toString().toLowerCase();
    return (
      
     
      items.role.toLowerCase().includes(searchQueryLowerCase)
    );
  });
  
    const assetUserComponent= filteredAssets.map((item,i)=>(
        <AssetsUser
        name={item.name}
        image={item.image}
        condition={item.condition}
        key={i}
        />
    ))
    const employeeUserComponent= filteredUsers.map((item,i)=>(
        <EmployeesUser
        username={item.username}
        image={item.image}
        role={item.role}
        key={i}
        />
    ))
   const profileUserButton = (
    <ProfileUserButton
    name={activeUser.userName}
    email={activeUser.email}
    role ={activeUser.role}
    />
   )

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
  
</OutsideClickHandler>

            {
                isOpen?<div className="flexColCenter content-right rit" >
                <button className="buttonn">{activeUser.role}</button>
                <div className="circle"><img src={activeUser.image} alt="" /></div>
                <span className='span'>{activeUser.userName}</span>
                <span className='span2'>Refresh profile</span>
                {profileUserButton}
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
                        Assets({filteredAssets.length})</span>
                            </>
                        )
                    }
                    {
                        display === 'employees' &&(
                            <>
                            <span className="blueText title">
                        Employees({filteredUsers.length})</span>
                            </>
                        )
                    }
                     <br />
                    <div className="flexCenter search">
                        <div className="left">  <SearchBar2User
                        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                        /></div>
                        <div className="right-side"><span>sort By</span>
                        <span/>
                        <DropUser/>
                        <button className='button-filter'><BsFillFilterSquareFill /></button></div>
                      
                        
                    </div>
                    
                </div>
                
                <div className="flexCenter innerWidth bottom">
                    {
                        display === 'assets' && (
                            <div className="flexCenter asset-display">
                                {assetUserComponent}
                            </div>
                        )
                    }
                    {
                        display === 'employees' && (
                            <div className="flexCenter innerWidth asset-display">
                               {employeeUserComponent}
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