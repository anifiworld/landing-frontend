import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Image from 'next/image';

const Roadmap = (): JSX.Element => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
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
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: '120px',
      paddingBottom: '240px',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(bg/roadmap.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
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
    phaseContainer: {
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/roadmap/phase_container.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    },
    phaseTitle: {
      fontFamily: 'Mitr',
      color: 'white',
      fontSize: isMd ? '4vw' : '0.8vw',
      filter: 'drop-shadow(0px 2px 3px rgba(128, 27, 52, 0.6))',
      background: '#801B34',
      WebkitBackgroundClip: 'text',
      WebkitTextStroke: '5px transparent',
      transform: isMd ? 'translateY(2vw)' : 'translateY(0.5vw)',
    },
    phaseTitleNo: {
      fontFamily: 'Mitr',
      color: 'white',
      fontSize: isMd ? '7vw' : '1.8vw',
      fontWeight: 'bold',
      filter: 'drop-shadow(0px 2px 3px rgba(128, 27, 52, 0.6))',
      background: '#801B34',
      WebkitBackgroundClip: 'text',
      WebkitTextStroke: '5px transparent',
    },
    phaseText: {
      width: '60%',
      color: 'white',
      fontWeight: '400',
      fontSize: isMd ? '4vw' : '0.9vw',
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
          <Typography className={classes.title}>Roadmap</Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          flexDirection={isMd ? 'column' : 'row'}
          justifyContent="center"
          paddingTop={isMd ? '12vw' : '3vw'}
          data-aos={'fade-up'}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          <Grid
            container
            item
            xs={12}
            md={2}
            rowGap="24vw"
            justifyContent="center"
          >
            <Grid container item xs={10} md={12} justifyContent="center">
              <Box className={classes.phaseContainer}>
                <Grid
                  container
                  item
                  xs={12}
                  gap={isLg ? 0 : 1}
                  textAlign="center"
                >
                  <Grid
                    item
                    xs={12}
                    paddingY={isMd ? '21vw' : '4vw'}
                    textAlign="left"
                    justifyContent="center"
                  >
                    <Grid
                      item
                      xs={12}
                      textAlign="center"
                      style={{
                        transform: isMd
                          ? 'translate(-0.2vw,-12vw)'
                          : 'translate(-0.1vw, -1.5vw)',
                      }}
                    >
                      <Typography className={classes.phaseTitle}>
                        PHASE
                      </Typography>
                      <Typography className={classes.phaseTitleNo}>
                        1
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        transform: isMd
                          ? 'translate(3vw,-6vw)'
                          : 'translate(1vw, -1vw)',
                      }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Seed fundraising
                        </Typography>
                      </Grid>
                      <Grid container justifyContent="center" gap={1}>
                        <Box>
                          <Image
                            width="6px"
                            height="6px"
                            src="/roadmap/bullet.png"
                            layout="fixed"
                            quality={100}
                            priority
                          />
                        </Box>
                        <Typography className={classes.phaseText}>
                          Concept and Assets Building
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={2}
            rowGap="24vw"
            justifyContent="center"
            style={{
              transform: isMd ? '' : 'translateY(120px)',
            }}
          >
            <Grid container item xs={10} md={12} justifyContent="center">
              <Box className={classes.phaseContainer}>
                <Grid
                  container
                  item
                  xs={12}
                  gap={isLg ? 0 : 1}
                  textAlign="center"
                >
                  <Grid
                    item
                    xs={12}
                    paddingY={isMd ? '21vw' : '4vw'}
                    textAlign="left"
                    justifyContent="center"
                  >
                    <Grid
                      item
                      xs={12}
                      textAlign="center"
                      style={{
                        transform: isMd
                          ? 'translate(-0.2vw, -9vw)'
                          : 'translate(-0.1vw, -1.5vw)',
                      }}
                    >
                      <Typography className={classes.phaseTitle}>
                        PHASE
                      </Typography>
                      <Typography className={classes.phaseTitleNo}>
                        2
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        transform: isMd
                          ? 'translate(3vw, -4vw)'
                          : 'translate(1vw, -1vw)',
                      }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Private fundraising
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Game Trailers
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          System Building
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Auditing
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={2}
            rowGap="24vw"
            justifyContent="center"
          >
            <Grid container item xs={10} md={12} justifyContent="center">
              <Box className={classes.phaseContainer}>
                <Grid
                  container
                  item
                  xs={12}
                  gap={isLg ? 0 : 1}
                  textAlign="center"
                >
                  <Grid
                    item
                    xs={12}
                    paddingY={isMd ? '21vw' : '4vw'}
                    textAlign="left"
                    justifyContent="center"
                  >
                    <Grid
                      item
                      xs={12}
                      textAlign="center"
                      style={{
                        transform: isMd
                          ? 'translate(-0.2vw,-12vw)'
                          : 'translate(-0.1vw, -1.5vw)',
                      }}
                    >
                      <Typography className={classes.phaseTitle}>
                        PHASE
                      </Typography>
                      <Typography className={classes.phaseTitleNo}>
                        3
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        transform: isMd
                          ? 'translate(3vw, -4vw)'
                          : 'translate(1vw, -1vw)',
                      }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Closed Beta Launch
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Public Sale &amp; IDO
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={11}
                        justifyContent="center"
                        gap={1}
                        style={{
                          transform: isMd
                            ? 'translateX(1.1vw)'
                            : 'translateX(0.3vw)',
                        }}
                      >
                        <Box>
                          <Image
                            width="6px"
                            height="6px"
                            src="/roadmap/bullet.png"
                            layout="fixed"
                            quality={100}
                            priority
                          />
                        </Box>
                        <Typography className={classes.phaseText}>
                          Soft Launch with PVE
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={2}
            rowGap="24vw"
            justifyContent="center"
            style={{
              transform: isMd ? '' : 'translateY(120px)',
            }}
          >
            <Grid container item xs={10} md={12} justifyContent="center">
              <Box className={classes.phaseContainer}>
                <Grid
                  container
                  item
                  xs={12}
                  gap={isLg ? 0 : 1}
                  textAlign="center"
                >
                  <Grid
                    item
                    xs={12}
                    paddingY={isMd ? '21vw' : '4vw'}
                    textAlign="left"
                    justifyContent="center"
                  >
                    <Grid
                      item
                      xs={12}
                      textAlign="center"
                      style={{
                        transform: isMd
                          ? 'translate(-0.2vw,-15vw)'
                          : 'translate(-0.1vw, -1.5vw)',
                      }}
                    >
                      <Typography className={classes.phaseTitle}>
                        PHASE
                      </Typography>
                      <Typography className={classes.phaseTitleNo}>
                        4
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        transform: isMd
                          ? 'translate(2vw, -6vw)'
                          : 'translate(1vw, -0.5vw)',
                      }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Marketplace Launch
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          Upgrade System
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={2}
            rowGap="24vw"
            justifyContent="center"
          >
            <Grid container item xs={10} md={12} justifyContent="center">
              <Box className={classes.phaseContainer}>
                <Grid
                  container
                  item
                  xs={12}
                  gap={isLg ? 0 : 1}
                  textAlign="center"
                >
                  <Grid
                    item
                    xs={12}
                    paddingY={isMd ? '21vw' : '4vw'}
                    textAlign="left"
                    justifyContent="center"
                  >
                    <Grid
                      item
                      xs={12}
                      textAlign="center"
                      style={{
                        transform: isMd
                          ? 'translate(-0.2vw,-12vw)'
                          : 'translate(-0.1vw, -1.5vw)',
                      }}
                    >
                      <Typography className={classes.phaseTitle}>
                        PHASE
                      </Typography>
                      <Typography className={classes.phaseTitleNo}>
                        5
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        transform: isMd
                          ? 'translate(2vw, -6vw)'
                          : 'translate(1vw, -0.5vw)',
                      }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          More characters
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          More worlds
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Image
                          width="6px"
                          height="6px"
                          src="/roadmap/bullet.png"
                          layout="fixed"
                          quality={100}
                          priority
                        />
                        <Typography className={classes.phaseText}>
                          PVP System
                        </Typography>
                      </Grid>
                    </Grid>
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

export default Roadmap;
