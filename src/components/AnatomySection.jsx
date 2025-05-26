import {healthStatusCards} from "../data/healthStatusCards"
import humanBodyImg from '../assets/human-body-frontal.jpg';

const AnatomySection = () => (
  <div className="anatomy-section" style={{ display:'flex', flexDirection:'row',maxWidth: '250px' }}>
      <div>
        <img src={humanBodyImg} wdith="200" height="200"/>
      </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem',flexWrap:'wrap' }}>
      {healthStatusCards.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap:'wrap',
            gap: '0.3rem',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>{item.part}</div>
          
          <div
            style={{
              background: '#eee',
              borderRadius: '8px',
              height: '12px',
              width: '200px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: item.color || 'red',
                width: `${item.percentage}%`,
                height: '100%',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AnatomySection;