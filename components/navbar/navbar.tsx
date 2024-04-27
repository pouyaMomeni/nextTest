import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// Icons
import { BiSolidLandmark } from "react-icons/bi";
import { RiShoppingBasketFill } from "react-icons/ri";
// Router
import { useRouter } from 'next/router';
// Redux
import { useSelector } from "react-redux";

import { Color } from '../../constants/color';
import NavBarButton from '../../components/button/navBarButton';

const pages = ['محصولات'];
const settings = ['سبد خرید'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const statusRedux = useSelector((state : any ) => state.myredux.isLogedIn);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    router.push(`/products`);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    router.push(`/buylist`);
  };

  const toLoginPageFunc = () => {
    router.push(`/login`);
  }

  return (
    <AppBar sx={{bgcolor:Color.black}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box  sx={{display:'flex',alignItems:'center',cursor:'pointer'}}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <BiSolidLandmark onClick={()=>router.push(`/`)} size='2.5rem' color={Color.sec} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: Color.light,
                textDecoration: 'none',
                fontFamily:'vazir'
              }}
            >
              فروشگاه
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography fontFamily='vazir' color={Color.black} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
            <BiSolidLandmark size='2rem' color={Color.light} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            fontFamily='vazir'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            فروشگاه
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',fontFamily:'vazir' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        {statusRedux ? 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="سبد خرید">
              <Box onClick={handleOpenUserMenu} sx={{cursor:'pointer'}}>
                <RiShoppingBasketFill color={Color.first} size='2rem' />
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography fontFamily='vazir' textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          :
          <NavBarButton action={toLoginPageFunc} text='وارد سایت شوید' />
        }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;