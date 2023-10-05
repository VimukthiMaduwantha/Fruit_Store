import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <Box sx={{ position: 'relative', width: '100%'/* , marginTop: '180vh' */ }}>
            <Box sx={{ width: '100%', flexGrow: '1', paddingX: ' 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={6}>
                        <h4>Support</h4>
                        <br />
                        <Typography>Help Center</Typography>
                        <Typography>Cancellation options</Typography>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <h4>Company</h4>
                        <br />
                        <Typography>About us</Typography>
                        <Typography>Privacy policy</Typography>

                    </Grid>
                    <Grid item md={3} xs={6}>
                        <h4>Contact</h4>
                        <br />
                        <Typography>Become Local Expert</Typography>
                        <Typography>FAQ</Typography>

                    </Grid>
                    <Grid item md={3} xs={6}>
                        <h4>Social</h4>
                        <br />
                        <Box sx={{ width: '100%' }}>
                            <IconButton><YouTubeIcon style={{ background: 'gray', color: 'black', borderRadius: '50%', padding: '2px', fontSize: '30px' }} /></IconButton>
                            <IconButton><FacebookIcon style={{ background: 'gray', color: 'black', borderRadius: '50%', padding: '2px', fontSize: '30px' }} /></IconButton>
                            <IconButton><InstagramIcon style={{ background: 'gray', color: 'black', borderRadius: '50%', padding: '2px', fontSize: '30px' }} /></IconButton>
                            <IconButton><TwitterIcon style={{ background: 'gray', color: 'black', borderRadius: '50%', padding: '2px', fontSize: '30px' }} /></IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Footer