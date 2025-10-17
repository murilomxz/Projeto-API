"use client";

export default function Sobre() {
  return (
    <>
      <main
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >

        <div className="container my-5">
          <div className="row align-items-center">
      
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/img/sobre.jpg"
                alt="Equipe da empresa"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>

           
            <div className="col-md-6">
              <h1 className="fw-bold mb-3 " style={{color: ""}}>Conheça-nos</h1>
              <p className="text-muted fs-5">
                Somos uma empresa criada com o objetivo de fornecer produtos de
                confiança, resistentes e de qualidade máxima para grandes empresas. Nosso compromisso
                é entregar sempre o melhor para nossos clientes, unindo inovação
                e excelência em cada detalhe.
              </p>
              <p className="text-muted fs-5">
                Acreditamos que a satisfação do cliente é o que move nosso
                crescimento, e por isso buscamos constantemente evoluir em
                tecnologia, sustentabilidade e atendimento.
              </p>
            </div>
          </div>
        </div>

       
        <section className="container my-5">
          <h2 className="text-center fw-bold mb-4 ">Nossos Valores</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <i className="bi bi-shield-check display-5  mb-3"></i>
                <h5 className="fw-bold">Confiança</h5>
                <p className="text-muted">
                  Atuamos com transparência e responsabilidade, garantindo a
                  segurança e a confiança em cada produto e serviço.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <i className="bi bi-lightbulb display-5 text-warning mb-3"></i>
                <h5 className="fw-bold">Inovação</h5>
                <p className="text-muted">
                  Buscamos constantemente novas ideias e soluções criativas para
                  atender às necessidades do mercado.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <i className="bi bi-people display-5 text-success mb-3"></i>
                <h5 className="fw-bold">Respeito</h5>
                <p className="text-muted">
                  Valorizamos pessoas, relações e diversidade. Nosso sucesso vem
                  da colaboração e do respeito mútuo.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="container my-5">
          <h2 className="text-center fw-bold mb-4 ">Nossa Equipe</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://thvnext.bing.com/th/id/OIP.z1YYkhwNUvuguaRfYS-xXAHaF6?w=199&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3&ucfimg=1"
                  className="card-img-top rounded-top" 
                  alt="Membro da equipe" 
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Ana Maria Braga</h5>
                  <p className="text-muted">Diretora de Logistica</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://thvnext.bing.com/th/id/OIP.VYMYeWaiCqae6IvPtUYu_QHaGI?w=209&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3&ucfimg=1"
                  className="card-img-top rounded-top"
                  alt="Membro da equipe" 
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Ronaldo fenômeno</h5>
                  <p className="text-muted">Fundador da empresa</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="/img/pessoa3.jpg"
                  className="card-img-top rounded-top"
                  alt="Membro da equipe"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Fausto Silva</h5>
                  <p className="text-muted">Coordenador de Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

