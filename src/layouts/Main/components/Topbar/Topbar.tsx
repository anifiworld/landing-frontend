import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from '@mui/material/Link';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleDrawerOpen: () => void;
  pages: {
    home: PageItem;
    docs: PageItem;
    community: PageItem;
    pitchDeck: PageItem;
    faq: PageItem;
  };
  colorInvert?: boolean;
}

interface NavItemsProps {
  id: string;
  title: string;
  url?: string;
  internal: boolean;
}

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
  {
    id: 'dao',
    title: 'DAO',
    url: 'https://snapshot.org/#/anifi.eth',
    internal: false,
  },
];

const Topbar = ({
  handleDrawerOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const betweenMdLg = useMediaQuery(theme.breakpoints.between('md', 'lg'), {
    defaultMatches: true,
  });
  const between1100Lg = useMediaQuery(theme.breakpoints.between(1100, 'lg'), {
    defaultMatches: true,
  });
  const between1600_xl = useMediaQuery(theme.breakpoints.between(1600, 'xl'), {
    defaultMatches: true,
  });
  const is1440 = useMediaQuery(theme.breakpoints.down(1440), {
    defaultMatches: true,
  });
  const is1600 = useMediaQuery(theme.breakpoints.down(1600), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.down('lg'), {
    defaultMatches: true,
  });
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      height: isXl ? '80px' : '53px',
      backgroundImage: `url(${'/navbar/navbar.svg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '98% 100%',
      backgroundPosition: 'center center',
    },
    logoTextContainer: {
      marginTop: '2px',
      marginLeft: isXl
        ? '120px'
        : isMd
        ? '25px'
        : betweenMdLg
        ? '40px'
        : '70px',
    },
    textButton: {
      padding: 0,
      backgroundColor: 'transparent',
      color: 'white',
      variant: 'contained',
      component: 'a',
      target: 'blank',
    },
    textStroke: {
      left: 0,
      right: 0,
      marginTop: 4,
      fontSize: isXl ? '36px' : isMd ? '14px' : '24px',
      lineHeight: isXl ? '71px' : '50px',
      position: 'absolute',
      WebkitTextStroke: `${isMd ? '5px' : '5px'} #5E207F`,
      filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.35))',
    },
    text: {
      left: 0,
      right: 0,
      marginTop: 4,
      fontSize: isXl ? '36px' : isMd ? '14px' : '24px',
      lineHeight: isXl ? '71px' : '50px',
      position: 'absolute',
    },
    textContainer: {
      width: isXl ? '250px' : '154px',
      top: 0,
      bottom: 0,
      position: 'absolute',
    },
    buttonContainer: {
      marginRight: '100px',
    },
  }));
  const classes = useStyles();

  const handlePlaySoon = () => {
    window.open('https://dapp.anifi.io/', '_blank');
    // console.log('play soon');
  };
  const handleMenu = () => handleDrawerOpen();

  return (
    <Box className={classes.container}>
      <Grid container justifyContent="space-between">
        <Grid item xs={2}>
          <Box className={classes.logoTextContainer}>
            <Link href="./">
              <img height="65px" src="/navbar/logo_text.png" alt="Logo Home" />
            </Link>
          </Box>
        </Grid>
        {!isMd && (
          <Grid
            container
            item
            flexDirection="row"
            xs={7}
            gap={
              between1600_xl ? 6 : between1100Lg ? 3 : is1600 ? 2 : isLg ? 1 : 8
            }
          >
            {navItems.map(({ id, title, url, internal }: NavItemsProps) => (
              <NavItem
                key={id}
                title={title}
                id={id}
                url={url}
                internal={internal}
              />
            ))}
          </Grid>
        )}
        <Grid
          item
          xs={3}
          textAlign="end"
          paddingRight={isSm ? '120px' : '80px'}
        >
          <Button
            className={classes.textButton}
            onClick={isMd ? handleMenu : handlePlaySoon}
          >
            <Image
              width={isXl ? '300px' : isMd ? '86px' : '153px'}
              height={isXl ? '110px' : isMd ? '70px' : '71px'}
              src={isMd ? '/navbar/play_soon_sm.png' : '/navbar/play_soon.svg'}
              layout="fixed"
              quality={100}
              priority
            />
            <Box className={classes.textContainer}>
              <Typography className={classes.textStroke}>
                {isMd ? '☰ MENU' : 'Lotto'}
              </Typography>
              <Typography className={classes.text}>
                {isMd ? '☰ MENU' : 'Lotto'}
              </Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Topbar;
