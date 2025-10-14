"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3000/produtos/${(id)}`)
      .then((res) => res.json())
      .then((data) => setProduto(data))
      .catch((err) => console.error("Erro ao carregar produto:", err));
  }, [id]);



  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ flex: "1" }}>
      <div className="container mt-5 mb-5 ">
        <div className="card mx-auto shadow" style={{ maxWidth: "1500px" }}>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={produto.imagem}
                alt={produto.produto}
                className="img-fluid rounded-start "
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-md-7 p-3 d-flex flex-column" style={{ backgroundColor: "#000000" }}>
              <h2 className="card-title text-center mt-3" style={{ color: "#FF7A30" }}>
                {produto.produto}
              </h2>
              <p className="card-text text-white mt-auto fs-5">{produto.descricao}</p>
              <div className="d-flex justify-content-between mt-auto">
                <button className="btn fw-bold" style={{
                  background: "white",
                  color: "black"
                }}>Comprar<i className="bi bi-cart-fill ms-2"></i></button>
                <h4 className="text-end mt-auto" style={{ color: "#FF7A30" }}>
                  R$ {Number(produto.preco).toFixed(2)}
                </h4></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
