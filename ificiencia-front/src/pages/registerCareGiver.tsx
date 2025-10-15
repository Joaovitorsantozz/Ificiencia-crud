import SideBar from "./components/sidebar";
import pacient from "../assets/medico.png";
function RegisterCareGiver() {
  return (
    <section className="register-section-caregiver">
      <SideBar></SideBar>
      <div className="register-container-caregiver">
        <h1>Registrar Cuidador &#x276F;</h1>
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
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="Insira o CPF"></input>
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
              <label htmlFor="telefone">Telefone de contato</label>
              <input
                type="text"
                id="telefone"
                placeholder="(xx) xxxxx-xxxx"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Insira o e-mail"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                placeholder="Rua, número, bairro, cidade"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="cargo">Cargo/Função</label>
              <input type="text" id="cargo" placeholder="Ex: Cuidador"></input>
            </div>
          </div>

          <div className="register-row">
            <div className="input">
              <label htmlFor="registro">Registro Profissional</label>
              <input
                type="text"
                id="registro"
                placeholder="Ex: COREN ou outro registro"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="turno">Turno de trabalho</label>
              <input
                type="text"
                id="turno"
                placeholder="Manhã/Tarde/Noite"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="horario">Horário</label>
              <input
                type="text"
                id="horario"
                placeholder="Ex: 07:00 às 19:00"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="experiencia">Experiência anterior</label>
              <input
                type="text"
                id="experiencia"
                placeholder="Breve descrição da experiência"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                placeholder="Nome de login"
              ></input>
            </div>
          </div>

          <div className="register-row">
            <div className="input">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Crie uma senha"
              ></input>
            </div>
            <div className="input">
              <label htmlFor="nivel-acesso">Nível de acesso</label>
              <input
                type="text"
                id="nivel-acesso"
                placeholder="Ex: Cuidador, Enfermeiro, Coordenador"
              ></input>
            </div>
          </div>

          <a className="register-button">Registrar Cuidador</a>
        </div>
      </div>
    </section>
  );
}

export default RegisterCareGiver;
