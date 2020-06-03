import React from 'react';
import './Topbar.css';
export default function Topbar(){
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <a href="/" className="header__logo">
           <span>VxTel</span>
          </a>
        </div> 
      </div>
    </header>
  )
}