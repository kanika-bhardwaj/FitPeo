const HealthStatusCards = ({ cards }) => {
  return (
    <div className="row">
      {cards.map((card, idx) => (
        <div key={idx} className="col-md-6 mb-3">
          <div className="card p-3">
            <h6>{card.title}</h6>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;