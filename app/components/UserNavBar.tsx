'use client'

import * as React from 'react';
import { PaletteMode, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ArrowBack } from '@mui/icons-material';

const logoStyle = {
  width: '80px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export const UserNavBar = ({ mode, toggleColorMode }: AppBarProps) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const { user } = useUser();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0,
            }}
          >
            {theme.palette.mode === 'light' ? (
              <img
                src={'https://svgshare.com/i/16jm.svg'}
                style={logoStyle}
                alt="logo of producty"
              />
            ) : (
              <img
                src={'https://i.postimg.cc/xjgmkjzR/output.png'}
                style={logoStyle}
                alt="logo of producty"
              />
            )}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Link href='/user/todos' style={{ textDecoration: 'none' }} passHref>
                  <Typography variant="body2" color="text.primary">
                    Todos
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Link href='/user/journal' style={{ textDecoration: 'none' }} passHref>
                  <Typography variant="body2" color="text.primary">
                    Journal
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Link href='/user/study' style={{ textDecoration: 'none' }} passHref>
                  <Typography variant="body2" color="text.primary">
                    Study Sessions
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Link href="/user/whiteboard" passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="text.primary">
                    Whiteboard
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: '6px', px: '12px' }}>
                <Link href="/faq" passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </Link>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                mx: 4,
                color: theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              {user?.name}
            </Typography>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Button
              color="primary"
              variant="text"
              size="small"
              component="a"
              href="/api/auth/logout"
              target="_blank"
            >
              Logout
            </Button>
          </Box>
          <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '4px' }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: '60dvw',
                  p: 2,
                  backgroundColor: 'background.paper',
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button
                    variant="text"
                    color="primary"
                    aria-label="close"
                    onClick={toggleDrawer(false)}
                    sx={{ minWidth: '30px', p: '4px' }}
                  >
                    <ArrowBack />
                  </Button>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold',
                      mx: 2,
                      color: theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    }}
                  >
                    {user?.name}
                  </Typography>
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </Box>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Link href='/user/todos' style={{ textDecoration: 'none' }} passHref>
                    <Typography variant="body2" color="text.primary">
                      Todos
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Link href='/user/journal' style={{ textDecoration: 'none' }} passHref>
                    <Typography variant="body2" color="text.primary">
                      Journal
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Link href='/user/study' style={{ textDecoration: 'none' }} passHref>
                    <Typography variant="body2" color="text.primary">
                      Study Sessions
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Link href="/user/whiteboard" passHref style={{ textDecoration: 'none' }}>
                    <Typography variant="body2" color="text.primary">
                      Whiteboard
                    </Typography>
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Link href="/api/auth/logout" passHref style={{ textDecoration: 'none' }}>
                    <Button
                      color="primary"
                      variant="text"
                      size="small"
                      component="a"
                      target="_blank"
                    >
                      Logout
                    </Button>
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserNavBar;
