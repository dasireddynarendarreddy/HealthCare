const SimpleAppointmentCard = ({ title, time }) => (
  <div className="simple-card">
    <span className="dot-icon">🟢</span>
    <div className="cards">
      <h6>{title}</h6> 
      <p>{time}</p>
    </div>
  </div>
);

export default SimpleAppointmentCard;

