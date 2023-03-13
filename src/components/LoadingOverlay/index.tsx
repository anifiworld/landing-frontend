import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import dynamic from 'next/dynamic';

interface Props {
  isLoaded: boolean;
}

const LoadingOverlay = ({ isLoaded }: Props): JSX.Element => {
  const useStyles = makeStyles(() => ({
    overlay: {
      position: 'fixed',
      zIndex: '4',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#110546',
      opacity: isLoaded ? 0 : 1,
      transition: isLoaded ? 'all 250ms linear 0ms' : '',
      visibility: isLoaded ? 'hidden' : 'visible',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
  const classes = useStyles();
  const OverlayContent = dynamic(() => import('./components/OverlayContent'), {
    loading: () => <></>,
  });

  return (
    <Box className={classes.overlay}>
      <OverlayContent />
    </Box>
  );
};

export default LoadingOverlay;
