import React, { useState } from 'react';
import axiosInstance from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './logo.png'
//MaterialUI

const theme = createTheme();

const Register = () => {

    const navigate = useNavigate();
    // security- object.freeze
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance
			.post(`user/register/`, {
				email: formData.email,
				user_name: formData.username,
				password: formData.password,
			})
			.then((res) => {
				navigate('/login');
			});
	};

    return ( 
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ p:4, m: 1, bgcolor: 'pink' }}>
            <img src={logo} alt="logo" />
          </Avatar>
        <Typography component="h1" variant="h5">
            Sign up to FullFill
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, backgroundColor: 'pink' }}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2" sx={{color: 'black'}}>
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </Box>
</Container>
</ThemeProvider>
 );
}
 
export default Register;
