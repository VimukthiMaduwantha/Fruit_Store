import React from 'react'
import NavBarView from '../components/NavBarView'
import { Box, Card, CardContent, CardMedia, Grid, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../components/Footer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import prices from '../data/prices.json'
import AddIcon from '@mui/icons-material/Add';
import FruitDetails from '../components/FruitDetails';
import { useNavigate } from 'react-router-dom';

function Shop_page() {
    const navigate = new useNavigate();

    const getDetails = () => {
        navigate('/fruitStore')
    }
    return (
        <>
            <NavBarView />
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '20px', flexDirection: 'column', width: '100%', height: { md: '50vh', xs: '30vh' }, background: '#E4E4D0', position: 'absolute' }}>
                    <center>
                        <Box sx={{ width: '96%', display: 'flex', justifyContent: 'space-between', }}>
                            <Typography sx={{ fontSize: { md: '50px', xs: '30px' }, color: 'white', fontWeight: 'bold' }}>Shop</Typography>
                            <ShoppingCartIcon sx={{ color: 'red' }} />
                        </Box>
                    </center>
                    <center>
                        <Box sx={{}}>
                            <IconButton aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <TextField sx={{}} placeholder="Search" size='small' />
                        </Box>
                    </center>
                </Box >
                <Box sx={{ position: 'absolute', marginTop: { md: '50vh', xs: '30vh' }, background: 'linear-gradient(0deg, rgba(21,34,56,1) 0%, rgba(198,194,192,1) 0%, rgba(83,79,14,1) 100%, rgba(0,75,10,1) 100%)', width: '100%', /* height: '100%' */ }}>
                    <Box sx={{ width: '100%', paddingX: '20px', flexGrow: '1', marginY: '40px' }}>
                        <Grid container spacing={2}>
                            {prices.map((prices) => (
                                <Grid item md={3} xs={6}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            image={prices.image}
                                            sx={{ height: { xs: "180px", md: "290px" } }}
                                        />
                                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <div>
                                                <Typography sx={{ fontWeight: 'bold' }}>{prices.name}</Typography>
                                                {prices.price}
                                            </div>
                                            <div>
                                                <IconButton onClick={getDetails}>
                                                    <AddIcon sx={{ background: 'orange ', borderRadius: '50%', color: 'black' }} />
                                                </IconButton>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Box>
                </Box>
            </Box>
            {/* <Footer /> */}
        </>
    )
}

export default Shop_page