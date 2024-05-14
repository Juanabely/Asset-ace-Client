import React, { useContext, useEffect, useState } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import Content from '../Content/Content';
import { AuthContext } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [isOpen, setIsOpen] = useState(true);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/form');
    }
    setLoading(false); // Mark loading as complete
  }, [isAuthenticated, navigate]);

  // Call logout when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     logout();
  //   };
  // }, [logout]);

  // This function will run when the user leaves the page
  // const handleBeforeUnload = async (event) => {
  //   event.preventDefault();
  //   // Call your API to delete the active user
  //   await fetch('http://localhost:3000/active-user', { method: 'DELETE' });
  // };

  // // If the user is authenticated, add the event listener
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     window.addEventListener('beforeunload', handleBeforeUnload);
  //   }

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, [isAuthenticated]);

  // Render only if authentication status is known
  if (loading) {
    return null; // Render nothing while loading
  }
  

  return (
    <section className="admin">
      <NavAdmin setIsOpen={setIsOpen} />
      <Content isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default Admin;
