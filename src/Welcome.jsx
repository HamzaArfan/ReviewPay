import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login');
  };
  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'radial-gradient(862.98% 189.02% at 92.82% 100%, #182B53 3.09%, #4D6F8F 39.35%, #DB005F 100%)',
      padding: '20px'
    },
    text: {
      fontFamily: 'GeneralSansSemibold',
      color: 'white',
      fontSize: '40px',
      textAlign: 'center',
      maxWidth: '600px',
      marginBottom: '32px'
    },
    button: {
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 32px',
      cursor: 'pointer',
      fontFamily: 'GeneralSansMedium',
      fontSize: '16px',
      transition: 'transform 0.2s ease',
      ':hover': {
        transform: 'scale(1.05)'
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        Welcome to Review Pay! Get genuine insights from real people, just like you
      </h1>
      <button 
        onClick={handleContinue}
        className="bg-white border-none rounded-lg px-8 py-3 cursor-pointer text-base font-medium transition-transform hover:scale-105"
      >
        Continue
      </button>
    </div>
  );
};

export default WelcomePage;