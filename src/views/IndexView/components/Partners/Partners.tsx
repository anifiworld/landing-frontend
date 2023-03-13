import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';

const Partners = (): JSX.Element => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });

  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: '60px',
      paddingBottom: '60px',
      width: '100%',
      height: '100%',
      backgroundImage: isMd
        ? 'url(bg/partners_sm.png)'
        : 'url(bg/partners.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    title: {
      color: 'white',
      fontSize: isXl ? '64px' : isMdDown ? '24px' : '36px',
      textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)',
    },
  }));
  const classes = useStyles();

  return (

    <Grid container>
      <Box className={classes.container}>
        <Grid container flexDirection="column" justifyContent="center">
          <Grid
            container
            item
            xs={12}
            textAlign="center"
            justifyContent="center"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <Typography className={classes.title}>
              Audited by
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            paddingTop="0px"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                paddingTop="10px"
                data-aos={'fade-up'}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid item md={2}>
                </Grid>
                <Grid item xs={5} md={3}>
                  <Link
                    href="https://github.com/solidproof/projects/blob/main/AniFi/AniFi_SmartContract_Audit_Solidproof.pdf"
                    target="_blank"
                    underline="none"
                  >
                    <img width="100%" src="/partners/solidproof.png" />
                  </Link>
                </Grid>
                <Grid item xs={5} md={3}>
                  <Link
                    href="https://github.com/VersatileFinance/Smart-Contract-Audits/blob/main/AniFi%20World%20Token%20-%20Versatile%20Finance%20Smart%20Contract%20Security%20Audit.pdf"
                    target="_blank"
                    underline="none"
                  >
                    <img width="100%" src="/partners/versatile.png" />
                  </Link>
                </Grid>
                <Grid item md={2}>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid container flexDirection="column" justifyContent="center">
          <Grid
            container
            item
            xs={12}
            textAlign="center"
            justifyContent="center"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
            paddingTop="30px"
          >
            <Typography className={classes.title}>
              Incubated by
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            paddingTop="0px"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                paddingTop="10px"
                data-aos={'fade-up'}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid item xs={1} md={2}>
                </Grid>
                <Grid item xs={4} md={2}>
                    <img width="100%" src="/partners/dtc.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                    <img width="100%" src="/partners/360crypto.png" />
                </Grid>
                <Grid item xs={1} md={2}>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid container flexDirection="column" justifyContent="center">
          <Grid
            container
            item
            xs={12}
            textAlign="center"
            justifyContent="center"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
            paddingTop="30px"
          >
            <Typography className={classes.title}>
              Partners and Investors
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            paddingTop="0px"
            data-aos={'fade-up'}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                paddingTop="10px"
                data-aos={'fade-up'}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/wirtual.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/cryptokidfinance.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/gempad.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/zlaunch.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/thaiwhales.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/sally.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/speedevs.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/jgg.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/qcat.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/lemoons.png" />
                </Grid>
                <Grid item xs={4} md={2}>
                  <img width="100%" src="/partners/cgn.png" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Partners;
