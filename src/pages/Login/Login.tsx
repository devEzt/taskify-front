import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Box,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

export const getValidToken = () => {
  const token = localStorage.getItem('token');
  const expiration = localStorage.getItem('token_expiration');
  if (!token || !expiration) {
    return null;
  }
  const now = new Date();
  const expirationDate = new Date(Number(expiration));
  if (now > expirationDate) {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
    return null;
  }
  return token;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(getValidToken());
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === 'admin' && password === 'admin') {
      const token = 'token';
      localStorage.setItem('token', token);
      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + 30);
      localStorage.setItem(
        'token_expiration',
        expirationDate.getTime().toString(),
      );
      setToken(token);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 2000);
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
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <img src="/fundotransparente.png" alt="Taskify logo" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          {token ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4,
              }}
            >
              {loading ? (
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </Box>
              ) : null}
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
                {loading ? (
                  <Box
                    sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
                  >
                    <CircularProgress />
                  </Box>
                ) : null}
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
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
