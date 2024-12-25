import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid position-relative">
      <a className="navbar-brand me-16" href="#">
        <img
          className="img-fluid"
          src="https://shuffle.dev/vendia-assets/logos/vendia.svg"
          alt=""
        />
      </a>
      <div className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-primary" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
            Femme
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="d-none d-lg-block">
        <a className="d-inline-block" href="#">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5H2.16667L2.5 2.16667M3.83333 8.83333H12.1667L15.5 2.16667H2.5M3.83333 8.83333L2.5 2.16667M3.83333 8.83333L1.92259 10.7441C1.39762 11.269 1.76942 12.1667 2.51184 12.1667H12.1667M12.1667 12.1667C11.2462 12.1667 10.5 12.9129 10.5 13.8333C10.5 14.7538 11.2462 15.5 12.1667 15.5C13.0871 15.5 13.8333 14.7538 13.8333 13.8333C13.8333 12.9129 13.0871 12.1667 12.1667 12.1667ZM5.5 13.8333C5.5 14.7538 4.75381 15.5 3.83333 15.5C2.91286 15.5 2.16667 14.7538 2.16667 13.8333C2.16667 12.9129 2.91286 12.1667 3.83333 12.1667C4.75381 12.1667 5.5 12.9129 5.5 13.8333Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="d-lg-none">
        <button className="btn btn-primary d-flex align-items-center px-2 py-1 navbar-burger">
          <svg viewBox="0 0 100 45" width={26} height={20}>
            <rect width={100} height={6} />
            <rect y={18} width={100} height={6} />
            <rect y={38} width={100} height={6} />
          </svg>
        </button>
      </div>
    </div>
  </nav>



  )
}

export default Header