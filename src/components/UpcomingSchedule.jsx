import { upcomingSchedule } from "../data/upcomingSchedule";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h4>The Upcoming Schedule</h4>
    {upcomingSchedule.map((dayGroup, idx) => (
      <div key={idx}>
        <h5>{dayGroup.day}</h5>

        {dayGroup.appointments.map((appt, i) => (
          <>
          <span>{appt.icon}</span>
          <SimpleAppointmentCard key={i} {...appt} />
          </>
        ))}
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
