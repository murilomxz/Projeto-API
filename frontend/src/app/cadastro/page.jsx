"Use client"

export default function cadastro() {



    return (
        <>


            <div className="d-flex justify-content-center align-items-center" style={{ flex: "1" }}>
                <div className="container m-5 " style={{
                    background: "black",
                    color: "white",
                    borderRadius: "10px",
                    padding: "20px"
                }}>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                Senha
                            </label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Endereço
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="Rua alvares, 4"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">
                                Endereço 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress2"
                                placeholder="Apartameno, Casa ou Comércio"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Cidade
                            </label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                Estado
                            </label>
                            <select id="inputState" className="form-select">
                                <option select="">Escolha...</option>
                                <option>São Paulo</option>
                                <option>Rio de Janeiro</option>
                                <option>Minas Gerais</option>
                                <option>Bahia</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">
                                Cep
                            </label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Verificar
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn" style={{
                                background: "black",
                                color: "#FF7A30"
                            }} >
                                Entrar
                            </button>
                        </div>
                    </form></div></div>

        </>
    )





}