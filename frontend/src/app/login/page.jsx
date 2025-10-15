"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (email === "Admin@gmail.com" && senha === "123") {
      alert("Login de administrador realizado com sucesso!");
      router.push("/admin"); 
    } else {
        setEmail("")
        setSenha("")
        alert("Login realizado com sucesso!")
    }
  };
 

  return (
    <main className="d-flex justify-content-center align-items-center" style={{ flex: 1, height: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        className="form-signin bg-white p-5 rounded-4 shadow-sm"
        style={{ width: "100%", maxWidth: "400px", borderColor: "#FF7A30", borderRadius: "5px" }}
      >
        <img
          className="mb-4 mx-auto d-block"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="Logo"
          width={72}
          height={57}
        />
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">Login</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label htmlFor="floatingPassword">Senha</label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="checkDefault" />
          <label className="form-check-label" htmlFor="checkDefault">
            Relembre-me
          </label>
        </div>

        <button
          className="btn w-100 py-2 mb-3"
          type="submit"
          style={{ background: "black", color: "#FF7A30" }}
        >
          Entrar
        </button>

        <div className="text-center">
          <span>Não tem uma conta? </span>
          <Link href="/cadastro" className="text-decoration-none fw-bold" style={{ color: "#FF7A30" }}>
            Cadastre-se
          </Link>
        </div>
      </form>
    </main>
  );
}
