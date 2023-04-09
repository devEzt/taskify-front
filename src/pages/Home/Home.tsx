// src/components/Dashboard.tsx

import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  const mockData = [
    {
      title: 'Atividades criadas',
      value: 42,
    },
    {
      title: 'Atividades realizadas',
      value: 35,
    },
    {
      title: 'Atividades pendentes',
      value: 7,
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {mockData.map((data, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">{data.title}</Typography>
              <Typography variant="h4">{data.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
