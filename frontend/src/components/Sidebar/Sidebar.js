import React, { useState } from 'react';
import { FaBars, FaTh, FaClone, FaSitemap, FaTable, FaFileAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/AboutCricket',
      name: 'AboutCricket',
      icon: <FaTh />,
    },
    {
      path: '/AboutICC',
      name: 'AboutICC',
      icon: <FaClone />,
    },
    {
      path: '/AboutPlayers',
      name: 'AboutPlayers',
      icon: <FaSitemap />,
    },
    {
      path: '/AboutWinners',
      name: 'AboutWinners',
      icon: <FaTable />,
    },
    {
      path: '/Audienceform',
      name: 'Audienceform',
      icon: <FaFileAlt />,
    },
  ];

  return (
	<Router>
    <div className="container">
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
	</Router>
  );
};

export default Sidebar;
