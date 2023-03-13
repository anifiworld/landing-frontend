import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import { bool } from 'yup';

interface Props {
  id: string;
  title: string;
  url?: string;
  internal: boolean;
  items?: { [key: string]: PageItem };
  isDrawerClosing?: boolean;
  colorInvert?: boolean;
}

const NavItem = ({
  id,
  title,
  url,
  internal,
  items,
  isDrawerClosing,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  // const hasActiveLink = () => items.find((i) => i.href === activeLink);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Link
        href={url}
        underline="none"
        target={!internal ? '_blank' : undefined}
      >
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent="center"
          aria-describedby={id}
          sx={{ cursor: 'pointer' }}
        >
          <Typography
            fontFamily="LuckiestGuy"
            fontWeight={600}
            color="white"
            marginTop="4px"
            fontSize={
              isXl
                ? '36px'
                : isMd || isDrawerClosing
                ? '36px'
                : isLg
                ? '22px'
                : '18px'
            }
            lineHeight={isXl ? '71px' : '50px'}
            style={{
              WebkitTextStroke: `${
                isMd || isDrawerClosing ? '8px' : isLg ? '5px' : '5px'
              } #751713`,
              filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.35))',
            }}
          >
            {title}
          </Typography>
          <Typography
            fontFamily="LuckiestGuy"
            fontWeight={600}
            color="white"
            marginTop="4px"
            fontSize={
              isXl
                ? '36px'
                : isMd || isDrawerClosing
                ? '36px'
                : isLg
                ? '22px'
                : '18px'
            }
            lineHeight={isXl ? '71px' : '50px'}
            style={{
              position: 'absolute',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NavItem;
