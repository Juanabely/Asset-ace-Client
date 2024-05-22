// AuthProvider.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [assets, setAssets] = useState([]);
  const [activeUser, setActiveUser] = useState([]);
  const [requests,setRequests] =useState([])
  const [messages,setMessages] = useState([])
  const[token,setToken] =useState([])
   

  const baseurl = "https://cors-anywhere.herokuapp.com/https://server-asset-ace-1.onrender.com/";

  const login = () => {
    setIsAuthenticated(true);
  };

 
  const logout = () => {
    deleteUser();
    // You can customize other logout actions (e.g., clear tokens, reset state)
    setIsAuthenticated(false);
    setActiveUser(null)
  };

  const fetchRequests = () => {
    axios.get(`${baseurl}requests`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => setRequests(response.data))
      .catch((error) => console.error('Error fetching requests:', error));
  };


  const fetchMessages = () => {
    axios.get(`${baseurl}requests`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
       const filteredMessages = response.data.filter(message => message.asset.id === activeUser.id);
       setMessages(filteredMessages);
     })
    .catch((error) => console.error('Error fetching messages:', error));
  };
  const fetchAssets = () => {
    axios.get(`${baseurl}assets`,{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => setAssets(response.data))
    .catch((error) => console.error('Error fetching assets:', error));
  };
  const fetchUsers = () => {
    axios.get(`${baseurl}/employees`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => setUsers(response.data))
    .catch((error) => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    // Fetch users and assets as before
    fetchRequests(); // Call fetchRequests to fetch the requests
  }, []);



  useEffect(() => {
    fetchMessages()
    
  }, [activeUser.id]); // Added activeUser.id as a dependency
   

  useEffect(() => {
    fetchAssets()
    
  }, []);
  useEffect(() => {
    fetchUsers()
    
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, users,fetchUsers, assets, requests, activeUser,setActiveUser,fetchRequests,messages,fetchMessages,token,setToken,fetchAssets }}>
      {children}
    </AuthContext.Provider>
  );
};
