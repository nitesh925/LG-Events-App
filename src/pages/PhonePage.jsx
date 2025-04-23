// PhonePage.jsx
import { useState } from 'react';
import '../styles/PhonePage.css';

function PhonePage() {
  const [phone, setPhone] = useState('');
  const [showBox, setShowBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll contact you at ${phone}`);
  };

  return (
    <div className="phone-body" onClick={() => setShowBox(true)}>
      <div className={`box ${showBox ? 'hovered' : ''}`}>
        <div className="login">
          <div className="loginBx">
            <h2>
              <i className="fa-solid fa-right-to-bracket"></i>
              Enter Phone
              <i className="fa-solid fa-heart"></i>
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input type="submit" value="Submit" />
            </form>
            <div className="group">
              <a href="#" onClick={() => window.history.back()}>Back</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonePage;