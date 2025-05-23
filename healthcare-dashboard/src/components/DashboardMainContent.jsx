import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div>
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </div>
  );
};

export default DashboardMainContent;