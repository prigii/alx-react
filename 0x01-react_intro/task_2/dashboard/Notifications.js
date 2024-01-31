// src/Notifications.js

import React from 'react';
import closeIcon from './images/close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const closeHandler = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={closeHandler}
      >
        <img src={closeIcon} alt="Close" style={{ width: '20px', height: '20px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
