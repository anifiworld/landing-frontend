import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const System = (): JSX.Element => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const is1600 = useMediaQuery(theme.breakpoints.down(1600), {
    defaultMatches: true,
  });
  const isXxl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: isMdDown
        ? '-120px'
        : is1600
        ? '-80px'
        : isXl
        ? '-130px'
        : '-100px',
      paddingTop: '140px',
      paddingBottom: '140px',
      width: '100%',
      height: '100%',
      backgroundImage: isSm ? 'url(/bg/system_sm.png)' : 'url(/bg/system.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      zIndex: 3,
    },
    title: {
      color: 'white',
      fontSize: isXl ? '64px' : isMdDown ? '24px' : '36px',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
    },
    description: {
      color: 'white',
      fontSize: isXl ? '48px' : isMdDown ? '18px' : '20px',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
    },
  }));
  const classes = useStyles();

  return (
    <Grid container>
      <Box className={classes.container}>
        <Grid
          container
          item
          xs={12}
          gap={4}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            xs={9}
            md={4}
            order={isMd ? 1 : 2}
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Typography className={classes.title}>Rarity System</Typography>
            <Typography className={classes.description}>
              Each character can be any rarity from Commom, Rare, Epic, to
              Legend. So every charater is good in their own way.
            </Typography>
          </Grid>
          <Grid
            item
            xs={9}
            md={4}
            order={isMd ? 2 : 1}
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <img
              src="/system/rarity.png"
              width="100%"
              alt="AniFi World Rarity"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          gap={4}
          justifyContent="space-around"
          alignItems="center"
          paddingTop="120px"
        >
          <Grid
            container
            item
            xs={9}
            md={4}
            justifyContent="center"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Box width="80%">
              <img
                src="/system/level.png"
                width="100%"
                alt="AniFi World Leveling"
              />
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={9}
            md={4}
            justifyContent="center"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Box width={isMd ? '80%' : '100%'}>
              <Typography className={classes.title}>Leveling</Typography>
              <Typography className={classes.description}>
                Farm and upgrade your characters to make a stronger team.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          gap={4}
          justifyContent="space-around"
          alignItems="center"
          paddingTop="120px"
        >
          <Grid
            item
            xs={9}
            md={4}
            order={isMd ? 1 : 2}
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Typography className={classes.title}>Marketplace</Typography>
            <Typography className={classes.description}>
              Most in game items like characters and equipment are tradable
              NFT’s. Players can buy and sell these NFT’s through our
              marketplace.
            </Typography>
          </Grid>
          <Grid
            item
            xs={9}
            md={4}
            order={isMd ? 2 : 1}
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <img
              src="/system/marketplace.png"
              width="100%"
              alt="AniFi World Market Place"
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default System;
