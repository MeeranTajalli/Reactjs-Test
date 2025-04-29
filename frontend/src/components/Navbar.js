import React from 'react';
import logo from '../assets/logo.png';
import { Bell } from 'react-bootstrap-icons';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="BxLend" className="logo-image" />
        </a>

        {/* toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* collapsible menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#">Market</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Trade</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
          </ul>
          <div className="navbar-actions d-flex align-items-center">
            <a className="nav-link nav-action-link" href="#">Wallet</a>
            <a className="nav-link nav-action-link" href="#">Orders</a>
            <Bell size={20} className="bell-icon" />
            <img src="https://i.pravatar.cc/30" className="rounded-circle user-avatar" alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
