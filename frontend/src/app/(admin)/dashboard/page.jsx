"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dashboard() {
  const [produtos, setProdutos] = useState([]);


  const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Carlos" },
    { id: 4, nome: "Ana" },
  ];

  const pedidos = [
    { id: 1, total: 500, status: "pendente" },
    { id: 2, total: 350, status: "concluido" },
    { id: 3, total: 1200, status: "pendente" },
  ];

  const receitaTotal = 5000

  const carregarProdutos = async () => {
    try {
      const data = await (await fetch("http://localhost:3001/produtos")).json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <main style={{ flex: "1", backgroundColor: "#f8f9fa" }}>
      <div className="container py-5">
      <div className="row align-items-center mb-5">
  <div className="col-md-6">
    
    <h1 className="fw-bold display-5" style={{ color: "#FF7A30" }}>
      Painel do Administrador
    </h1>
    <p className="text-muted fs-5 mb-0">Bem-vindo de volta!</p>
  </div>

  <div className="col-md-6 text-md-end mt-4 mt-md-0">
    <Link href="/admin">
      <button
        className="btn btn-lg fw-bold text-white rounded-pill shadow-sm"
        style={{ backgroundColor: "#FF7A30" }}
      >
        <i className="bi bi-gear me-2"></i> Gerenciar Produtos
      </button>
    </Link>
  </div>
</div>

        <div className="row g-4 mb-5">
          {[
            { titulo: "Produtos Ativos", valor: produtos.length, icone: "bi-box", bg: "#FF7A3020" },
            { titulo: "Pedidos Pendentes", valor: pedidos.filter(p => p.status === "pendente").length, icone: "bi-cart", bg: "#FF7A3020" },
            { titulo: "Novos Usuários", valor: usuarios.length, icone: "bi-people", bg: "#FF7A3020" },
            { titulo: "Receita Total", valor: `R$ ${receitaTotal.toLocaleString("pt-BR")}`, icone: "bi-currency-dollar", bg: "#FF7A3020" },
          ].map((card, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body d-flex justify-content-between align-items-center p-4">
                  <div>
                    <h6 className="text-muted mb-2 fs-5">{card.titulo}</h6>
                    <h2 className="fw-bold">{card.valor}</h2>
                  </div>
                  <div className="p-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: card.bg }}>
                    <i className={`bi ${card.icone}`} style={{ color: "#FF7A30", fontSize: "28px" }}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center p-4">
                <h5 className="fw-bold mb-0" style={{ color: "#FF7A30" }}>
                  Últimos Produtos Adicionados
                </h5>
                <button className="btn btn-link text-decoration-none text-dark">Ver todos</button>
              </div>
              <div className="card-body p-4">
                {produtos.slice(-5).reverse().map(produto => (
                  <div key={produto.id} className="d-flex align-items-center mb-3">
                    <div className="bg-dark bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px" }}>
                      <i className="bi bi-box-seam" style={{ color: "#FF7A30", fontSize: "26px" }}></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-1">{produto.produto}</h6>
                      <p className="text-muted mb-0">{produto.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-white border-0 p-4">
                <h5 className="fw-bold mb-0" style={{ color: "#FF7A30" }}>Ações Rápidas</h5>
              </div>
              <div className="card-body d-grid gap-3 p-4">
                <Link href="/admin">
                  <button className="btn text-white fw-bold btn-lg rounded-pill" style={{ backgroundColor: "#FF7A30" }}>
                    <i className="bi bi-plus-circle me-2"></i> Novo Produto
                  </button>
                </Link>

                <Link href="/admin">
                  <button className="btn btn-outline-dark btn-lg rounded-pill">
                    <i className="bi bi-receipt me-2"></i> Gerenciar Pedidos
                  </button>
                </Link>
                <Link href="/dashboard">
                  <button className="btn btn-dark fw-bold btn-lg rounded-pill">
                    <i className="bi bi-graph-up me-2"></i> Relatórios
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="card border-0 shadow-lg rounded-4 mb-5">
          <div className="card-header bg-white border-0 p-4">
            <h5 className="fw-bold mb-0" style={{ color: "#FF7A30" }}>Alertas de Estoque Crítico (EPIs de Altura)</h5>
          </div>
          <div className="card-body p-4">
            {produtos.filter(p => p.disponibilidade === "Em estoque").length === 0 ? (
              <p className="text-success fw-bold">Todos os produtos estão com estoque seguro.</p>
            ) : (
              produtos.filter(p => p.disponibilidade === "Esgotado").map(produto => (
                <div key={produto.id} className="d-flex align-items-center mb-3">
                  <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                    <i className="bi bi-exclamation-triangle-fill text-danger"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">{produto.produto}</h6>
                    <p className="text-muted mb-0">Estoque crítico: {produto.disponibilidade}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
