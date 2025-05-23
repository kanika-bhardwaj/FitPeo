import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import { anatomyIndicators } from '../data/anatomyData';
import { healthCards } from '../data/healthCards';

const DashboardOverview = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <AnatomySection indicators={anatomyIndicators} />
      </div>
      <div className="col-md-6">
        <HealthStatusCards cards={healthCards} />
      </div>
    </div>
  );
};

export default DashboardOverview;