import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from '@mui/material/Link';

const Banner = (): JSX.Element => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const isXlDown = useMediaQuery(theme.breakpoints.down('xl'), {
    defaultMatches: true,
  });
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      height: '100%',
      width: '100%',
      paddingBottom: isLg ? '15vw' : '14vw',
    },
    whitePaperButton: {
      fontSize: isXl ? '28px' : isMd ? '14px' : '18px',
      height: isXl ? 80 : 49,
      width: isXl ? 260 : isMd ? 209 : 160,
      background: 'linear-gradient(180deg, #AA38DD 0%, #CD46EB 100%)',
      boxShadow:
        '-0.990542px 14.1654px 28.4px rgba(49, 14, 42, 0.422), inset 0.422631px -6.04391px 6.05867px #AA38DD, inset -0.422631px 6.04391px 6.05867px #AA38DD',
      borderRadius: '100px',
      variant: 'contained',
      color: 'white',
      size: 'medium',
      paddingTop: '15px',
    },
    joinTelegramButton: {
      fontSize: isXl ? '28px' : isMd ? '14px' : '18px',
      height: isXl ? 80 : 49,
      width: isXl ? 260 : isMd ? 209 : 160,
      background: 'linear-gradient(180deg, #40B3E0 100%, #40B3E0 100%)',
      boxShadow:
        '-0.990542px 14.1654px 28.4px rgba(49, 14, 42, 0.422), inset 0.422631px -6.04391px 6.05867px #40B3E0, inset -0.422631px 6.04391px 6.05867px #32AFE0',
      borderRadius: '100px',
      variant: 'contained',
      color: 'white',
      size: 'medium',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '15px',
    },
    title: {
      textAlign: 'center',
      color: 'white',
      textShadow: '0px 4px 0px rgba(0, 0, 0, 0.7)',
      fontSize: isXl ? '102px' : isMd ? '28px' : '48px',
      whiteSpace: 'nowrap',
      marginLeft: '-100%',
      marginRight: '-100%',
    },
    description: {
      textAlign: 'center',
      color: 'white',
      textShadow: '0px 4px 0px rgba(0, 0, 0, 0.7)',
      fontSize: isXl ? '72px' : isMd ? '18px' : '36px',
      whiteSpace: 'nowrap',
      marginLeft: '-100%',
      marginRight: '-100%',
    },
    socialLogo: {
      fontSize: isXl ? '34px' : isMd ? '14px' : '26px',
      color: 'white',
      marginRight: '5px',
      marginTop: '-5px',
    },
    logo: {
      alignItems: 'center',
      alignContent: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    backgroundVideo: {
      width: '100%',
      height: isLg ? '136%' : isMdUp ? '155%' : isSm ? '130%' : '125%',
      objectFit: 'cover',
      position: 'absolute',
      transform: 'translateY(-140px)',
    },
    float: {
      width: '100%',
      position: 'relative',
      zIndex: 2,
    },
  }));
  const classes = useStyles();

  return (
    <Grid container>
      <Box className={classes.container}>
        <Grid
          container
          justifyContent="center"
          paddingTop={isMd ? '60px' : '140px'}
          marginBottom={isLg ? '-140px' : isMdUp ? '-20px' : '0'}
        >
          <Grid container justifyContent="center" position="relative">
            <video
              id="background-video"
              poster="/bg/banner.png"
              muted
              loop
              autoPlay
              className={classes.backgroundVideo}
            >
              <source src="/bg/banner.mp4" type="video/mp4" />
              <img
                src="/bg/banner.png"
                title="Your browser does not support the <video> tag"
              />
            </video>
            <Grid
              item
              order={isMd ? 2 : 1}
              xs={6}
              md={3}
              alignSelf="flex-end"
              className={classes.float}
            >
              <video
                id="preview-video"
                poster="/banner/cover_left.png"
                width="110%"
                muted={true}
                loop={true}
                autoPlay={true}
                data-aos={'fade-up'}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                <source src="/banner/cover_left.webm" type="video/mp4" />
                <img
                  src="/banner/cover_left.png"
                  title="Your browser does not support the <video> tag"
                />
              </video>
            </Grid>
            <Grid
              item
              order={isMd ? 1 : 2}
              xs={8}
              md={6}
              className={classes.float}
            >
              <Grid
                container
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                data-aos-delay="1000"
              >
                <Grid container flexDirection="column" alignItems="center">
                  <img
                    width="55%"
                    src="/banner/logo.png"
                    className={classes.logo}
                    alt="AniFi World Logo"
                  />
                </Grid>
                <Grid container flexDirection="column" alignItems="center">
                  <Typography className={classes.title}>
                    Not Just A GameFi
                  </Typography>
                  <Typography className={classes.description}>
                    Bet, Farm, Play and Earn
                  </Typography>
                  <Grid
                    container
                    flexDirection={isMd ? 'column' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    marginTop="10px"
                  >
                    <Grid item>
                      <Link
                        href="https://pancakeswap.finance/swap?outputCurrency=0x4c161d6Cf0ec884141c44c852510Ff5B1b2D5092"
                        target="_blank"
                        underline="none"
                      >
                        <Button className={classes.whitePaperButton}>
                          Buy $ANIFI
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        href="https://game.anifi.io/"
                        target="_blank"
                        underline="none"
                      >
                        <Button className={classes.joinTelegramButton}>
                          Mint NFTs
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              order={3}
              xs={6}
              md={3}
              alignSelf="flex-end"
              className={classes.float}
            >
              <video
                id="preview-video"
                poster="/banner/cover_right.png"
                width="100%"
                muted={true}
                loop={true}
                autoPlay={true}
                data-aos={'fade-up'}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                <source src="/banner/cover_right.webm" type="video/mp4" />
                <img
                  src="/banner/cover_right.png"
                  title="Your browser does not support the <video> tag"
                />
              </video>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Banner;
