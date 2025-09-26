import SideBar from "./components/sidebar";
import pacient from "../assets/profile.jpg";
function RegisterPacient() {
  return (
    <section className="register-section">
      <SideBar></SideBar>
      <div className="register-container">
        <h1>Registrar Novo Paciente &#x276F;</h1>
        <div className="register-wrapper">
          <div className="register-row">
            <div className="register-pacient-image">
              <img src={pacient}></img>
              <a className="rpi-btn">+</a>
            </div>

            <div className="input">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                placeholder="Insira o nome completo"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="data-nascimento">Data de nascimento</label>
              <input
                type="date"
                id="data-nascimento"
                placeholder="Selecione a data"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="idade">Idade</label>
              <input
                type="number"
                id="idade"
                placeholder="Insira a idade"
              ></input>
            </div>
          </div>

          <div className="register-row">
            <div className="input">
              <label htmlFor="sexo">Sexo</label>
              <input
                type="text"
                id="sexo"
                placeholder="Masculino/Feminino"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="Insira o CPF"></input>
            </div>
            <div className="input">
              <label htmlFor="rg">RG</label>
              <input type="text" id="rg" placeholder="Insira o RG"></input>
            </div>
            <div className="input">
              <label htmlFor="telefone">Telefone de contato</label>
              <input
                type="text"
                id="telefone"
                placeholder="(xx) xxxxx-xxxx"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                placeholder="Rua, número, bairro"
              ></input>
            </div>
          </div>

          <div className="register-row">
            <div className="input">
              <label htmlFor="estado-saude">Condições de saúde</label>
              <input
                type="text"
                id="estado-saude"
                placeholder="Ex: diabetes, hipertensão"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="medicamentos">Medicamentos em uso</label>
              <input
                type="text"
                id="medicamentos"
                placeholder="Liste os medicamentos"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="alergias">Alergias</label>
              <input
                type="text"
                id="alergias"
                placeholder="Insira as alergias"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="responsavel">Nome do responsável</label>
              <input
                type="text"
                id="responsavel"
                placeholder="Insira o nome do responsável"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="contato-responsavel">
                Contato do responsável
              </label>
              <input
                type="text"
                id="contato-responsavel"
                placeholder="(xx) xxxxx-xxxx"
              ></input>
            </div>
          </div>
          <a className="register-button">Registrar</a>
        </div>
      </div>
    </section>
  );
}

export default RegisterPacient;
