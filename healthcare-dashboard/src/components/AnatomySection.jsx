const AnatomySection = ({ indicators }) => {
  return (
    <div className="card p-3">
      <h5>Anatomy</h5>
      <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Body" />
      <ul className="mt-2">
        {indicators.map((item, idx) => (
          <li key={idx} className={`text-${item.color}`}>{item.label}: {item.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnatomySection;
