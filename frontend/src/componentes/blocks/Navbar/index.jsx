"use client"

import Link from "next/link";



export default function Navbar() {



  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{backgroundColor: "#000000"  }}

    >
      <div className="container">

        <Link href="/" className="navbar-brand fw-bold" style={{ color: "#E9E3DF" }}>
          EPI Altura
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/produtos" className="nav-link text-light">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre" className="nav-link text-light">
                Sobre
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                href="/login"
                className="btn fw-semibold text-white"
                style={{
                  backgroundColor: "#FF7A30",
                  borderRadius: "8px",
                }}
              >
                Entrar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
