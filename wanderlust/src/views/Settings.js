import React from 'react';
import EditInfoForm from '../components/EditInfoForm';

function Settings() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <header>
        <h1>Wanderlust</h1>
      </header>
      <EditInfoForm />
    </div>
  );
}

export default Settings;
