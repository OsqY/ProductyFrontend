'use client'

import { ThemeContext } from "../theme-context"
import React, { useContext, useState } from "react"
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, SvgIcon, Switch, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/5fbWaH01.svg"

const Navbar = () => {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const pages = ['About', 'Contact'];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', width: 100, height: 100 }}>
            <SvgIcon component="div" sx={{ width: '100%', height: '100%' }}>
              <Image src={Logo} alt="Producty" layout="fill" objectFit="contain" />
            </SvgIcon>
          </Box>

          <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ display: { xs: 'none', md: 'flex' }, fontWeight: 700, ml: 0, mr: 2, letterSpacing: '.2rem' }}>
              Producty
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }}>
              {pages.map((page) => (
                <Link href={'/' + page} key={page} style={{ textDecoration: 'none' }} passHref>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" style={{ color: 'inherit' }}>{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2, alignItems: 'center', justifyContent: 'center', width: 100, height: 100 }}>
            <SvgIcon component="div" sx={{ width: '100%', height: '100%' }}>
              <Image src={Logo} alt="Producty" layout="fill" objectFit="contain" />
            </SvgIcon>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>   {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
            >
              {page}
            </Button>
          ))}
          </Box>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Navbar;
