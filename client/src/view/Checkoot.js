import React from 'react'
import NavBarView from '../components/NavBarView'
import { Box, Grid, TextField, Typography, InputLabel, MenuItem, FormHelperText, FormControl, Card, CardMedia, IconButton, Button } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Footer from '../components/Footer';
import frut from '../assets/frut.jpg'
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';

function Checkoot() {
    const [age, setAge] = React.useState('');
    const navigate = new useNavigate();

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    const CartBack = () => {
        navigate('/myCart')
    }
    return (
        <>
            <NavBarView />
            <Box sx={{ width: '100%', background: '#FFEEF4', height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ fontSize: { md: '40px', xs: '30px' }, paddingLeft: '10vw', fontWeight: 'bold' }}>Checkout</Typography>
                    </Box>
                    <Box sx={{ width: '100%', flexGrow: '1' }}>
                        <Grid container spacing={2} sx={{ paddingLeft: '10vw' }}>
                            <Grid item md={8} xs={8}>
                                <Box sx={{ width: '100%' }}>
                                    <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Your basic information</Typography>
                                    <Box sx={{ width: '60%', flexGrow: '1' }}>
                                        <Grid container spacing={2}>
                                            <Grid item md={6} sx={6}>
                                                <TextField id="standard-basic" variant="standard" placeholder='First Name' />
                                            </Grid>
                                            <Grid item md={6} sx={6}>
                                                <TextField id="standard-basic" variant="standard" placeholder='Last Name' />
                                            </Grid>
                                            <Grid item md={6} sx={6}>
                                                <TextField id="standard-basic" variant="standard" placeholder='Email Address' />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <br />
                                <Box sx={{ width: '100%' }}>
                                    <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Billing Address</Typography>
                                    <Box sx={{ width: '60%', }}>
                                        <Grid container spacing={2} direction="column">
                                            <Grid item md={6} sx={6}>
                                                <TextField id="standard-basic" variant="standard" placeholder='First Name' />
                                            </Grid>
                                            <Grid item md={6} sx={6}>
                                                <TextField id="standard-basic" variant="standard" placeholder='Last Name' />
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </Box>
                                <br />
                                <Box sx={{ width: '100%' }}>
                                    <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Your payment information</Typography>
                                    <Box sx={{ width: '60%', }}>
                                        <Grid container spacing={2} direction="column">
                                            <Grid item md={6} sx={6}>
                                                <TextField id="standard-basic" variant="standard" placeholder='Credit Card Number' />
                                            </Grid>
                                            <Grid item md={6} sx={6}>
                                                <Grid container spacing={2}>
                                                    <Grid item md={4} xs={6}>
                                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                                            <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-helper-label"
                                                                id="demo-simple-select-helper"
                                                                value={age}
                                                                label="Month"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem>1</MenuItem>
                                                                <MenuItem>2</MenuItem>
                                                                <MenuItem>3</MenuItem>
                                                                <MenuItem>4</MenuItem>
                                                                <MenuItem>5</MenuItem>
                                                                <MenuItem>6</MenuItem>
                                                                <MenuItem>7</MenuItem>
                                                                <MenuItem>8</MenuItem>
                                                                <MenuItem>9</MenuItem>
                                                                <MenuItem>10</MenuItem>
                                                                <MenuItem>11</MenuItem>
                                                                <MenuItem>12</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item md={4} xs={6}>
                                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                                            <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-helper-label"
                                                                id="demo-simple-select-helper"
                                                                value={age}
                                                                label="Month"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem >2026</MenuItem>
                                                                <MenuItem >2025</MenuItem>
                                                                <MenuItem >2024</MenuItem>
                                                                <MenuItem >2023</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item md={4} xs={6}>
                                                        <TextField
                                                            name="ccvFormat"
                                                            id="ccvInput"
                                                            placeholder="cvv"
                                                            size="small"
                                                            fullWidth
                                                            sx={{
                                                                mt: 1,
                                                                fontSize: { xs: "13px", md: "14px" },
                                                            }} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <br />
                                <Typography>By clicking Checkout Now you agree to the <a style={{ textDecoration: 'none' }} href=''>Term of Service</a> and <a style={{ textDecoration: 'none' }} href=''>Privacy Policy</a></Typography>
                            </Grid>
                            <Grid item md={4} xs={4} sx={{ paddingRight: '1vw' }}>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh', background: '#F2D1D1', marginBottom: '2px' }}>
                                    <Typography sx={{ fontWeight: 'bold', color: 'grey' }}>Purchase Details</Typography>
                                </Box>
                                <Box sx={{ width: '100%', height: '20vh', background: '#D3CEDF' }}></Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#D3CEDF', marginTop: '2px', paddingX: '10px' }}>
                                    <Typography>SUB TOTAL</Typography>
                                    <Typography>1250.00</Typography>
                                </Box>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={frut}
                                        sx={{ height: { xs: "150px", md: "220px" }, marginTop: '2px' }}
                                    />
                                </Card>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '10vw' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IconButton onClick={CartBack}>
                            <ReplyIcon />
                        </IconButton>
                        <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Back to cart</Typography>
                    </div>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            textTransform: "none",
                            color: "#fff",
                        }}
                    >
                        Checkout Now
                    </Button>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Checkoot