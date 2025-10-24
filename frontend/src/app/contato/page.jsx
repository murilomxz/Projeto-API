"use client"


export default function contato(){


    return(
        <>
        
  
<main style={{flex: "1"}}>
  <section className="container py-5 " id="contact">
    <h2 className="text-center mb-5">Contate-nos</h2>
    <div className="row g-4">

      <div className="col-lg-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nome"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Feedback
            </label>
            <textarea
              className="form-control"
              id="message"
              rows={5}
              placeholder="Feedback"
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-custom" style={{background: "black",  color: "#FF7A30"}}>
            Enviar
          </button>
        </form>
      </div>
    
      <div className="col-lg-6">
        <div className="ratio ratio-4x3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.4358306717738!2d-46.559883169158965!3d-23.64476674388698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4328954fde87%3A0x20156e970346f546!2sR.%20Boa%20Vista%2C%20825%20-%20Boa%20Vista%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009572-300!5e0!3m2!1spt-BR!2sbr!4v1761303943394!5m2!1spt-BR!2sbr" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
   
    <div className="row text-center mt-5 gy-4">
      <div className="col-md-3 col-6">
        <i className="bi bi-telephone-fill fs-4 contact-icon" />
        <p className="mb-0"> +55 (11) 99999-999</p>
      </div>
      <div className="col-md-3 col-6">
        <i className="bi bi-envelope-fill fs-4 contact-icon" />
        <p className="mb-0">contato@epialtura.com.br</p>
      </div>
      <div className="col-md-3 col-6">
        <i className="bi bi-instagram fs-4 contact-icon" />
        <p className="mb-0">@epialtura</p>
      </div>
      <div className="col-md-3 col-6">
        <i className="bi bi-facebook fs-4 contact-icon" />
        <p className="mb-0">@EPialturaloja</p>
      </div>
    </div>
  </section>
  </main>
</>

    )
}