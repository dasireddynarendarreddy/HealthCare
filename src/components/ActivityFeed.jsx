import { weeklyActivity } from "../data/activity";



const getBarColor = (height) => {
  if (height >= 40) return 'red';
  if (height >= 25) return 'orange';
  return 'green';
};

const ActivityFeed = () => (
  <div className="activity-feed" style={{ padding: '1rem' }}>
    <h4>Activity</h4>
    <p>{weeklyActivity.summary}</p>
    <div
      className="bar-chart"
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0.5rem',
        height: '100px',
        marginTop: '1rem',
      }}
    >
      {weeklyActivity.chartBars.map((bar, idx) => (
        <div key={idx} style={{ textAlign: 'center' }}>
          <div
            className="bar"
            style={{
              height: `${bar.height}px`,
              width: '10px',
              backgroundColor: getBarColor(bar.height),
              borderRadius: '4px',
              marginBottom: '0.25rem',
              transition: 'height 0.3s',
            }}
          />
          <span style={{ fontSize: '0.75rem' }}>{bar.day}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
