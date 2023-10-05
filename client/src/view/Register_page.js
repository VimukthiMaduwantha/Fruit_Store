import { Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

function Register_page() {
    const [value, setValue] = React.useState('female');


    return (
        <Box sx={{ width: '100%', height: '100vh', bottom: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(0deg, rgba(21,34,56,1) 0%, rgba(105,104,52,1) 0%, rgba(115,97,76,1) 23%, rgba(128,41,141,1) 51%, rgba(83,83,105,1) 74%, rgba(59,140,57,1) 100%);' }}>
            <Card sx={{ backgroundColor: 'transparent', width: { md: '50%', xs: "85%" } }}>
                <CardContent sx={{}}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: { md: '28px', xs: '20px' }, fontWeight: 'bold' }}>Welcome to</Typography>
                    <Typography sx={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: { md: '40px', xs: '20px' } }}>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'red' }}>F</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'purple' }}>r</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'green' }}>u</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'orange' }}>i</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'yellow' }}>t</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'darkgreen' }}>y</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'red' }}>B</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'lightpink' }}>l</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'darkgreen' }}>o</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'purple' }}>o</span>
                        <span style={{ /* fontSize: '40px', */ fontWeight: 'bold', color: 'yellow' }}>m</span>
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexGrow: '1' }}>
                        <TextField
                            sx={{ marginBottom: '10px' }}
                            placeholder='User Name'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person2Icon />
                                    </InputAdornment>
                                ),
                            }}
                            size='small'
                            background='white'
                        />

                        <TextField
                            sx={{ marginBottom: '10px' }}
                            placeholder='Email'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size='small'
                            background='white'
                        />
                        <TextField
                            sx={{ marginBottom: '10px' }}
                            placeholder='Password'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size='small'
                            background='white'
                        />
                        <FormLabel id="demo-controlled-radio-buttons-group">Select User Type</FormLabel>
                        <FormControl >
                            <RadioGroup
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                            >
                                <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
                                <FormControlLabel value="Supplier" control={<Radio />} label="Supplier" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Button sx={{ background: '#004225' }} variant="contained" size='small'>Sign Up</Button>
                        <Typography sx={{ fontSize: '13px', color: 'gray' }}>Or continue with</Typography>
                        <Box>
                            <Button size='small' sx={{ marginRight: '5px', textTransform: 'capitalize', background: '#213555' }} variant="contained" startIcon={<FacebookIcon />}>Facebook</Button>
                            <Button size='small' sx={{ marginRight: '5px', textTransform: 'capitalize', background: '#CD1818' }} variant="contained" startIcon={<GoogleIcon />}>Google</Button>
                            <Button size='small' sx={{ marginRight: '5px', textTransform: 'capitalize', background: '#6096B4' }} variant="contained" startIcon={<TwitterIcon />}>Twitter</Button>
                        </Box>
                        <Typography sx={{ fontSize: { md: '13px', xs: '10px' }, color: 'gray', marginTop: '5px' }}>Already have an account <a style={{ textDecoration: 'none', }} href='/loginUser'>Login</a></Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box >
    )
}

export default Register_page