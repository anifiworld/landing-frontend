import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { NavItem } from './components';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';

interface NavItemsProps {
  id: string;
  title: string;
  url?: string;
  internal: boolean;
}

const navItems: Array<NavItemsProps> = [
  { id: 'home', title: 'Home', url: './', internal: true },
  { id: 'doc', title: 'Docs', url: 'https://docs.anifi.io/', internal: false },
  {
    id: 'community',
    title: 'Community',
    url: 'https://docs.anifi.io/community',
    internal: false,
  },
  {
    id: 'partnership',
    title: 'Partnership',
    url: 'https://docs.anifi.io/partnership-program',
    internal: false,
  },
  {
    id: 'faq',
    title: 'FAQ',
    url: 'https://docs.anifi.io/faq',
    internal: false,
  },
];

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      width: '100%',
      height: '100%',
      paddingTop: '40px',
      paddingBottom: '5px',
      backgroundColor: '#110546',
    },
    text: {
      color: 'white',
      fontFamily: 'Mitr',
      fontSize: isXl ? 24 : 18,
      lineHeight: '36px',
    },
    copyright: {
      fontSize: isMd ? '12px' : '14px',
      lineHeight: '36px',
      fontFamily: 'Mitr',
      color: 'white',
      textAlign: 'center',
      opacity: '34%',
      paddingTop: '5px',
    },
    socialLogo: {
      fontSize: 26,
      color: 'white',
    },
  }));
  const classes = useStyles();

  return (
    <Grid container>
      <Box className={classes.container}>
        <Grid
          container
          justifyContent="space-between"
          rowGap={6}
          paddingLeft="60px"
        >
          <Grid
            container
            item
            flexDirection="column"
            gap={0}
            xs={12}
            md={6}
            paddingLeft={isMd ? '' : '60px'}
          >
            <img width="124px" src="/banner/logo.png" alt="AniFi World Logo" />
            <Typography className={classes.text}>
              Email: contact@anifi.io
            </Typography>
            <Grid container item gap={2}>
              <Link
                href="https://t.me/AniFiWorld"
                target="_blank"
                underline="none"
              >
                <FaTelegramPlane className={classes.socialLogo} />
              </Link>
              <Link
                href="https://discord.gg/35KuS2vKRY"
                target="_blank"
                underline="none"
              >
                <FaDiscord className={classes.socialLogo} />
              </Link>
              <Link
                href="https://twitter.com/AniFiWorld"
                target="_blank"
                underline="none"
              >
                <FaTwitter className={classes.socialLogo} />
              </Link>
              <Link
                href="https://www.facebook.com/AniFiWorld"
                target="_blank"
                underline="none"
              >
                <FaFacebook className={classes.socialLogo} />
              </Link>
              <Link
                href="https://medium.com/@AniFi"
                target="_blank"
                underline="none"
              >
                <FaMediumM className={classes.socialLogo} />
              </Link>
            </Grid>
          </Grid>
          <Grid container item xs={12} md={3}>
            {navItems.map(({ id, title, url, internal }: NavItemsProps) => (
              <Grid key={id} item xs={12}>
                <NavItem title={title} id={id} url={url} internal={internal} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container justifyContent="center" paddingTop="30px">
          <Grid item xs={10}>
            <Box>
              <Image
                width={1}
                height={1 / 600}
                src="/footer/line.png"
                layout="responsive"
                quality={100}
                priority
              />
            </Box>
            <Typography className={classes.copyright}>
              Copyright ©2022 Anifi.io. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Footer;
