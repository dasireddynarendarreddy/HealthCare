import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => (
  <main className="dashboard-main">
    <div className="dashboard-top">
      <div className="left-column">
        <AnatomySection />
        <HealthStatusCards />
        <ActivityFeed />
      </div>
      <div className="right-column">
        <CalendarView />
      </div>
    </div>
    <div className="dashboard-bottom">
      <UpcomingSchedule />
    </div>
  </main>
);

export default DashboardMainContent;
