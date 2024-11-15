import React, { useState } from 'react';
import '../css/Sidebar.css';
import logo from '../../assets/Logo/logo1.png';

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <nav>
        <ul className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
          <li onClick={hideSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li><a href="/">Accueil</a></li>
          <li>
            <a href="#" onClick={toggleDropdown} className="dropdown-toggle" role="button">
            Catégories
            </a>
            <ul className='dropdown'>
              <li><a href="/Salon">Salon</a></li>
              <li><a href="/Bureau">Bureau</a></li>
              <li><a href="/Cuisine">Cuisine</a></li>
            </ul>
          </li>
         
        </ul>
        <ul>
          <li>
            <div className="logo-container">
              <h5 style={{ marginTop:'10px', color: '#fff' }}>MDF</h5>
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </div>
          </li>
          
          <li className='hideOnMobile'><a href="/">Accueil</a></li>
          <li className='hideOnMobile'>
            <a href="#" onClick={toggleDropdown} className="dropdown-toggle" role="button">
              Catégories
            </a>
            <ul className='dropdown'>
              <li><a href="/Salon">Salon</a></li>
              <li><a href='/Bureau'>Bureau</a></li>
              <li><a href="/Cuisine">Cuisine</a></li>
            </ul>
          </li>
          <li className='menu-button' onClick={showSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
