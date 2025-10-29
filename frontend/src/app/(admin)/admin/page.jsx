"use client";

import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    produto: "",
    descricao: "",
    preco: "",
    imagem: "",
    marca: "",
    modelo: "",
    categoria: "",
    disponibilidade: "",
  });
  const [editando, setEditando] = useState(null);

  const carregarProdutos = async () => {
    try {
      const produtos = await (await fetch("http://localhost:3001/produtos")).json();
      setProdutos(produtos);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const adicionarProduto = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Admin@gmail.com" },
      body: JSON.stringify(novoProduto),
    });
    setNovoProduto({
      produto: "",
      descricao: "",
      preco: "",
      imagem: "",
      marca: "",
      modelo: "",
      categoria: "",
      disponibilidade: "",
    });
    carregarProdutos();
  };

  const deletarProduto = async (id) => {
    if (confirm("Deseja realmente excluir este produto?")) {
      await fetch(`http://localhost:3001/produtos/${id}`, {
        method: "DELETE",
        headers: { "Authorization": "Admin@gmail.com" },
      });
      carregarProdutos();
    }
  };

  const salvarEdicao = async (id) => {
    await fetch(`http://localhost:3001/produtos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Authorization": "Admin@gmail.com" },
      body: JSON.stringify(editando),
    });
    setEditando(null);
    carregarProdutos();
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold" style={{ color: "#FF7A30" }}>
        Painel do Administrador
      </h1>

      <div className="card shadow-sm border-0 rounded-4 mb-5 p-4">
        <h4 className="fw-bold mb-4" style={{ color: "#FF7A30" }}>Adicionar Produto</h4>
        <form onSubmit={adicionarProduto} className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nome do produto"
              value={novoProduto.produto}
              onChange={(e) => setNovoProduto({ ...novoProduto, produto: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Imagem (URL)"
              value={novoProduto.imagem}
              onChange={(e) => setNovoProduto({ ...novoProduto, imagem: e.target.value })}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control form-control-lg"
              placeholder="Descrição"
              value={novoProduto.descricao}
              onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Preço"
              value={novoProduto.preco}
              onChange={(e) => setNovoProduto({ ...novoProduto, preco: Number(e.target.value) })}
              required
              min="0"
              step="0.01"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Marca"
              value={novoProduto.marca}
              onChange={(e) => setNovoProduto({ ...novoProduto, marca: e.target.value })}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Modelo"
              value={novoProduto.modelo}
              onChange={(e) => setNovoProduto({ ...novoProduto, modelo: e.target.value })}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Categoria"
              value={novoProduto.categoria}
              onChange={(e) => setNovoProduto({ ...novoProduto, categoria: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Disponibilidade"
              value={novoProduto.disponibilidade}
              onChange={(e) => setNovoProduto({ ...novoProduto, disponibilidade: e.target.value })}
              required
            />
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <button
              className="btn btn-dark w-100 fw-bold"
              type="submit"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>

      <h2 className="fw-bold mb-3 text-center" style={{ color: "#FF7A30" }}>Gerenciar Produtos</h2>
      <div className="table-responsive">
        <table className="table table-hover align-middle table-bordered rounded shadow-sm">
          <thead className="table-dark">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Imagem</th>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Categoria</th>
              <th>Disponibilidade</th>
              <th className="text-center">Preço</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => {
              let conteudoProduto,
                conteudoDescricao,
                conteudoPreco,
                conteudoImagem,
                conteudoAcoes,
                conteudoMarca,
                conteudoModelo,
                conteudoCategoria,
                conteudoDisponibilidade;

              if (editando && editando.id === p.id) {
                conteudoProduto = (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editando.produto}
                    onChange={(e) => setEditando({ ...editando, produto: e.target.value })}
                  />
                );

                conteudoDescricao = (
                  <textarea
                    className="form-control form-control-sm"
                    value={editando.descricao}
                    onChange={(e) => setEditando({ ...editando, descricao: e.target.value })}
                    rows={2}
                  />
                );

                conteudoImagem = (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editando.imagem}
                    onChange={(e) => setEditando({ ...editando, imagem: e.target.value })}
                  />
                );

                conteudoPreco = (
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value={editando.preco}
                    onChange={(e) => setEditando({ ...editando, preco: Number(e.target.value) })}
                    min="0"
                    step="0.01"
                  />
                );

                conteudoMarca = (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editando.marca}
                    onChange={(e) => setEditando({ ...editando, marca: e.target.value })}
                  />
                );

                conteudoModelo = (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editando.modelo}
                    onChange={(e) => setEditando({ ...editando, modelo: e.target.value })}
                  />
                );

                conteudoCategoria = (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editando.categoria}
                    onChange={(e) => setEditando({ ...editando, categoria: e.target.value })}
                  />
                );

                conteudoDisponibilidade = (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editando.disponibilidade}
                    onChange={(e) => setEditando({ ...editando, disponibilidade: e.target.value })}
                  />
                );

                conteudoAcoes = (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => salvarEdicao(p.id)}
                    >
                      Salvar
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditando(null)}
                    >
                      Cancelar
                    </button>
                  </>
                );
              } else {
                conteudoProduto = p.produto;
                conteudoDescricao = p.descricao;
                conteudoImagem = (
                  <img
                    src={p.imagem}
                    alt={p.produto}
                    style={{ width: "70px", borderRadius: "10px", objectFit: "cover" }}
                  />
                );
                conteudoMarca = p.marca;
                conteudoModelo = p.modelo;
                conteudoCategoria = p.categoria;
                conteudoDisponibilidade = p.disponibilidade;
                conteudoPreco = `R$ ${Number(p.preco).toFixed(2)}`;
                conteudoAcoes = (
                  <button
                    className="btn btn-warning btn-sm m-auto mb-2"
                    onClick={() => setEditando(p)}
                  >
                    Editar
                  </button>
                );
              }

              return (
                <tr key={p.id} className="align-middle">
                  <td className="text-center">{p.id}</td>
                  <td className="text-center">{conteudoImagem}</td>
                  <td>{conteudoProduto}</td>
                  <td>{conteudoDescricao}</td>
                  <td>{conteudoMarca}</td>
                  <td>{conteudoModelo}</td>
                  <td>{conteudoCategoria}</td>
                  <td>{conteudoDisponibilidade}</td>
                  <td className="text-center fw-semibold text-success">{conteudoPreco}</td>
                  <td className="text-center">
                    {conteudoAcoes}
                    <button
                      className="btn btn-danger btn-sm m-auto"
                      onClick={() => deletarProduto(p.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
