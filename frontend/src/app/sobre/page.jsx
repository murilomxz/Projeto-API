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
                src="/imagens/placa_epis_trabalho_em_altura.webp"
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
                  src="https://img.freepik.com/fotos-gratis/industria-de-mulher-trabalhador-retrato-vestindo-uniforme-de-seguranca-e-oculos-de-protecao-em-pe-sobre-fundo-branco_114579-78228.jpg"
                  className="card-img-top rounded-top" 
                  alt="Membro da equipe"  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
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
                  src="https://tse4.mm.bing.net/th/id/OIP.AQfZL40cNnAVDIZeFs_E6AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
                  className="card-img-top rounded-top"
                  alt="Membro da equipe"    style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                 
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
                  src="https://img.freepik.com/fotos-gratis/jovem-engenheiro-de-uniforme-segurando-a-prancheta-e-apontando-para-cima-vista-frontal_176474-21297.jpg"
                  className="card-img-top rounded-top"
                  alt="Membro da equipe"   style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                
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

