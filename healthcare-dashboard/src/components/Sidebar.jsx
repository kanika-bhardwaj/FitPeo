const Sidebar = () => {
  return (
    <div className="p-3">
      <h4>Health App</h4>
      <ul className="nav flex-column">
        <li className="nav-item">Dashboard</li>
        <li className="nav-item">Patients</li>
        <li className="nav-item">Appointments</li>
      </ul>
    </div>
  );
};

export default Sidebar;