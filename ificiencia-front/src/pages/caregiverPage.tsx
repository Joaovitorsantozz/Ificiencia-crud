import SideBar from "./components/sidebar";
import profilePhoto from "../assets/medico2.png";
function CaregiverPage() {
  return (
    <section className="caregiverpg-section">
      <SideBar></SideBar>
      <div className="cgpg-container">
        <div className="cgpg-left">
          <div className="cl-profile">
            <img src={profilePhoto}></img>

            <h2 className="name">Roberto dos Santos</h2>
            <p>(Técnico em Enfermagem)</p>

            <span>
              <b>Status</b>: Ativo 🟢
            </span>

            <a className="msg">
              <i className="fa-solid fa-message"></i>Enviar Mensagem
            </a>

            <h2 className="personal-inf-title">
              <i className="fa-solid fa-address-card"></i>Informações Pessoais
              &gt;
            </h2>
            <p className="personal-inf">
              <span>Idade : </span> XX anos
            </p>
            <p className="personal-inf">
              <span>CPF :</span> XXX-XXX-XXX-YY
            </p>
            <p className="personal-inf">
              <span>Email :</span> user@email.com
            </p>
            <p className="personal-inf">
              <span>Endereço :</span> Rua ABC 128 Vila DEF
            </p>
            <p className="personal-inf">
              <span>Data de admissão :</span> 20/10/2019
            </p>
          </div>
        </div>
        <div className="cgpg-right">
          <div className="sections-container">
            <div className="section pacient-history" style={{ width: "100%" }}>
              <h2>
                Histórico de pacientes <i className="fa-solid fa-clock"></i>
              </h2>

              <div className="pct-box">
                <p>
                  <span>Nome : </span> Claudio Almeida
                </p>
                <p>
                  <span>Período Cuidado</span> : (jan ~ abril 2024)
                </p>
                <a href="/pacient-page">
                  {" "}
                  <i className="fa-solid fa-pen"></i> Ver detalhes{" "}
                </a>
              </div>
              <div className="pct-box">
                <p>
                  <span>Nome : </span> Claudio Almeida
                </p>
                <p>
                  <span>Período Cuidado</span> : (jan ~ abril 2024)
                </p>
                <a href="/pacient-page">
                  {" "}
                  <i className="fa-solid fa-pen"></i> Ver detalhes{" "}
                </a>
              </div>
              <div className="pct-box">
                <p>
                  <span>Nome : </span> Claudio Almeida
                </p>
                <p>
                  <span>Período Cuidado</span> : (jan ~ abril 2024)
                </p>
                <a href="/pacient-page">
                  {" "}
                  <i className="fa-solid fa-pen"></i> Ver detalhes{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="caregiver-performance">
            <h2 className="cg-title">
              Desempenho do Cuidador <i className="fa-solid fa-bullseye"></i>
            </h2>
            {returnField("Pontualidade", "90%", "rgb(210,31,31)", 9.8)}
            {returnField("Concluir Tarefas", "86%", "rgb(70,210,31)", 8.6)}
            {returnField("Empatia", "95%", "rgb(255,179,0)", 9.5)}
            {returnField("Trabalho em Equipe", "89%", "rgb(145,61,136)", 8.9)}
            {returnField("Organização", "83%", "rgb(36,180,170)", 8.3)}
            {returnField("Iniciativa", "78%", "rgb(120,170,60)", 8.0)}
           
            {returnField("Relação com Idosos", "93%", "rgb(80,130,250)", 9.3)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaregiverPage;

function returnField(
  name: string,
  width: string,
  color: string,
  grade: number
) {
  return (
    <div
      className="caregiver-field"
      style={{ width: "100%", height: "16px", marginTop: "25px" }}
    >
      <p style={{ width: "25%" }}>{name} : </p>
      <div
        className="field-grade"
        style={{
          width: width,
          height: "60%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: color,
            height: "100%",
          }}
        ></div>
      </div>
      <span>({grade}/10)</span>
    </div>
  );
}
