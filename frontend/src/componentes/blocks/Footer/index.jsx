"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3  f"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container">
        <div className="row gy-4 justify-content-center">
     
    

          <div className="col-12 col-md-3 ">
            <h5 className="fw-bold" style={{ color: "#FF7A30" }}>
              Navegação
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-decoration-none" style={{ color: "#E9E3DF" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-decoration-none" style={{ color: "#E9E3DF" }}>
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-decoration-none" style={{ color: "#E9E3DF" }}>
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/contato" className="nav-link text-light">
               Contato
              </Link>
            </li>
            
            </ul>
          </div>      
          
          <div className="col-12 col-md-3">
            <h5 className="fw-bold" style={{ color: "#FF7A30" }}>
              Sobre
            </h5>
            <p className="small fw-bold" style={{ color: "#E9E3DF" }}>
              Somos especialistas em Equipamentos de Proteção Individual (EPIs)
              para trabalhos em altura. Garantimos qualidade, segurança e confiança.
            </p>
          </div>
          <div className="col-12 col-md-3 text-center">
          <h5 className="fw-bold" style={{ color: "#FF7A30" }}>
              Redes Sociais
            </h5>
            <div className="">
              <a href="#" className="me-3" style={{ color: "#FF7A30" }}>
                <i className="bi bi-facebook fs-3"></i>
              </a>
              <a href="#" className="me-3" style={{ color: "#FF7A30" }}>
                <i className="bi bi-instagram fs-3"></i>
              </a>
              <a href="#" style={{ color: "#FF7A30" }}>
                <i className="bi bi-linkedin fs-3"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="fw-bold" style={{ color: "#FF7A30" }}>
              Contato
            </h5>
            <p className="small mb-1" style={{ color: "#E9E3DF" }}>
              <strong>Email:</strong> contato@epialtura.com.br
            </p>
            <p className="small mb-3" style={{ color: "#E9E3DF" }}>
              <strong>Telefone:</strong> +55 (11) 99999-9999
            </p>
       
          </div>
        </div>

        <hr className="mt-4" style={{ borderColor: "#465C88" }} />

        <div className="text-center small mt-3" style={{ color: "#E9E3DF" }}>
          © {new Date().getFullYear()} <span style={{ color: "#FF7A30" }}>EPI Altura</span>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
