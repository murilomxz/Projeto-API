"use client";

export default function Contato() {
  return (
    <>
      <main style={{ flex: "1", backgroundColor: "#f9f9f9" }}>
        <section className="container py-5" id="contact">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#FF7A30" }}>
            Contate-nos
          </h2>
          <div className="row g-4 align-items-center">

     
            <div className="col-lg-6">
              <form className="p-4 bg-white rounded-4 shadow-sm">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Mensagem
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows={5}
                    placeholder="Digite sua mensagem..."
                    defaultValue={""}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 fw-bold py-2"
                  style={{
                    backgroundColor: "#000",
                    color: "#FF7A30",
                    borderRadius: "10px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#FF7A30")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000")}
                >
                  Enviar
                </button>
              </form>
            </div>

    
            <div className="col-lg-6">
              <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.4358306717738!2d-46.559883169158965!3d-23.64476674388698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4328954fde87%3A0x20156e970346f546!2sR.%20Boa%20Vista%2C%20825%20-%20Boa%20Vista%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009572-300!5e0!3m2!1spt-BR!2sbr!4v1761303943394!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

    
        <style jsx>{`
          input:focus,
          textarea:focus {
            border-color: #FF7A30;
            box-shadow: 0 0 8px rgba(255, 122, 48, 0.4);
            outline: none;
          }
          h2::after {
            content: "";
            display: block;
            width: 60px;
            height: 3px;
            background-color: #FF7A30;
            margin: 10px auto 0;
            border-radius: 2px;
          }
          .btn:hover {
            color: #000 !important;
          }
        `}</style>
      </main>
    </>
  );
}
