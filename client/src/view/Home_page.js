import React from 'react'
import NavBarView from '../components/NavBarView'
import { Box, Card, CardContent, Grid, IconButton, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import orange from '../assets/orngge.jpg'
import apple from '../assets/apple.jpg'
import mango from '../assets/mango.jpg'
import AddIcon from '@mui/icons-material/Add';
import discount from '../data/discount.json'
import Footer from '../components/Footer';

function Home_page() {
    return (
        <>
            <NavBarView />
            <Box sx={{ width: '100%', /* height: '100vh'  */position: 'relative' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: { md: '50vh', xs: '30vh' }, background: '#27374D', position: 'absolute' }}>
                    <br /><br />
                    <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: 'bold' }}>Good For You</Typography>
                    <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: 'bold' }}>Great For You</Typography>
                    <Box sx={{}}>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <TextField sx={{}} label="Search" size='small' />
                        <IconButton aria-label="voice">
                            <MicIcon />
                        </IconButton>
                    </Box>
                </Box >
                <Box sx={{ position: 'absolute', marginTop: { md: '50vh', xs: '30vh' }, background: 'linear-gradient(0deg, rgba(21,34,56,1) 0%, rgba(198,194,192,1) 0%, rgba(166,163,160,1) 23%, rgba(180,128,67,1) 42%, rgba(166,102,37,1) 74%, rgba(138,91,9,1) 100%)', width: '100%', /* height: '100%' */ }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px', fontSize: '40px', color: 'white' }}>Category</Box>
                    <br />
                    <Box sx={{ width: '100%', flexGrow: '1', display: 'flex', justifyContent: 'center' }}>
                        <Grid container spacing={2} sx={{ width: '80%' }}>
                            <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <img
                                    src={orange}
                                    style={{ borderRadius: '50%' }}
                                    width='70%'
                                    height='auto'
                                />
                                <Typography sx={{ color: 'white', fontSize: { md: '30px', xs: '14px' } }}>Orange Fruit</Typography>
                            </Grid>
                            <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <img
                                    src={apple}
                                    style={{ borderRadius: '50%' }}
                                    width='70%'
                                    height='auto'
                                />
                                <Typography sx={{ color: 'white', fontSize: { md: '30px', xs: '14px' } }}>Red Apple</Typography>
                            </Grid>
                            <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <img
                                    src={mango}
                                    style={{ borderRadius: '50%' }}
                                    width='70%'
                                    height='auto'
                                />
                                <Typography sx={{ color: 'white', fontSize: { md: '30px', xs: '14px' } }}>Mango</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <br />
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px', fontSize: '40px', color: 'white' }}>Special Discount</Box>
                    <br />
                    <Box sx={{ width: '100%', flexGrow: '1', display: 'flex', justifyContent: 'center' }}>
                        <Grid container spacing={2} sx={{ width: '80%' }}>
                            {discount.map((discount) => (
                                <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Card >
                                        <CardContent >
                                            <img
                                                src={discount.image}
                                                width='100%'
                                                height='auto'
                                            />
                                            <Box sx={{ flexGrow: '1', width: '100%' }}>
                                                <Grid container spacing={1}>
                                                    <Grid item md={7} xs={12}>
                                                        <Typography sx={{ fontSize: { md: '20px', xs: '10px' }, fontWeight: ' bold' }}>
                                                            {discount.name}
                                                        </Typography>
                                                        <Typography>
                                                            {discount.discount}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                                                        <IconButton sx={{}}>
                                                            <AddIcon sx={{ background: 'brown', borderRadius: '50%', color: 'black' }} />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <br />
                    <br />
                    <br />
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default Home_page