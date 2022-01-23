import React from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import Link from 'next/link';

const AdminNavbar = () => {
  const router = useRouter()

  const Logout = async () => {
    try {
      await axios.delete('https://jamur.herokuapp.com/logout')
      router.push("/")
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link href="/dashboard">
        <a className="navbar-brand ps-3" href="">Mushroom Admin</a>
      </Link>
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
        <i className="fas fa-bars"></i>
      </button>

      <ul className="navbar-nav ms-auto me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><button className="dropdown-item" onClick={Logout}>Logout</button></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default AdminNavbar
