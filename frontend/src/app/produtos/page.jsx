"use client";

import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-5 p-3 display-5">Produtos</h1>

      <div className="row g-4 justify-content-center">
        {produtos.map((produto) => (
          <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden hover-scale">
              <div className="ratio ratio-1x1">
                <img
                  src={produto.imagem}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                  alt={produto.produto}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center mb-2">
                  {produto.produto}
                </h5>

                <p className="card-text text-muted small flex-grow-1 text-center text-truncate">
                  {produto.descricao}
                </p>

                <div className="d-flex justify-content-center gap-3 mb-2 flex-wrap">
                  <span className="badge bg-dark text-light">{produto.marca}</span>
                  <span className="badge bg-dark text-light">{produto.modelo}</span>
         
                </div>

                <p className="text-center fw-semibold fs-5 text-success mb-3">
                  R$ {Number(produto.preco).toFixed(2)}
                </p>

                <Link
                  href={`/produto/${produto.id}`}
                  className="btn w-100 fw-bold text-center botaovermais"
                  style={{
                    backgroundColor: "#000000",
                    color: "#FF7A30",
                    textDecoration: "none",
                  }}
                >
                  Ver Detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hover-scale:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
