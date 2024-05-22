import React,{useState,useContext, useEffect} from 'react'
import './content.css'
import SearchBar2 from './SearchBar2'
import Drop from './Drop'
import { BsFillFilterSquareFill } from "react-icons/bs";
import Assets from './Assets/Assets';
import Footer from '../../Public routes/Footer/Footer'
import OutsideClickHandler from 'react-outside-click-handler'
import Employees from './Assets/Employees';
import { AuthContext } from '../../AuthProvider';
import Profile from './Profile';
import Message from './Assets/Message';
import axios from 'axios';
import { Spin } from 'antd';




function Content({ isOpen,setIsOpen }) {


const [display,setDisplay]=useState('assets');
const {activeUser, assets,users,requests,setRequests,fetchRequests} = useContext(AuthContext);
const [searchQuery, setSearchQuery] = useState('');
const [loading, setLoading] = useState(false);


const manager={
  display : activeUser.role === 'Manager' ? 'none' : ''
}
const Pmanager={
  display : activeUser.role === 'projectManager' ? 'none' : ''
}

// Inside Content component
const handleAccept = async (itemId) => {
    try {
        // Validate form fields
        setLoading(true)
        const response = await fetch(`http://127.0.0.1:5000/requests/${itemId}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ status: 'approved' }), // Update the status to 'accepted'
        });
    
        if (!response.ok) {
          setLoading(false)
          swal({
            title: "Failed!",
            text: "Request already updated!",
            icon: "error",
            button: "OK!",
          })
          throw new Error('Failed to update request status');
          
        }
  
        console.log('Message sent successfully');
        swal({
          title: "Sent!",
          text: "Your message has been successfully sent!",
          icon: "success",
          button: "OK!",
        });


      const deleteResponse = await axios.delete(`http://localhost:3000/requests/${itemId}`);
      fetchRequests()
      if (!deleteResponse.ok) {
        throw new Error('Failed to delete request');
      }
      
  
      // Refresh the requests list
      fetchRequests();
    } catch (error) {
      console.error('Request acceptance and deletion failed:', error);
      // Handle error, e.g., show a notification to the user
    }
  };
const handlePending = async (itemId) => {
    try {
        // Validate form fields
        setLoading(true)
        const response = await fetch(`http://127.0.0.1:5000/requests/${itemId}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ status: 'pending' }), // Update the status to 'accepted'
        });
    
        if (!response.ok) {
          setLoading(false)
          swal({
            title: "Failed!",
            text: "Request already updated!",
            icon: "error",
            button: "OK!",
          })
          throw new Error('Failed to update request status');
          
        }
  
        console.log('Message sent successfully');
        swal({
          title: "Sent!",
          text: "Your message has been successfully sent!",
          icon: "success",
          button: "OK!",
        });


      // const deleteResponse = await axios.delete(`http://localhost:3000/requests/${itemId}`);
      // fetchRequests()
      // if (!deleteResponse.ok) {
      //   throw new Error('Failed to delete request');
      // }
      
  
      // Refresh the requests list
      fetchRequests();
    } catch (error) {
      console.error('Request acceptance and deletion failed:', error);
      // Handle error, e.g., show a notification to the user
    }
  };
const handleDecline = async (itemId) => {
    try {
        // Validate form fields
        setLoading(true)
        const response = await fetch(`http://127.0.0.1:5000/requests/${itemId}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ status: 'rejected' }), // Update the status to 'accepted'
        });
    
        if (!response.ok) {
          setLoading(false)
          swal({
            title: "Failed!",
            text: "Request already updated!",
            icon: "error",
            button: "OK!",
          })
          throw new Error('Failed to update request status');
          
        }
  
        console.log('Message sent successfully');
        swal({
          title: "Sent!",
          text: "Your message has been successfully sent!",
          icon: "success",
          button: "OK!",
        });


      // const deleteResponse = await axios.delete(`http://localhost:3000/requests/${itemId}`);
      // fetchRequests()
      // if (!deleteResponse.ok) {
      //   throw new Error('Failed to delete request');
      // }
      
  
      // Refresh the requests list
      fetchRequests();
    } catch (error) {
      console.error('Request acceptance and deletion failed:', error);
      // Handle error, e.g., show a notification to the user
    }
  };
  
  

const filteredAssets = assets.filter(item => {
    const searchQueryLowerCase = searchQuery.toString().toLowerCase();
    if(item){return (
      
      item.name.toLowerCase().includes(searchQueryLowerCase) ||
      item.condition.toLowerCase().includes(searchQueryLowerCase)
    );}
    
  });


   const filteredUsers = users.filter(items => {
    const searchQueryLowerCase = searchQuery.toString().toLowerCase();
    return (
      
     
      items.role.toLowerCase().includes(searchQueryLowerCase)
    );
  });
  
   const filteredRequests = requests.filter(items => {
    if (requests.length>0){ 
        const searchQueryLowerCase = searchQuery.toString().toLowerCase();
    
        return (
      items.urgency.toLowerCase().includes(searchQueryLowerCase)
    );}
   
    
  });
  
    const assetComponent= filteredAssets.map((item,i)=>(
        <Assets
        name={item.name}
        image={item.image_url}
        condition={item.condition}
        number={item.number}
        dispursed={item.dispursed}
        key={i}
        />
    ))
    const employeeComponent= filteredUsers.map((item,i)=>(
        <Employees
        username={item.username}
        image={item.profile_picture}
        role={item.role}
        key={i}
        />
    ))
    const messageComponent= filteredRequests.map((item,i)=>(
        <Message
        username={item.username}
        description={item.description}
        priority={item.priority}
        department={item.department}
        previouslyOwned={item.previouslyOwned}
        dateRequired={item.dateRequired}
        reason={item.reason}
        quantity={item.quantity}
        id={item.id}
        key={i}
        onAccept={handleAccept}
        onPending={handlePending}
        onDecline={handleDecline}
        loading={loading}
       
        />
    ))
    
    const buttonComponent = (
        <Profile
        name={activeUser.userName}
        email={activeUser.email}
        role ={activeUser.role}
        />
       )


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
                <button className="buttonn">{activeUser.role}</button>
                <div className="circle"><img src={activeUser.profile_picture} alt="profile" /></div>
                
                <span className='span'>Admin</span>
                <span className='span2'>Refresh profile</span>
                <div>{buttonComponent}</div>
                <button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('assets'); }} >Assets</button>
                <button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('employees'); }}>Employees</button>

                <button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('message');fetchRequests() }} style={manager}>Message</button>
                <button className="button-black" onClick={(event) => { event.stopPropagation(); setDisplay('adduser');fetchRequests() }} style={Pmanager}>Add assets</button>
            </div> : null
            }
            
            
            <div className="flexColCenter content-left">
                <div className="top">
                    {
                        display === 'assets' &&(
                            <>
                            <span className="blueText title">
                        Assets({assets.length})</span>
                            </>
                        )
                    }
                    {
                        display === 'employees' &&(
                            <>
                            <span className="blueText title">
                        Employees({users.length})</span>
                            </>
                        )
                    }
                    {
                        display === 'message' &&(
                            <>
                            <span className="blueText title">
                        Messages({requests.length})</span>
                            </>
                        )
                    }
                     <br />
                    <div className="flexCenter search">
                        <div className="left">  <SearchBar2
                        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                        /></div>
                        <div className="right-side"><span>sort By</span>
                        <span/>
                        <Drop/>
                        <button className='button-filter'><BsFillFilterSquareFill /></button></div>
                      
                        
                    </div>
                    
                </div>
                <div className="flexCenter innerWidth bottom">
                    {
                        display === 'assets' && (
                            <div className="innerWidth flexCenter asset-display">
                                {assetComponent}
                            </div>
                        )
                    }
                    {
                        display === 'employees' && (
                            <div className="innerWidth flexCenter asset-display">
                               {employeeComponent}
                            </div>
                        )
                    }
                    {
                        display === 'message' && (
                            requests.length > 0 ?(<div className="innerWidth flexCenter asset-display">
                               {messageComponent}
                            </div>):( <div className="empty">
                              <div className="message-empty"><p className='orangeText' >No requests available.</p></div>
                              <div className="img-empty"><img src="./public/empty.svg" alt="" /></div>
                            </div> )
                            
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