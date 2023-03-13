import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Image from 'next/image';

const NFT = (): JSX.Element => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isXlDown = useMediaQuery(theme.breakpoints.down('xl'), {
    defaultMatches: true,
  });
  const isXxl = useMediaQuery(theme.breakpoints.up('xl'), {
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
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.down('lg'), {
    defaultMatches: true,
  });
  const is1100 = useMediaQuery(theme.breakpoints.down(1100), {
    defaultMatches: true,
  });
  const between900_1100 = useMediaQuery(theme.breakpoints.between(900, 1100), {
    defaultMatches: true,
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: isXxl ? '-110px' : isXl ? '-70px' : '-62px',
      paddingTop: isMd ? '120px' : '200px',
      paddingBottom: '100px',
      width: '100%',
      height: '100%',
      backgroundImage: 'url(bg/nft.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      zIndex: 2,
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
    description: {
      textAlign: 'center',
      color: 'white',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
      fontSize: is414
        ? '18px'
        : isSm
        ? '18px'
        : isMd
        ? '18px'
        : isXlDown
        ? '24px'
        : isLg
        ? '22px'
        : isXl
        ? '30px'
        : '48px',
    },
    characterContainer: {
      marginTop: '30px',
      marginBottom: '50px',
    },
  }));
  const classes = useStyles();

  const scrollCards = (
    <Grid item xs={12} overflow="scroll" paddingTop="30px">
      <img src="/nft/cards.png" height="340px" />
    </Grid>
  );

  const individualCards = (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justifyContent="center"
      paddingTop="60px"
    >
      <Grid item xs={2}>
        <Image
          width={1}
          height={1.3}
          src="/nft/card_red.png"
          layout="responsive"
          quality={100}
          priority
        />
      </Grid>
      <Grid item xs={2}>
        <Image
          width={1}
          height={1.3}
          src="/nft/card_loki.png"
          layout="responsive"
          quality={100}
          priority
        />
      </Grid>
      <Grid item xs={2}>
        <Image
          width={1}
          height={1.3}
          src="/nft/card_marsha.png"
          layout="responsive"
          quality={100}
          priority
        />
      </Grid>
      <Grid item xs={2}>
        <Image
          width={1}
          height={1.3}
          src="/nft/card_spacegreen.png"
          layout="responsive"
          quality={100}
          priority
        />
      </Grid>
      <Grid item xs={2}>
        <Image
          width={1}
          height={1.3}
          src="/nft/card_yellow.png"
          layout="responsive"
          quality={100}
          priority
        />
      </Grid>
    </Grid>
  );

  const scrollCharacters = (
    <Grid item xs={12} overflow="scroll" className={classes.characterContainer}>
      <img src="/nft/characters.png" height="369px" />
    </Grid>
  );

  const individualCharacters = (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justifyContent="center"
      className={classes.characterContainer}
    >
      <Grid item xs={2}>
        <video
          id="preview-video"
          width="100%"
          muted={true}
          loop={true}
          autoPlay={true}
        >
          <source src="/nft/cha_red.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          transform: 'translateY(40px)',
        }}
      >
        <video
          id="preview-video"
          width="100%"
          muted={true}
          loop={true}
          autoPlay={true}
        >
          <source src="/nft/cha_loki.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Grid>
      <Grid item xs={2}>
        <video
          id="preview-video"
          width="85%"
          muted={true}
          loop={true}
          autoPlay={true}
        >
          <source src="/nft/cha_marsha.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          transform: 'translateY(40px)',
        }}
      >
        <video
          id="preview-video"
          width="100%"
          muted={true}
          loop={true}
          autoPlay={true}
        >
          <source src="/nft/cha_spacegreen.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Grid>
      <Grid item xs={2}>
        <video
          id="preview-video"
          width="90%"
          muted={true}
          loop={true}
          autoPlay={true}
        >
          <source src="/nft/cha_yellow.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      <Box className={classes.container}>
        <Grid
          container
          item
          xs={12}
          marginTop="-20.65vw"
          paddingBottom="120px"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={3}
            marginLeft={isMd ? '' : '140px'}
            style={{
              transform: isMd ? 'translateY(-45px)' : 'translateY(-15px)',
            }}
          >
            <Image
              width={1 / 2}
              height={1 / 6}
              src="/getting_started/cloud_left.svg"
              layout="responsive"
              quality={100}
              priority
            />
          </Grid>
          <Grid
            item
            xs={4}
            marginRight={isMd ? '' : '80px'}
            style={{
              transform: isMd ? 'translateY(-10px)' : 'translateY(35px)',
            }}
          >
            <Image
              width={1 / 2}
              height={1 / 6}
              src="/getting_started/cloud_right.svg"
              layout="responsive"
              quality={100}
              priority
            />
          </Grid>
        </Grid>
        <Grid container>
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
            <Typography className={classes.title}>AniFi NFTs</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            paddingTop="30px"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Typography className={classes.description}>
              Every NFT character has its own unique characteristics
            </Typography>
          </Grid>
        </Grid>
        <Box
          data-aos={'fade-up'}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          {isMd ? scrollCards : individualCards}
        </Box>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          paddingTop="60px"
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
          <Typography className={classes.title}>Characters</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          paddingTop="30px"
          data-aos={'fade-up'}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1200"
        >
          <Typography className={classes.description}>
            There are several characters to build your team and strategy
          </Typography>
        </Grid>
        <Box
          data-aos={'fade-up'}
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          {isMd ? scrollCharacters : individualCharacters}
        </Box>
      </Box>
    </Grid>
  );
};

export default NFT;
