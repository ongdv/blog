import React from 'react';
import './home-layout.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PROFILE from 'Assets/img/profile.jpg';

const HomeLayout = () => {
  /* Router */
  const { pathname } = useLocation();
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="home-layout-container">
      <div className="left">
        <div className="profile">
          <div className="profile-img-container">
            <img src={PROFILE} alt="profile" className="profile-img" />
          </div>
          <div className="profile-text">OngDV</div>
          <div className="profile-desc">Development / Photo / Cook</div>
        </div>
        <div className="menu-container">
          <Link to="/" className={`menu-item ${pathname === '/' && 'active'}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`menu-item ${pathname === '/about' && 'active'}`}
          >
            About
          </Link>
          <Link
            to="/blog"
            // className={`menu-item ${pathname.includes('/blog') && 'active'}`}
            className={`menu-item ${pathname === '/blog' && 'active'}`}
          >
            Blog
          </Link>
          <Link
            to="/blog/123"
            className={`menu-item ${pathname.includes('/blog/') && 'active'}`}
          >
            Blog 게시물 예제
          </Link>
        </div>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
