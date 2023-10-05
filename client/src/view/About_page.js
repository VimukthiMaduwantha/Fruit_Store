import React from 'react'
import NavBarView from '../components/NavBarView'
import Footer from '../components/Footer'
import { Box, Typography } from '@mui/material'

function About_page() {
    return (
        <>
            <NavBarView />
            <Box sx={{ position: 'relative', width: '100%', height: '93vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFEEF4', }}>
                <Box sx={{ position: 'absolute', width: '96%', height: '80vh', margin: '20px', borderRadius: '30px', background: 'linear-gradient(0deg, rgba(21,34,56,1) 0%, rgba(198,194,192,1) 0%, rgba(83,79,14,1) 100%, rgba(0,75,10,1) 100%)', paddingX: '5vw', paddingY: '3vh' }}>
                    <h1>About us</h1>
                    <Typography sx={{ fontSize: { md: '20px', xs: '15px' } }}>FruityBloom: Bursting with nature's finest, offering a diverse array of fresh, juicy fruits. Elevate taste and health, one bite at a time.</Typography>
                    <br />
                    <h3>Our Vision</h3>
                    <Typography sx={{ fontSize: { md: '20px', xs: '15px' } }}>At FruityBloom, we envision a world where wholesome, delicious fruits take center stage, inspiring healthier lives and joyful moments. With unwavering dedication, we curate nature's bounty to provide a delightful fusion of taste, wellness, and sustainability, fostering a brighter, fruit-filled future for all.</Typography>
                    <br />
                    <h3>Our mission</h3>
                    <Typography sx={{ fontSize: { md: '20px', xs: '15px' } }}>Fueled by passion, we at FruityBloom are committed to delivering the freshest, most vibrant fruits to your table. Through sustainable practices, meticulous selection, and exceptional service, we strive to enrich your life with the goodness of nature, one delectable fruit at a time.</Typography>
                </Box>
            </Box >
            <Footer />

        </>
    )
}

export default About_page