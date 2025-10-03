import SideBar from "./components/sidebar";
import ProfilePic from "../assets/profile.jpg";
import PacientCalendar from "./calendar";
function PacientPage() {
 
  return (
    <section className="pacient-page-sec">
      <SideBar></SideBar>
      <div className="pacient-page-container">
        <div className="pacient-page-container-left">
          <div className="pacient-details">
            <div className="profile-pic">
              <i className="fa-solid fa-ellipsis-vertical"></i>
              <img src={ProfilePic}></img>

              <h2>Nome Paciente</h2>
            </div>
            <div className="pacient-informations">
              <h2>Informações &#x276F;</h2>

              <ul>
                <li>
                  <span className="pacient-label">Idade</span>
                  <span className="pacient-value"> 19 anos</span>
                </li>
                <li>
                  <span className="pacient-label">Gênero</span>
                  <span className="pacient-value"> Masculino</span>
                </li>
                <li>
                  <span className="pacient-label">Peso</span>
                  <span className="pacient-value"> 86 kgs</span>
                </li>
                <li>
                  <span className="pacient-label">Sangue</span>
                  <span className="pacient-value">Tipo B</span>
                </li>
                <li>
                  <span className="pacient-label">Interdependência</span>
                  <span className="pacient-value">Dependente</span>
                </li>
                <li>
                  <span className="pacient-label">Mobilidade</span>
                  <span className="pacient-value">Cadeira de rodas</span>
                </li>
              </ul>

              <h2 className="emergency-contacts">
                Contatos de Emergência &#x276F;
              </h2>
              <ul>
                <li>
                  <span className="pacient-label">Nome</span>
                  <span className="pacient-value"> Oliveira</span>
                </li>
                <li>
                  <span className="pacient-label">Parentesco</span>
                  <span className="pacient-value">Filho</span>
                </li>
                <li>
                  <span className="pacient-label">Telefone</span>
                  <span className="pacient-value">(15) 9931-1228</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pacient-page-container-right">
          <div className="observations-container">
            <div className="observation-box">
              <h2>Observações Gerais &#x276F;</h2>
              <div className="observation-wrapper">
                <div className="warning-box">
                  <div className="warning-title">
                    <h3>Alergia a XXXX</h3>
                    <div>
                      <i className="fa-regular fa-circle-check"></i>
                      <time dateTime="2003-09-24">24/09/2024</time>
                    </div>
                  </div>
                  <p>
                    O paciente apresenta alergia severa ao medicamento xxxxx e
                    todos seus derivados
                  </p>
                </div>
              </div>
            </div>

            <div className="observation-box">
              <h2>Medicamentos &#x276F;</h2>
              <div className="observation-wrapper">
                <div className="warning-box">
                  <div className="warning-title">
                    <h3>Pressão Medida</h3>
                    <div>
                      <i className="fa-regular fa-circle-check"></i>
                      <time dateTime="2003-09-24">24/09/2024</time>
                    </div>
                  </div>
                  <p>
                    O paciente apresenta alergia severa ao medicamento xxxxx e
                    todos seus derivados
                  </p>
                </div>
              </div>
            </div>
            <div className="observation-box">
              <h2>Controle de Rotina &#x276F;</h2>
              <div className="observation-wrapper">
                <div className="warning-box">
                  <div className="warning-title">
                    <h3>Alergia a XXXX</h3>
                    <div>
                      <i className="fa-regular fa-circle-check"></i>
                      <time dateTime="2003-09-24">24/09/2024</time>
                    </div>
                  </div>
                  <p>
                    O paciente apresenta alergia severa ao medicamento xxxxx e
                    todos seus derivados
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="history-container">
            <h2>Histórico Geral &#x276F;</h2>
            <div className="history-wrapper">
              <div className="history-box">
                <div className="operation">
                  <h3>VIT D 50.000</h3>

                  <p>
                    <span className="label">Período : </span>
                    <span className="value">Quinzenal</span>
                  </p>
                  <p>
                    <span className="label">Quantidade : </span>
                    <span className="value">1 un</span>
                  </p>
                </div>
                <div className="professional">
                  <p>
                    <span className="label">Profissional: </span>
                    <span className="value"> Sérgio de Alcantara</span>
                  </p>
                  <p>
                    <span className="label">Observações: </span>
                    <span className="obs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi quaerat neque aperiam ducimus voluptas.
                    </span>
                  </p>
                </div>
                <div className="date">
                  <div className="date-time">
                    <i className="fa-regular fa-clock"></i>
                    <time dateTime="2003-09-24">24/09/2024</time>
                  </div>
                  <div className="last-dose">
                    <i className="fa-regular fa-circle-check"></i>
                    <time dateTime="2003-09-24">24/09/2024</time>
                  </div>
                </div>
              </div>
              <div className="history-box">
                <div className="operation">
                  <h3>VIT D 50.000</h3>

                  <p>
                    <span className="label">Período : </span>
                    <span className="value">Quinzenal</span>
                  </p>
                  <p>
                    <span className="label">Quantidade : </span>
                    <span className="value">1 un</span>
                  </p>
                </div>
                <div className="professional">
                  <p>
                    <span className="label">Profissional: </span>
                    <span className="value"> Sérgio de Alcantara</span>
                  </p>
                  <p>
                    <span className="label">Observações: </span>
                    <span className="obs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi quaerat neque aperiam ducimus voluptas.
                    </span>
                  </p>
                </div>
                <div className="date">
                  <div className="date-time">
                    <i className="fa-regular fa-clock"></i>
                    <time dateTime="2003-09-24">24/09/2024</time>
                  </div>
                  <div className="last-dose">
                    <i className="fa-regular fa-circle-check"></i>
                    <time dateTime="2003-09-24">24/09/2024</time>
                  </div>
                </div>
              </div>
            </div>
            <a className="hc-new-activity">Registrar Atividade +</a>
          </div>
        </div>
      </div>
      <PacientCalendar></PacientCalendar>
    </section>
  );
}

export default PacientPage;
