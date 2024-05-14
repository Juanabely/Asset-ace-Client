import React, { useContext, useEffect, useState } from 'react';
import NavUser from '../Nav User/NavUser';
import ContentUser from '../Content/ContentUser';
// import { AuthContext } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';

function User() {
  const [isOpen, setIsOpen] = useState(true);
  const { isAuthenticated, logout } = useContext(AuthContext); // Get login and logout from AuthContext
  const navigate = useNavigate();

  // Debugging: Log authentication status
  console.log('Is authenticated:', isAuthenticated);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/form'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, navigate]);

  // Call logout when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     logout(); // Logout the user when leaving the page
  //   };
  // }, [logout]);

  // This function will run when the user leaves the page
  const handleBeforeUnload = async (event) => {
    event.preventDefault();
    // Call your API to delete the active user
    await fetch('http://localhost:3000/active-user', { method: 'DELETE' });
  };

  // If the user is authenticated, add the event listener
  useEffect(() => {
    if (isAuthenticated) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isAuthenticated]);

  // Return JSX if authenticated
  if (isAuthenticated) {
    return (
      <section className="admin">
        <NavUser setIsOpen={setIsOpen} />
        <ContentUser isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
    );
  }

  return null;
}

export default User;
