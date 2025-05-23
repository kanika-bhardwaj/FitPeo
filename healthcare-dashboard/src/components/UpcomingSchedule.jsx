import { upcomingAppointments } from '../data/upcomingAppointments';

const UpcomingSchedule = () => {
  return (
    <div className="card p-3 mt-4">
      <h5>Upcoming Schedule</h5>
      <ul>
        {upcomingAppointments.map((item, idx) => (
          <li key={idx}>{item.time} - {item.patient}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;