import React, { useState, useContext } from "react";
//material ui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../components/logo.png";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  let { user } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLink = (link) => {
    handleCloseNavMenu();
    handleCloseUserMenu();
    navigate(link);
  };

  const pages = ['community', 'recipe', 'profile'];

  return (
    <AppBar elevation={0} position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* only displays if above medium breakpoint */}
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            src={logo}
            className="logo"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleLink("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              fontSize: "1.5rem",
              color: "black",
              textDecoration: "none",
            }}
            style={{color:"black"}}
          >
            FullFill
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color: 'black'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
                <MenuItem key='Locator' onClick={()=>{handleLink('/locator')}}>
                  <Typography textAlign="center">Locator</Typography>
                </MenuItem>
                <MenuItem key='Donation' onClick={()=>{handleLink('/donation')}}>
                  <Typography textAlign="center">Donation</Typography>
                </MenuItem>
                <MenuItem key='Recipes' onClick={()=>{handleLink('/recipes')}}>
                  <Typography textAlign="center">Recipes</Typography>
                </MenuItem>
                <MenuItem key='Community' onClick={()=>{handleLink('/communities')}}>
                  <Typography textAlign="center">Community</Typography>
                </MenuItem>
            </Menu>
          </Box>
          {/* Only displays for mobile */}
          <Box src={logo} sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Pacifico",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
            style={{
              color:"black"
            }}
          >
            FullFill
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={(e) => {
                handleLink("/");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={(e) => {
                handleLink("/locator");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Locator
            </Button>
            <Button
              onClick={(e) => {
                handleLink("/donation");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Donation
            </Button>
            <Button
              onClick={(e) => {
                handleLink("/recipes");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Recipes
            </Button>
            <Button
              onClick={(e) => {
                handleLink("/communities");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Community
            </Button>
            {user ? (
              <Button
                onClick={(e) => {
                  handleLink("/logout");
                }}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  onClick={(e) => {
                    handleLink("/Login");
                  }}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Login
                </Button>
                <Button
                  onClick={(e) => {
                    handleLink("/register");
                  }}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Register
                </Button>
              </>
            )}
            <nav></nav>
          </Box>
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user ? user.username : "User"}
                    src="/static/images/avatar/2.jpg"
                    sx={{ backgroundColor: "#adc178" }}
                  />
                  <Typography variant="h6" noWrap sx={{ ml: 2 }}>
                    Hi {user ? user.username : null}
                  </Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key="Profile"
                  onClick={(e) => {
                    handleLink("/profile");
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem
                  key="Logout"
                  onClick={(e) => {
                    handleLink("/logout");
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
