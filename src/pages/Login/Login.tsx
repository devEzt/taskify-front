import React, { useState } from 'react';
import { Typography, TextField, Button, Link, Box } from '@material-ui/core';
import Container from '../../components/Container';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle login
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ width: '100%', mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
