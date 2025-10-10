"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => setProduto(data.find(p => p.id === Number(id))));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="container mt-5 mb-5">
      <div className="card mx-auto shadow" style={{ maxWidth: "900px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={produto.imagem}
              alt={produto.produto}
              className="img-fluid rounded-start"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-7 p-3" style={{ backgroundColor: "#E9E3DF" }}>
            <h2 className="card-title text-center" style={{ color: "#000000" }}>
              {produto.produto}
            </h2>
            <p className="card-text text-muted mt-3">{produto.descricao}</p>
            <h4 className="text-end mt-auto" style={{ color: "#FF7A30" }}>
              R$ {Number(produto.preco).toFixed(2)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
