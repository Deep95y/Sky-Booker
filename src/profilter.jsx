import React, { useState } from 'react';
import Switch from 'react-switch';

const Profilter = () => {
  const [isPowerOn, setIsPowerOn] = useState(false);

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

  return (
    <div style={styles.container}>
      <div style={styles.switchContainer}>
        <Switch
          onChange={togglePower}
          checked={isPowerOn}
          offColor="#ff0000"
          onColor="#00ff00"
          uncheckedIcon={false}
          checkedIcon={false}
          height={17}
          width={40}
        />
      </div>
      <div style={styles.textContainer}>
        <div style={styles.textShow}>Show</div>
        <div style={styles.textProFilter}>Pro Filter</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    maxWidth: '16.875rem',
    height: '4.5rem',
    background: '#181818',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
    padding: '0.5rem',
    boxSizing: 'border-box',
    fontFamily:'sans-serif',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
  },
  switchContainer: {
    marginLeft: '1rem',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '1rem',
  },
  textShow: {
    color: '#9a9e9a',
    
  },
  textProFilter: {
    color: '#7b3e18',
    marginLeft: '0.5rem',
    fontWeight: 'bold',
  },
};

export default Profilter;
