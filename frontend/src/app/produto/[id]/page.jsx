"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProdutoPage() {
  const { id } = useParams();
  const router = useRouter();
  const [produto, setProduto] = useState(null);
  const [cep, setCep] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/produtos/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data))
      .catch((err) => console.error("Erro ao carregar produto:", err));
  }, [id]);

  if (!produto)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-dark">
        <div className="spinner-border text-warning me-2"></div>
        <span>Carregando produto...</span>
      </div>
    );

  return (
    <main style={{ backgroundColor: "#fff", color: "#000", padding: "4rem 2rem", flex: "1" }}>
      <div className="container-fluid">
        <div className="row g-5 align-items-start">
   
          <div className="col-md-5 text-center">
            <img
              src={produto.imagem}
              alt={produto.produto}
              className="img-fluid rounded"
              style={{ maxHeight: "600px", width: "auto", objectFit: "cover" }}
            />
          </div>

        
          <div className="col-md-7">
            <h1 className="fw-bold mb-3" style={{ color: "#FF7A30" }}>
              {produto.produto}
            </h1>

            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              {produto.descricao}
            </p>

            <h2 className="fw-bold mb-2 text-success">R$ {Number(produto.preco).toFixed(2)}</h2>
            <p className="text-secondary mb-3">
              ou 12x de R$ {(produto.preco / 12).toFixed(2)} sem juros
            </p>

            <span className="badge bg-warning text-dark mb-4">
              Ganhe pontos {Math.floor(produto.preco * 0.38)} pts
            </span>

            <div className="mb-4">
              <p><strong>Categoria:</strong> {produto.categoria || "Geral"}</p>
              <p><strong>Código:</strong> {produto.id}</p>
              <p><strong>Marca:</strong> {produto.marca || "Não informado"}</p>
              <p><strong>Modelo:</strong> {produto.modelo || "Não informado"}</p>
              <p><strong>Disponibilidade:</strong> {produto.disponibilidade}</p>
            </div>

    
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <label htmlFor="cep" className="form-label">
                  Calcular frete:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    id="cep"
                    className="form-control"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                  <button className="btn btn-outline-warning">Calcular</button>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="quantidade" className="form-label">
                  Quantidade:
                </label>
                <input
                  type="number"
                  id="quantidade"
                  className="form-control"
                  min={1}
                  value={quantidade}
                  onChange={(e) => setQuantidade(Number(e.target.value))}
                />
              </div>
            </div>

       
            <div className="d-flex flex-wrap gap-3">
              <button
                className="btn fw-bold px-5 py-2"
                style={{
                  backgroundColor: "#FF7A30",
                  color: "#fff",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                <i className="bi bi-cart-fill me-2"></i>Comprar
              </button>

              <button
                className="btn btn-outline-dark fw-bold px-5 py-2"
                style={{ borderRadius: "10px", borderWidth: "2px" }}
                onClick={() => router.back()}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
