import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';

import Container from 'components/Container';
import { Drawer, Footer, ThemeModeToggler } from './components';

import pages from '../navigation';
import dynamic from 'next/dynamic';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Main = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}: Props): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = (): void => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = (): void => {
    setOpenDrawer(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const Topbar = dynamic(() => import('./components/Topbar'), {
    // eslint-disable-next-line react/display-name
    loading: () => <></>,
  });

  React.useEffect(() => {
    document.body.style.overflow = openDrawer ? 'hidden' : 'visible';
  }, [openDrawer]);

  return (
    <Box>
      <AppBar
        position={'absolute'}
        sx={{
          zIndex: 3,
          top: 0,
          backgroundColor: bgcolor,
          padding: 0,
          margin: 0,
        }}
        elevation={0}
      >
        <Topbar
          handleDrawerOpen={handleDrawerOpen}
          pages={pages}
          colorInvert={trigger ? false : colorInvert}
        />
      </AppBar>
      <Drawer open={openDrawer} handleDrawerClose={handleDrawerClose} />
      <main>
        {children}
        {/* <Divider /> */}
      </main>
      <Footer />
    </Box>
  );
};

export default Main;
