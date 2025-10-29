import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default async function Produtos() {

  const produtos = await (await fetch("http://localhost:3001/produtos")).json();

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold mb-3 p-5">Produtos</h1>

        <div className="row g-4 justify-content-center mb-5">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              style={{ maxWidth: "350px" }}
            >
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
                  <h5 className="card-title fw-bold text-center mb-3">
                    {produto.produto}
                  </h5>

                  <p className="card-text text-muted small flex-grow-1 text-center text-truncate">
                    {produto.descricao}
                  </p>

                  <p className="text-center fw-semibold fs-5 text-success mb-3 ">
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
      </div>
    </>
  );
}
