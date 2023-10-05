import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import orange from '../assets/orngge.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

function Welcome_page() {
    const navigate = useNavigate();
    const NavigateUser = () => {
        navigate('/registerUser');
    }


    return (
        <Box sx={{ width: '100%' }}>
            <section className='section'>
                <Box sx={{}}>
                    <Box sx={{ width: '100%', paddingLeft: '70px', paddingTop: '30px', }}>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'red' }}>F</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'purple' }}>r</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'green' }}>u</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'orange' }}>i</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'yellow' }}>t</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'darkgreen' }}>y</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'red' }}>B</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'lightpink' }}>l</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'darkgreen' }}>o</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'purple' }}>o</span>
                        <span style={{ fontSize: '40px', fontWeight: 'bold', color: 'yellow' }}>m</span>
                    </Box>
                    <Box sx={{ width: 'auto', display: 'flex', justifyContent: 'right', position: 'relative' }}>
                        <img
                            src={orange}
                            width='25%'
                            height='auto'
                            style={{ borderRadius: '50%' }}
                        />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', paddingX: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                    <Box >
                        <Typography sx={{ color: 'white', fontSize: '35px', fontWeight: 'bold', }}>Get Fresh Fruits</Typography>
                        <Typography sx={{ color: 'white', fontSize: '35px', fontWeight: 'bold', }}>Right now...</Typography>
                        <Typography sx={{ color: 'white', fontSize: '15px', letterSpacing: '2px' }}>With Our Products In fruit In</Typography>
                        <Typography sx={{ color: 'white', fontSize: '15px', letterSpacing: '2px' }}>Safe your Health and Your</Typography>
                        <Typography sx={{ color: 'white', fontSize: '15px', letterSpacing: '2px' }}>Money.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button onClick={NavigateUser} sx={{ backgroundColor: 'orange', }} variant="contained" endIcon={<ArrowForwardIosIcon />}>Order Now</Button>
                    </Box>
                </Box>
            </section>
        </Box>
    )
}

export default Welcome_page