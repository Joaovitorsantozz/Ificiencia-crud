import SideBar from "./components/sidebar";
import cgimg from "../assets/medico.png";
function CaregiverHome() {
  return (
    <section className="caregiver-section">
      <SideBar></SideBar>

      <div className="caregiver-container">
        <div className="title">
          <h1>Visualizando Cuidadores &gt;</h1>
          <a href="/register-caregiver">
            {" "}
            <i className="fa-solid fa-user-doctor"></i>Cadastrar novo cuidador
          </a>
        </div>
        <div className="caregiver-box">
          <div className="caregiver-image">
            <img src={cgimg}></img>
          </div>
          <div className="caregiver-box-content">
            <p>
              <span>Nome : </span>Alberto Miguel
            </p>
            <p>
              <span>Turno : </span> Manhã{" "}
              <i className="fa-solid fa-sun sun"></i>
            </p>
            <p>
              <span>Pacientes em cuidado :</span> 3
            </p>
            <p>
              <span>Status : </span> Em turno{" "}
              <i className="fa-solid fa-check check"></i>
            </p>
          </div>
          <div className="caregiver-box-links">
            <div className="details" style={{ backgroundColor: "#b63714ff" }}>
              <a href="/caregiver-page">
                <i className="fa-solid fa-eye"></i>Ver mais detalhes
              </a>
            </div>
            <div className="edit" style={{ backgroundColor: "#2f428dff" }}>
              <a>
                <i className="fa-solid fa-pen"></i>Editar
              </a>
            </div>
            <div className="contact" style={{ backgroundColor: "#3e7639ff" }}>
              <a>
                {" "}
                <i className="fa-solid fa-phone"></i> Entrar em contato
              </a>
            </div>
          </div>
        </div>
        <div className="caregiver-box">
          <div className="caregiver-image">
            <img src={cgimg}></img>
          </div>
          <div className="caregiver-box-content">
            <p>
              <span>Nome : </span>Alberto Miguel
            </p>
            <p>
              <span>Turno : </span> Manhã{" "}
              <i className="fa-solid fa-sun sun"></i>
            </p>
            <p>
              <span>Pacientes em cuidado :</span> 3
            </p>
            <p>
              <span>Status : </span> Em turno{" "}
              <i className="fa-solid fa-check check"></i>
            </p>
          </div>
          <div className="caregiver-box-links">
            <div className="details" style={{ backgroundColor: "#b63714ff" }}>
              <a>
                <i className="fa-solid fa-eye"></i>Ver mais detalhes
              </a>
            </div>
            <div className="edit" style={{ backgroundColor: "#2f428dff" }}>
              <a>
                <i className="fa-solid fa-pen"></i>Editar
              </a>
            </div>
            <div className="contact" style={{ backgroundColor: "#3e7639ff" }}>
              <a>
                {" "}
                <i className="fa-solid fa-phone"></i> Entrar em contato
              </a>
            </div>
          </div>
        </div>
        <div className="caregiver-box">
          <div className="caregiver-image">
            <img src={cgimg}></img>
          </div>
          <div className="caregiver-box-content">
            <p>
              <span>Nome : </span>Alberto Miguel
            </p>
            <p>
              <span>Turno : </span> Manhã{" "}
              <i className="fa-solid fa-sun sun"></i>
            </p>
            <p>
              <span>Pacientes em cuidado :</span> 3
            </p>
            <p>
              <span>Status : </span> Em turno{" "}
              <i className="fa-solid fa-check check"></i>
            </p>
          </div>
          <div className="caregiver-box-links">
            <div className="details" style={{ backgroundColor: "#b63714ff" }}>
              <a>
                <i className="fa-solid fa-eye"></i>Ver mais detalhes
              </a>
            </div>
            <div className="edit" style={{ backgroundColor: "#2f428dff" }}>
              <a>
                <i className="fa-solid fa-pen"></i>Editar
              </a>
            </div>
            <div className="contact" style={{ backgroundColor: "#3e7639ff" }}>
              <a>
                {" "}
                <i className="fa-solid fa-phone"></i> Entrar em contato
              </a>
            </div>
          </div>
        </div>
        <div className="caregiver-box">
          <div className="caregiver-image">
            <img src={cgimg}></img>
          </div>
          <div className="caregiver-box-content">
            <p>
              <span>Nome : </span>Alberto Miguel
            </p>
            <p>
              <span>Turno : </span> Manhã{" "}
              <i className="fa-solid fa-sun sun"></i>
            </p>
            <p>
              <span>Pacientes em cuidado :</span> 3
            </p>
            <p>
              <span>Status : </span> Em turno{" "}
              <i className="fa-solid fa-check check"></i>
            </p>
          </div>
          <div className="caregiver-box-links">
            <div className="details" style={{ backgroundColor: "#b63714ff" }}>
              <a>
                <i className="fa-solid fa-eye"></i>Ver mais detalhes
              </a>
            </div>
            <div className="edit" style={{ backgroundColor: "#2f428dff" }}>
              <a>
                <i className="fa-solid fa-pen"></i>Editar
              </a>
            </div>
            <div className="contact" style={{ backgroundColor: "#3e7639ff" }}>
              <a>
                {" "}
                <i className="fa-solid fa-phone"></i> Entrar em contato
              </a>
            </div>
          </div>
        </div>
        <div className="caregiver-box">
          <div className="caregiver-image">
            <img src={cgimg}></img>
          </div>
          <div className="caregiver-box-content">
            <p>
              <span>Nome : </span>Alberto Miguel
            </p>
            <p>
              <span>Turno : </span> Manhã{" "}
              <i className="fa-solid fa-sun sun"></i>
            </p>
            <p>
              <span>Pacientes em cuidado :</span> 3
            </p>
            <p>
              <span>Status : </span> Em turno{" "}
              <i className="fa-solid fa-check check"></i>
            </p>
          </div>
          <div className="caregiver-box-links">
            <div className="details" style={{ backgroundColor: "#b63714ff" }}>
              <a>
                <i className="fa-solid fa-eye"></i>Ver mais detalhes
              </a>
            </div>
            <div className="edit" style={{ backgroundColor: "#2f428dff" }}>
              <a>
                <i className="fa-solid fa-pen"></i>Editar
              </a>
            </div>
            <div className="contact" style={{ backgroundColor: "#3e7639ff" }}>
              <a>
                {" "}
                <i className="fa-solid fa-phone"></i> Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaregiverHome;
