// AuthProvider.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [assets, setAssets] = useState([]);
  const [activeUser, setActiveUser] = useState([]);
  

  const login = () => {
    setIsAuthenticated(true);
  };

  async function deleteUser() {
    const handleConfirm = window.confirm('are you sure you want to log out')
    if (handleConfirm){
      
       try {
      await axios.delete(`http://localhost:3000/active-user/${activeUser[0].id}`);
      console.log('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error.message)
      console.log(activeUser[0].id);
    }
    }
   
  }
  const logout = () => {
    // Remove the active user from the list
    

    // setActiveUser((prevActiveUsers) => {
    //   const updatedActiveUsers = prevActiveUsers.filter(
    //     (user) => user.username !== activeUser.username
    //   );
    //   return updatedActiveUsers;
    // });
  

    deleteUser();
    // You can customize other logout actions (e.g., clear tokens, reset state)
    setIsAuthenticated(false);
    setActiveUser(null)
  };

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
    axios.get('http://localhost:3000/assets')
      .then((response) => setAssets(response.data))
      .catch((error) => console.error('Error fetching assets:', error));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, users, assets, activeUser,setActiveUser }}>
      {children}
    </AuthContext.Provider>
  );
};
