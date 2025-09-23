import React, { useState } from 'react';
import DevBUCk from '../assets/DevBUCk.png';
import './Welcomepage.css';
import AdminLogin from './AdminSignIn';
import CustomerPortal from './CustomerLogin';
import AdminRegister from './AdminSignUp';

function Welcomepage() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showAdminRegister, setShowAdminRegister] = useState(false);

  const handleOpenAdminRegister = () => {
    setShowAdmin(false);
    setShowAdminRegister(true);
  };

  return (
    <div className="homepage">
      {/* Floating coffee beans */}
      <div className="coffee-bean"></div>
      <div className="coffee-bean"></div>
      <div className="coffee-bean"></div>
      <div className="coffee-bean"></div>

      <h1>Welcome to DevBuck</h1>
      <p className="subtitle">Premium Coffee Experience Crafted with Code</p>
       <div className="footer-credit">
        Developed by <span>Devaprakash</span>
      </div>

      <div className="logo-container">
        <img src={DevBUCk} alt="DevBuck Logo" width="200" />
      </div>

      <div className="button-container">
        <button className="admin-btn" onClick={() => setShowAdmin(true)}>
          👨‍💼 Admin Panel
        </button>
        <button className="customer-btn" onClick={() => setShowCustomer(true)}>
          ☕ Customer Portal
        </button>
      </div>

      {/* Modals */}
      {showAdmin && (
        <AdminLogin onClose={() => setShowAdmin(false)} onRegister={handleOpenAdminRegister} />
      )}

      {showCustomer && (
        <CustomerPortal onClose={() => setShowCustomer(false)} />
      )}

      {showAdminRegister && (
        <AdminRegister onClose={() => setShowAdminRegister(false)} />
      )}

      
    </div>
  );
}

export default Welcomepage;
