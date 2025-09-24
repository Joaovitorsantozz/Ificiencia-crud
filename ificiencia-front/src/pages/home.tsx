import "./style.css";
import { useState } from "react";
import userPic from "../assets/profile.png";
import SideBar from "./components/sidebar";
function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <section className="home-section">
      <SideBar />
      <div className="home-container">
        <div className="home-container-navbar">
          <div>
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="icon-navbar" onClick={() => setVisible(!visible)}>
            <i className="fa-solid fa-user"></i>
            <div
              style={{ display: visible ? "flex" : "none" }}
              className="user-container"
            >
              <div className="triangulo"></div>
              <img src={userPic} />
              <span>Logado como administrador</span>
              <p>
                Identificador :<b>155692cd</b>
              </p>
            </div>
          </div>
        </div>

        <h1 className="home-container-title">Últimas Alterações</h1>
        <ul className="home-container-list">
          <li>Tipo</li>
          <li>Nome Paciente</li>
          <li>Última alteração</li>
          <li>Observações?</li>
          <li>Grau Urgência</li>
        </ul>
        <div className="pacients-container">
          <div className="pacient-box">
            <i className="fa-solid fa-folder"></i>
            <a href="/pacient-page">Claúdio Almeida</a>
            <time dateTime="2025-9-23T16:45">23/09/2025 16:45</time>
            <p>Sim</p>
            <div>
              <div className="grau-urgencia"></div>
              <p>Vermelha</p>
            </div>
          </div>
          <div className="pacient-box">
            <i className="fa-solid fa-folder"></i>
            <a href="/pacient-page">Claúdio Almeida</a>

            <time dateTime="2025-9-23T16:45">23/09/2025 16:45</time>
            <p>Sim</p>
            <div>
              <div className="grau-urgencia"></div>
              <p>Vermelha</p>
            </div>
          </div>
          <div className="pacient-box">
            <i className="fa-solid fa-folder"></i>
            <a href="/pacient-page">Claúdio Almeida</a>

            <time dateTime="2025-9-23T16:45">23/09/2025 16:45</time>
            <p>Sim</p>
            <div>
              <div className="grau-urgencia"></div>
              <p>Vermelha</p>
            </div>
          </div>
          <div className="pacient-box">
            <i className="fa-solid fa-folder"></i>
            <a href="/pacient-page">Claúdio Almeida</a>

            <time dateTime="2025-9-23T16:45">23/09/2025 16:45</time>

            <p>Sim</p>
            <div>
              <div className="grau-urgencia"></div>
              <p>Vermelha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
