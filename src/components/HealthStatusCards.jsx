const HealthStatusCards = () => {
  const cards = [
    { title: "Lungs", status: "Critical", date: "21 Oct" },
    { title: "Teeth", status: "Watch", date: "22 Oct" },
    { title: "Bone", status: "Check", date: "23 Oct" },
  ];

  return (
    <div className="health-cards">
      {cards.map((card, index) => (
        <div className="health-card" key={index}>
          <h4>{card.title}</h4>
          <p>Status: {card.status}</p>
          <small>{card.date}</small>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
