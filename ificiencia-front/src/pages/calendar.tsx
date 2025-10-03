import { useState } from "react";
function PacientCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayInPrevMonth = new Date(year, month, 0).getDate();

  const days: { day: number; currentMonth: boolean; hasEvent: boolean }[] = [];
  const [select, setSelect] = useState<boolean | null>(null);
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: dayInPrevMonth - i,
      currentMonth: false,
      hasEvent: false,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      currentMonth: true,
      hasEvent: Math.random() < 0.3,
    });
  }

  for (let i = 0; i < days.length; i++) {
    if (days[i].currentMonth == false) {
      console.log(days[i]);
    }
  }
  while (days.length < 42) {
    days.push({
      day: days.length - (firstDay + dayInPrevMonth) + 1,
      currentMonth: false,
      hasEvent: false,
    });
  }
  return (
    <div className="calendar-container">
      <div className={`calendar-box ${select ? "short" : "long"}`}>
        <div className="calendar-nav">
          <h2>Agenda do Paciente &#x276F;</h2>
          <div className="ymd-select">
            <button className="year">Year</button>
            <button className="month">Month</button>
            <button className="day">Day</button>
          </div>

          <div className="date-select">
            <h3>View</h3>

            <select id="month">
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
            </select>
            <select id="year">
              <option value="1">2025</option>
              <option value="2">2024</option>
              <option value="3">2023</option>
            </select>
          </div>
        </div>
        <div className="calendar-days-week">
          <div className="day-week-box">
            <h2>DOM</h2>
          </div>
          <div className="day-week-box">
            <h2>SEG</h2>
          </div>
          <div className="day-week-box">
            <h2>TER</h2>
          </div>
          <div className="day-week-box">
            <h2>QUA</h2>
          </div>
          <div className="day-week-box">
            <h2>QUI</h2>
          </div>
          <div className="day-week-box">
            <h2>SEX</h2>
          </div>
          <div className="day-week-box">
            <h2>SAB</h2>
          </div>
        </div>
        <div className="calendar-days-grid">
          {days.map((d, index) => (
            <div
              key={index}
              onClick={() => {
                setSelect(!select);
              }}
              className={`calendar-day-box ${
                d.currentMonth ? "current" : "other"
              }`}
            >
              <p>{d.day}</p>
              {d.currentMonth &&
                d.hasEvent && (
                  <span
                    className={`schedule-mark ${
                      d.currentMonth ? "show" : "hide"
                    }`}
                  >
                    Consulta marcada as 18hrs
                  </span>
                )}
            </div>
          ))}
        </div>
      </div>
      <div className={`calendar-box-right ${select ? "show" : "hide"}`}>

         <h2>
          <i className="fa-regular fa-calendar"></i> Agenda para o dia dd/mm
         </h2>

         <ul>
          <li className="l1">Exame de sangue <i className="fa-solid fa-trash"></i></li>
          <li className="l2">Obstreta com Doutor Lorem Ipsum <i className="fa-solid fa-trash"></i></li>
          <li className="l3">Limpeza do recinto <i className="fa-solid fa-trash"></i></li>
         </ul>

         <a className="schedule-button">Adicionar Rotina + </a>
      </div>
    </div>
  );
}

export default PacientCalendar;
