import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import splashVideo from './assets/images/splash.mp4'; // Adjust the path according to your video location

const SplashScreen = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      navigate('/welcome');  // Make sure this route matches your router configuration
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      // Auto play the video when component mounts
      videoElement.play().catch(error => {
        console.log("Video autoplay failed:", error);
        // Fallback: redirect to welcome page if video fails to play
        navigate('/welcome');
      });
    }

    // Cleanup event listener
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [navigate]);

  const styles = {
    videoContainer: {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'black', // Background color while video loads
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // This will cover the entire container while maintaining aspect ratio
    }
  };

  return (
    <div style={styles.videoContainer}>
      <video 
        ref={videoRef}
        style={styles.video}
        playsInline
        muted // Most browsers require muted for autoplay
      >
        <source src={splashVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;