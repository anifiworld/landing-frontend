import { Box, Grid, Typography, Button, Slide, easing } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { NavItem } from '../Topbar/components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

interface Props {
  handleDrawerClose: () => void;
  open: boolean;
}

interface NavItemsProps {
  id: string;
  title: string;
  url?: string;
  internal: boolean;
}

const Drawer = ({ open, handleDrawerClose }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      position: 'fixed',
      zIndex: 1200,
      overflowY: 'scroll',
      height: '100%',
      width: '100vw',
      backgroundImage: `url(${'/drawer/bg.png'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    textButton: {
      padding: 0,
      height: '129px',
      backgroundColor: 'transparent',
      color: 'white',
      variant: 'contained',
      component: 'a',
      target: 'blank',
    },
    textStroke: {
      left: 0,
      right: 0,
      fontSize: '36px',
      lineHeight: '115px',
      position: 'absolute',
      WebkitTextStroke: '7px #5E207F',
    },
    text: {
      left: 0,
      right: 0,
      fontSize: '36px',
      lineHeight: '115px',
      position: 'absolute',
    },
    textContainer: {
      width: '278px',
      top: 0,
      bottom: 0,
      position: 'absolute',
    },
  }));
  const classes = useStyles();

  const navItems: Array<NavItemsProps> = [
    { id: 'home', title: 'Home', url: './', internal: true },
    { id: 'docs', title: 'Docs', url: 'https://docs.anifi.io', internal: false },
    {
      id: 'community',
      title: 'Community',
      url: 'https://docs.anifi.io/community',
      internal: false,
    },
    {
      id: 'contract',
      title: 'Contract',
      url: 'https://bscscan.com/token/0x4c161d6Cf0ec884141c44c852510Ff5B1b2D5092',
      internal: false,
    },
    {
      id: 'lotto',
      title: 'Lotto',
      url: 'https://dapp.anifi.io/',
      internal: false,
    },
  ];
  const containerRef = React.useRef(null);
  const [isDrawerClosing, setIsDrawerClosing] = React.useState(false);

  React.useEffect(() => {
    if (isMd) {
      handleDrawerClose();
      setIsDrawerClosing(true);
      setTimeout(() => {
        setIsDrawerClosing(false);
      }, 1000);
    }
  }, [isMd]);

  return (
    <Grid container>
      <Slide
        direction="down"
        in={open}
        container={containerRef.current}
        easing={{
          enter: easing.easeOut,
          exit: easing.easeIn,
        }}
      >
        <Box className={classes.container}>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            padding="60px"
            gap={10}
          >
            <Button onClick={handleDrawerClose}>
              <Image
                width="66px"
                height="56px"
                src="/drawer/close.png"
                layout="fixed"
                quality={100}
                priority
              />
            </Button>
            {navItems.map(({ id, title, url, internal }: NavItemsProps) => (
              <NavItem
                key={id}
                title={title}
                id={id}
                url={url}
                internal={internal}
                isDrawerClosing={isDrawerClosing}
              />
            ))}
            <Link
              href="https://dapp.anifi.io/"
              target="_blank"
              underline="none"
            >
            <Button
              className={classes.textButton}
            >
              <Image
                width={'278px'}
                height={'129px'}
                src={'/navbar/play_soon.svg'}
                layout="fixed"
                quality={100}
                priority
              />
              <Box className={classes.textContainer}>
                <Typography className={classes.textStroke}>
                  {'Lotto'}
                </Typography>
                <Typography className={classes.text}>{'Lotto'}</Typography>
              </Box>
            </Button>
              </Link>
          </Grid>
        </Box>
      </Slide>
    </Grid>
  );
};

export default Drawer;
