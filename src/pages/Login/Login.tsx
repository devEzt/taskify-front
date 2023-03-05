import React, { useState } from 'react';
import { Typography, TextField, Button, Link, Box } from '@material-ui/core';
import Container from '../../components/Container';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  );
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === 'test@test.com' && password === 'test') {
      const token = 'token';
      localStorage.setItem('token', token);
      setToken(token);
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <Container maxWidth="xs">
      {token ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 4,
          }}
        >
          <Typography component="h1" variant="h5">
            You are logged in!
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleLogout}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Sair
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 4,
          }}
          component="form"
          onSubmit={handleLogin}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </Box>
            {error && (
              <Box sx={{ mt: 1 }}>
                <Typography color="error">{error}</Typography>
              </Box>
            )}
            <Box sx={{ mt: 1 }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default LoginPage;
