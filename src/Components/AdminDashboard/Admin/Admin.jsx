import React, { useContext, useEffect, useState } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import Content from '../Content/Content';
import { AuthContext } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [isOpen, setIsOpen] = useState(true);
  const { isAuthenticated, logout, requests, fetchRequests ,activeUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/form');
    }
    setLoading(false); // Mark loading as complete
  }, [isAuthenticated, navigate]);

   useEffect(() => {
    // This effect will run whenever the `messages` state changes
  
    fetchRequests
    // You can call fetchMessages here if you need to fetch the latest messages from the backend
    // fetchMessages();
  }, [requests]);

  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <section className="admin">
      <NavAdmin setIsOpen={setIsOpen} requests={requests} activeUser ={activeUser} />
      <Content isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default Admin;
