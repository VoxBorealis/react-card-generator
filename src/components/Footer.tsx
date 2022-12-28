import React from 'react';
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <div>
        <footer className="Footer">
            <div className="Footer-content">
                <p>Copyright 2022</p>
                <ul>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                </ul>
            </div>
        </footer>
    </div>
    
  );
};

export default Footer