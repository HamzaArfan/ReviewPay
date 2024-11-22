import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import splashVideo from './assets/images/splash.mp4';

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate('/welcome');
  };

  const handleError = (error) => {
    console.log("Video playback error:", error);
    navigate('/welcome');
  };

  const styles = {
    wrapper: {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'black',
    },
    playerWrapper: {
      position: 'relative',
      paddingTop: '56.25%', // 16:9 Aspect Ratio
      width: '100%',
      height: '100%',
    },
    reactPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.playerWrapper}>
        <ReactPlayer
          url={splashVideo}
          playing={true}
          muted={true}
          width="100%"
          height="100%"
          style={styles.reactPlayer}
          onEnded={handleVideoEnd}
          onError={handleError}
          playsinline
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;