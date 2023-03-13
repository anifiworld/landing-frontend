import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';

const GettingStarted = (): JSX.Element => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const between414_md = useMediaQuery(theme.breakpoints.between(414, 'md'), {
    defaultMatches: true,
  });
  const betweenXs_414 = useMediaQuery(theme.breakpoints.between('xs', 414), {
    defaultMatches: true,
  });
  const is414 = useMediaQuery(theme.breakpoints.down(414), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.down('lg'), {
    defaultMatches: true,
  });
  const between1440Xl = useMediaQuery(theme.breakpoints.between(1440, 'xl'), {
    defaultMatches: true,
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: isXl
        ? '-95px'
        : betweenXs_414
        ? '-30px'
        : between414_md
        ? '-70px'
        : between1440Xl
        ? '-70px'
        : '-50px',
      paddingTop: '120px',
      paddingBottom: '12.7vw',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${
        isMd ? 'bg/getting_started_sm.png' : 'bg/getting_started.png'
      })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      zIndex: 1,
    },
    title: {
      position: 'absolute',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      paddingTop: '5px',
      fontSize: is414
        ? '18px'
        : isSm
        ? '22px'
        : isMd
        ? '32px'
        : isLg
        ? '28px'
        : isXl
        ? '36px'
        : '36px',
      filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.35))',
      background:
        'linear-gradient(180deg, #6e02bd 0%, #CB1DFB 100%), linear-gradient(0deg, #000 20%, #000 20%)',
      WebkitBackgroundClip: 'text',
      WebkitTextStroke: '6px transparent',
    },
    infoContainer: {
      width: isMd ? '80%' : '85%',
      height: '100%',
      backgroundImage: 'url(/getting_started/info_container.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    },
    heroContainer: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
    },
    textContainer: {
      position: 'absolute',
      width: '100%',
      top: 60,
    },
    infoTitle: {
      color: 'white',
      fontSize: isMd ? '5vw' : '2vw',
      textShadow: '0px 4px 0px rgba(0, 0, 0, 0.27)',
      background:
        'linear-gradient(180deg, #6e02bd 0%, #CB1DFB 100%), linear-gradient(0deg, #000 20%, #000 20%)',
      WebkitBackgroundClip: 'text',
      WebkitTextStroke: '6px transparent',
    },
    infoText: {
      width: '60%',
      margin: '0 auto',
      color: 'white',
      fontWeight: '400',
      fontSize: isMd ? '3vw' : '1.1vw',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.3)',
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
          alignItems="center"
          justifyContent="center"
          data-aos={'fade-up'}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1200"
        >
          <Grid item xs={8} md={4}>
            <Image
              width={1}
              height={1 / 5}
              src="/scroll.svg"
              layout="responsive"
              quality={100}
              priority
            />
          </Grid>
          <Typography className={classes.title}>Getting Started</Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          flexDirection={isMd ? 'row' : 'column'}
          justifyContent="center"
          paddingTop={isMd ? '40vw' : '14vw'}
          data-aos={'fade-up'}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          <Grid
            container
            item
            xs={11}
            md={12}
            rowGap="24vw"
            justifyContent="center"
          >
            <Grid container item xs={11} md={4} justifyContent="center">
              <Box className={classes.infoContainer}>
                <Grid
                  container
                  gap={isLg ? 0 : 1}
                  textAlign="center"
                  justifyContent="center"
                  style={{
                    transform: isMd ? 'translateY(-20vw)' : 'translateY(-9vw)',
                  }}
                >
                  <Grid
                    item
                    xs={7}
                    style={{
                      transform: isMd ? '' : 'translateY(1vw)',
                    }}
                  >
                    <img
                      src="/getting_started/hero_left.png"
                      width="120%"
                      alt="AniFi getting start build team"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.infoTitle}>
                      Build Team
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.infoText}>
                      Get the starter heroes then build your team of up to 5
                      heroes.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              container
              item
              xs={11}
              md={4}
              justifyContent="center"
              style={{
                transform: isMd ? '' : 'translateY(60px)',
              }}
            >
              <Box className={classes.infoContainer}>
                <Grid
                  container
                  gap={isLg ? 0 : 0}
                  textAlign="center"
                  justifyContent="center"
                  style={{
                    transform: isMd ? 'translateY(-18vw)' : 'translateY(-6vw)',
                  }}
                >
                  <Grid
                    item
                    xs={7}
                    style={{
                      transform: isMd
                        ? 'translate(2vw, -1vw)'
                        : 'translate(1vw, -1vw)',
                    }}
                  >
                    <img
                      src="/getting_started/hero_center.png"
                      width="75%"
                      alt="AniFi getting start build strategy"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.infoTitle}>
                      Create Strategy
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.infoText}>
                      Select your heroes and set your teams position for the
                      fight.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid container item xs={11} md={4} justifyContent="center">
              <Box className={classes.infoContainer}>
                <Grid
                  container
                  gap={isLg ? 0 : 0}
                  textAlign="center"
                  justifyContent="center"
                  style={{
                    transform: isMd ? 'translateY(-20vw)' : 'translateY(-7vw)',
                  }}
                >
                  <Grid item xs={7}>
                    <img
                      src="/getting_started/hero_right.png"
                      width="100%"
                      alt="AniFi getting start build strategy"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.infoTitle}>
                      Fight to Earn
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography className={classes.infoText}>
                      Fight against monsters to earn then advance to higher
                      levels and earn even more!
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default GettingStarted;
