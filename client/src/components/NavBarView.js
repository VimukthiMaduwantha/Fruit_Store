import React from "react";
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function NavBarView() {
    const theme = useTheme();
    const navigate = new useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const logiIn = () => {
        navigate('/loginUser')
    }

    const signUp = () => {
        navigate('/registerUser')
    }

    return (
        <AppBar position="static" sx={{ background: '#9E6F21' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* small device mene dropdown */}

                    {/* menu icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="medium"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* menu dropdown*/}
                        <Menu
                            id="menu-appbar "
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" }, }}
                        >
                            {/* noclick go to page + close menu */}
                            {/* view menu */}
                            <MenuItem>
                                <Link
                                    to={"/home"}
                                    onClick={handleCloseNavMenu}
                                    style={{
                                        textDecoration: "none",
                                        color: theme.palette.secondary.main,
                                    }}
                                >
                                    Home
                                </Link>
                            </MenuItem>

                            {/* order at table */}
                            <MenuItem>
                                <Link
                                    to={"/shop"}
                                    onClick={handleCloseNavMenu}
                                    style={{
                                        textDecoration: "none",
                                        color: theme.palette.secondary.main,
                                    }}
                                >
                                    Shop
                                </Link>
                            </MenuItem>

                            {/* order online */}
                            <MenuItem>
                                <NavLink
                                    sx={{ color: 'black' }}
                                    to={"/about"}
                                    onClick={handleCloseNavMenu}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            textDecoration: "none",
                                            fontWeight: isActive ? 600 : 400,
                                            color: isActive ? theme.palette.primary.main : "inherit",
                                        };
                                    }}
                                >
                                    About Us
                                </NavLink>
                            </MenuItem>
                            {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))} */}
                        </Menu>
                    </Box>

                    {/* large device nav links */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', right: '0' }}>
                        <Typography sx={{ width: '100%', display: { xs: "none", md: "flex" }, justifyContent: 'center', fontSize: { md: '30px', xs: '20px' } }}>
                            <span style={{ fontWeight: 'bold', color: 'red' }}>F</span>
                            <span style={{ fontWeight: 'bold', color: 'purple' }}>r</span>
                            <span style={{ fontWeight: 'bold', color: 'green' }}>u</span>
                            <span style={{ fontWeight: 'bold', color: 'orange' }}>i</span>
                            <span style={{ fontWeight: 'bold', color: 'yellow' }}>t</span>
                            <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>y</span>
                            <span style={{ fontWeight: 'bold', color: 'red' }}>B</span>
                            <span style={{ fontWeight: 'bold', color: 'lightpink' }}>l</span>
                            <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>o</span>
                            <span style={{ fontWeight: 'bold', color: 'purple' }}>o</span>
                            <span style={{ fontWeight: 'bold', color: 'yellow' }}>m</span>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            // backgroundColor: 'red',
                            flexGrow: 1,
                            justifyContent: "center",
                            display: { xs: "none", md: "flex" },

                        }}
                    >
                        <Box
                            sx={{
                                my: 2,
                                display: "block",
                            }}
                        >
                            <NavLink
                                className="white-link"
                                to={"/home"}
                                // onClick={handleCloseNavMenu}
                                style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', margin: "0px 1.5em" }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="white-link"
                                to={"/shop"}
                                // onClick={handleCloseNavMenu}
                                style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', margin: "0px 1.5em" }}
                            >
                                Shop
                            </NavLink>
                            <NavLink

                                className="white-link"
                                to={"/about"}
                                style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', margin: "0px 1.5em" }}
                            >
                                About Us
                            </NavLink>
                        </Box>
                    </Box>

                    {/* cart */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Button onClick={logiIn} size="small" sx={{ color: 'black', fontWeight: 'bold' }}>Login</Button>
                        <Button onClick={signUp} size="small" sx={{ color: 'black', fontWeight: 'bold' }}>SignUp</Button>
                    </Box>
                    <AccountCircleIcon sx={{ display: 'felx', justifyContent: 'center', alignItems: 'center', color: 'black' }} />
                </Toolbar>
            </Container>
        </AppBar >
    );
}
