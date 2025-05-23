import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', apps: 3 },
  { day: 'Tue', apps: 1 },
  { day: 'Wed', apps: 4 },
  { day: 'Thu', apps: 2 },
  { day: 'Fri', apps: 5 },
];

const ActivityFeed = () => {
  return (
    <div className="card p-3 mt-4">
      <h5>Activity</h5>
      <BarChart width={300} height={150} data={data}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Bar dataKey="apps" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ActivityFeed;