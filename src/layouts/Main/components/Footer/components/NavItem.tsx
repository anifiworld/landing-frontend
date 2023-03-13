import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

interface Props {
  id: string;
  title: string;
  url?: string;
  internal: boolean;
}

const NavItem = ({ id, title, url, internal }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    text: {
      color: 'white',
      fontFamily: 'Mitr',
      fontSize: isXl ? 24 : isMd ? 14 : 16,
    },
  }));
  const classes = useStyles();

  return (
    <Box>
      <Link
        href={url}
        underline="none"
        target={!internal ? '_blank' : undefined}
      >
        <Typography className={classes.text}>{title}</Typography>
      </Link>
    </Box>
  );
};

export default NavItem;
