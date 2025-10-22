import "../style.css";
import { useState } from "react";
import Logo from "../../assets/logo.png";

function SideBar(){
const [select, setSelect] = useState<number | null>(null);
  const liItens = [
    "Lorem ipsum",
    "Dolor sit amet",
    "Amet ipsum lorem",
    "Gerenciar Cuidadores",
    "Ipsum amet ",
    "Gdaer Opsum"
  ];
  const iclass = [
    "fa-solid fa-envelope",
    "fa-solid fa-pen",
    "fa-solid fa-folder",
    "fa-solid fa-gear",
    "fa-solid fa-star",
    "fa-solid fa-calendar-days"
  ];
  const liLinks = [
    "",
    "",
    "",
    "/caregiver-home",
    "",
    ""
  ]
  return (
  
      <div className="side-bar">
        <div className="sidebar-logo">
          <img src={Logo}></img>
        </div>
        <div className="sidebar-content">
          <ul>
            {liItens.map((item, index) => (
              <li
                className={select === index ? "select" : ""}
                onClick={() => {
                  setSelect(index);
                }}
              >
                <a key={index} href={liLinks[index]}>
                  {" "}
                  <i className={iclass[index]}></i>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <a className="view-user-button" href="/home">Visualizar usuários</a>
            <a className="new-user-button" href="/register-pacient">Cadastrar Novo Paciente</a>
          </div>
        </div>
      </div>

     
   
  );
}

export default SideBar;