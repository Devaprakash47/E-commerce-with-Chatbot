import DevBUCk from '../assets/DevBUCk.png';
import './Homepage.css';

function Homepage() {
  return (
    
    <div className="homepage">
      {/* Floating coffee beans */}
      
      <div className="coffee-bean"></div>
      <div className="coffee-bean"></div>
      <div className="coffee-bean"></div>
      <div className="coffee-bean"></div>
      
      <h1>Welcome to DevBuck</h1>
      <p className="subtitle">Premium Coffee Experience Crafted with Code</p>
      
      <div className="logo-container">
        <img src={DevBUCk} alt="DevBuck Logo" width="200" />
      </div>
      
      <div className="button-container">
        <button className="admin-btn">
          👨‍💼 Admin Panel
        </button>
        <button className="customer-btn">
          ☕ Customer Portal
        </button>
      </div>
      
      <div className="footer-credit">
        Developed by <span>Devaprakash</span>
      </div>
    </div>
  );
}

export default Homepage;