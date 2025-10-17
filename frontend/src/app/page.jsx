import Image from "next/image";
import "./globals.css";
import Link from "next/link";





export default async function Home() {
  const produtos = await (await fetch("http://localhost:3000/produtos")).json();
  console.log(produtos);


  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link href="#produtos" ><img src="/imagens/Banner.png" className="d-block w-100" alt="..." /></Link>
          </div>
          <div className="carousel-item">
            <Link href="#produtos" ><img src="/imagens/Banner2.png" className="d-block w-100" alt="..." /></Link>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container my-5">
        <h1 className="text-center fw-bold mb-3 p-5 ">Produtos Em Destaque</h1>
        <div className="row g-4 justify-content-center mb-5 " id="produtos">
          {produtos.map((produto) => (
            <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-4" style={{ maxWidth: "350px" }}>
              <div className="card h-100 shadow-sm border-0 rounded-4 ">
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
                  <p className="card-text text-muted small flex-grow-1 text-center text-truncate ">
                    {produto.descricao}
                  </p>

                  <p className="text-center fw-semibold fs-5 text-success mb-3">
                    R$ {Number(produto.preco).toFixed(2)}
                  </p>

          
                  <Link href={`/produto/${produto.id}`} className="btn w-100  fw-bold text-center test"
                    style={{ backgroundColor: "#000000", color: "#FF7A30", textDecoration: "none" }}>
                    Ver Mais <i className="bi bi-arrow-right"></i>
                  </Link>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
