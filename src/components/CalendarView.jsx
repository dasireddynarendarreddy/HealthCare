import { calendarMonth,calendarAppointments } from "../data/calendar"

const CalendarView = () => (
  <div className="calendar-view">
    <h4>October 2021</h4>
    <div className="calendar-grid">
      {Array.from({ length: 31 }).map((_, day) => {
        const date = `2021-10-${String(day + 1).padStart(2, "0")}`;
        const appt = calendarAppointments.find(item => item.date === date);

        return (
          <div key={day} className="calendar-day">
            <span>{day + 1}</span>
            {appt && appt.time.map((t, i) => <div key={i} className="appt-time">{t}</div>)}
          </div>
        );
      })}
    </div>
    <div className="calendar-appointments">
      {calendarAppointments.map((item, idx) => (
        <div key={idx} className="appointment-card">
          <h5>{item.type}</h5>
          <p>{item.time}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarView;
