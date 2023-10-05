import React from 'react'
import NavBarView from '../components/NavBarView'
import { Box, Button, Card, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import cartDetails from '../data/cart.json'
import { Close } from "@mui/icons-material";
import Footer from '../components/Footer';
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = new useNavigate()

    const ShoppingBack = () => {
        navigate('/shop')
    }

    const navigateCheckout = () => {
        navigate('/checkout');
    }
    return (
        <>
            <NavBarView />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ width: '100%' }}>
                    <Typography sx={{ fontSize: { md: '40px', xs: '30px' }, paddingLeft: '15vw', fontWeight: 'bold' }}>My Cart</Typography>
                </Box>

                {/* Cart items */}
                <Box sx={{
                    px: { xs: "25px", md: "100px", lg: "200px" },
                    py: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    {cartDetails.map((cart) => (
                        <Card
                            sx={{
                                position: "relative",
                                p: 1,
                                height: { xs: "100px", md: "130px" },
                                border: "1px solid #d9d9d9",
                                marginBottom: '10px'
                            }}
                        >
                            <Grid container direction="row" spacing={2} sx={{ alignItems: "center" }}>
                                {/* image */}
                                <Grid item xs={3} sm={2} md={1.5}>
                                    <CardMedia
                                        component="img"
                                        image={cart.image}
                                        alt={cart.name}
                                        sx={{
                                            // width: { xs: "100px", md: "120px" },
                                            height: { xs: "80px", sm: "82px", md: "113px" },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={2.5} md={3}>
                                    {/* name */}
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: { xs: "13px", md: "18px" }, fontWeight: 400 }}
                                    >
                                        {cart.name}
                                    </Typography>
                                </Grid>


                                <Grid item xs={3.5} md={3.5}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Typography
                                            sx={{
                                                display: { xs: "none", sm: "none", md: "block" },
                                                fontSize: "16px",
                                            }}
                                        >
                                            Addons
                                        </Typography>

                                    </Box>
                                </Grid>

                                {/* price */}
                                <Grid item xs={2.5} md={3.5}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Typography
                                            sx={{
                                                display: { xs: "none", md: "block" },
                                                fontSize: "16px",
                                            }}
                                        >
                                            {cart.price}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
                                <Close fontSize="small" />
                            </IconButton>
                        </Card>
                    ))}
                </Box>

                <Box sx={{ width: "100%", flexGrow: '1', display: 'flex', justifyContent: 'center', alignItems: "center", paddingX: '5vw' }}>
                    <Grid container spacing={2}>
                        <Grid item md={8} xs={8} sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconButton onClick={ShoppingBack}>
                                    <ReplyIcon />
                                </IconButton>
                                <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>Back to shopping</Typography>
                            </div>

                            <Typography sx={{ fontWeight: "bold" }}>Sub Total: 1250/</Typography>
                        </Grid>
                        <Grid item md={4} xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="contained"
                                // color="#A2C579"
                                onClick={navigateCheckout}
                                sx={{
                                    mt: 3,
                                    textTransform: "none",
                                    color: "#fff",
                                }}
                            >
                                Checkout
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
            <br />
            <br />
            <Footer />

        </>
    )
}

export default Cart