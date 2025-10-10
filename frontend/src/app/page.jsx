"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default async function Home() {
  const produtos = await (await fetch("http://localhost:3000/produtos")).json();
  console.log(produtos);

  return (
    <>
<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner " >
    <div className="carousel-item active">
      <img src="/imagens/Banner.png" className="d-block w-100" alt="..." style={{ objectFit: 'cover',
        maxHeight: "600px"
       }}
      />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {produtos.map((produto) => (
            <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-4"  style={{ maxWidth: "350px" }}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="ratio ratio-1x1">
                  <img
                    src={produto.imagem}
                    className="card-img-top rounded-top-4"
                    style={{ objectFit: "cover" }}
                    alt={produto.produto}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-center mb-3">{produto.produto}</h5>
                  <p className="card-text text-muted small flex-grow-1 text-center ">
                    {produto.descricao}
                  </p>

                  <p className="text-center fw-semibold fs-5 text-success mb-3">
                    R$ {Number(produto.preco).toFixed(2)}
                  </p>

                  <button  className="btn w-100 mt-auto " style={{backgroundColor: "#000000"
                  }}><Link 
                  href={`produto/${produto.id}`} 
                  className="btn w-100 mt-auto fw-bold" 
                  style={{ backgroundColor: "#000000", color: "#FF7A30" }}
                >
                  Comprar
                </Link>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
