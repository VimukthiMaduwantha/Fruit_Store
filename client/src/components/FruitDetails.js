import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import apple from '../assets/apple.jpg'
import NavBarView from './NavBarView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';


function FruitDetails() {
    const navigate = new useNavigate();
    const navigateCart = () => {
        navigate('/myCart')
    }
    return (
        <>
            <NavBarView />
            <Box sx={{ width: '100%' }}>
                <section className='section'>
                    <Box sx={{ width: '97%', display: 'flex', justifyContent: 'flex-end', /* paddingTop: '10px' */ }}>
                        <IconButton onClick={navigateCart}>
                            <ShoppingCartIcon sx={{ color: 'red' }} />
                        </IconButton>
                    </Box>
                    <Box sx={{ width: '100%', position: 'absolute', paddingX: '2vw' }}>
                        <Typography sx={{ fontSize: { md: '70px', xs: '50px' }, fontWeight: 'bold' }}>Red Apple</Typography>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <StarRating />
                            <p style={{ marginLeft: '10px' }}>4.5/5.0</p>
                        </div>
                        <p>Price - XX.XX</p>
                        <p>QTY - XX</p>
                    </Box>
                    <Box sx={{}}>
                        <Box sx={{ width: 'auto', display: 'flex', justifyContent: 'right', position: 'relative' }}>
                            <img
                                src={apple}
                                width='25%'
                                height='auto'
                                style={{ borderRadius: '50%' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', paddingX: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', position: 'relative' }}>
                        <Box>
                            <Typography sx={{ display: 'flex', justifyContent: 'space-between', color: ' white' }}>
                                <h1>Description</h1>
                                <h6 style={{ color: 'orange' }}>More Info...</h6>
                            </Typography>

                            <Typography sx={{ color: 'black', fontSize: '15px', fontWeight: 'bold', color: ' white' }}>
                                At FruityBloom Fruit Store, we uderstand the importace of quality, freshness and verity. <br />Or grapes are carefully handpicked to ensure that each...
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button /* onClick={NavigateUser} */ sx={{ backgroundColor: 'orange', }} variant="contained" endIcon={<ArrowForwardIosIcon />}>Add to cart</Button>
                        </Box>
                    </Box>
                </section>
            </Box>
        </>

    )
}

export default FruitDetails