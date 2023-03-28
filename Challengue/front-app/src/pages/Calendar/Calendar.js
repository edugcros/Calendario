import React from "react";
import useFetch from "../../Hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const DAYS_OF_WEEK = ["LU", "MA", "MI", "JU", "VI", "SAB", "DOM"];

const Calendar = () => {
  const location = useLocation();
  const [year, setYear] = useState(location.state.year);
  const [month, setMonth] = useState(new Date().getMonth());

  const { data } = useFetch(`feriados?year=${year}`);

  const today = new Date();
  const currentYear = today.getFullYear();
  

  //Función de ayuda para obtener el número de días en un mes y año determinados
  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  

  //Función de ayuda para formatear la fecha en una cadena en el formato de "YYYY-MM-DD"
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // matriz de todos los días del mes actual para representar el calendario
  const daysInMonth = getDaysInMonth(month, currentYear);
  const days = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(currentYear, month, i + 1)
  );


  //matriz de todos los eventos en la matriz de datos
  const events = data.flatMap((item) => {
    const date = new Date(currentYear, item.mes - 1, item.dia);
    return {
      date: formatDate(date),
      reason: item.motivo,
    };
  });
  

  return (
    <>
      <div className="calendar">
        <div className="header">
          <button className="header-button" onClick={() => setMonth(month - 1)}>&lt;</button>
          <h2>
            {new Date(year, month).toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button className="header-button" onClick={() => setMonth(month + 1)}>&gt;</button>
        </div>
        <div className="weekdays">
          {DAYS_OF_WEEK.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {days.map((date) => {
            const dayOfMonth = date.getDate();
            const isToday = date.toDateString() === today.toDateString();

            //Filtra los eventos para mostrar solo los del día actual de la iteración
            const dayEvents = events.filter(
              (event) => event.date === formatDate(date)
            );

            return (
              <div
                key={date}
                className={`day day-${dayOfMonth} ${isToday ? "today" : ""}`}
              >
                <div className="day-number">{dayOfMonth}</div>
                <div className="day-events">
                  {dayEvents.map((event) => (
                    <div key={event.reason} className="day-event">
                      {event.reason}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Calendar;
