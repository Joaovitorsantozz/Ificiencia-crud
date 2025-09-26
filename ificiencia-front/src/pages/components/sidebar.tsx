import "../style.css";
import { useState } from "react";


function SideBar(){
const [select, setSelect] = useState<number | null>(null);
  const liItens = [
    "Lorem ipsum",
    "Dolor sit amet",
    "Amet ipsum lorem",
    "Sorem iud lor",
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
  return (
  
      <div className="side-bar">
        <div className="sidebar-logo">
          <h1>Logo-Teste</h1>
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
                <p key={index}>
                  {" "}
                  <i className={iclass[index]}></i>
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <a className="view-user-button" href="/">Visualizar usuários</a>
            <a className="new-user-button" href="/register-pacient">Cadastrar Novo Usuário</a>
          </div>
        </div>
      </div>

     
   
  );
}

export default SideBar;