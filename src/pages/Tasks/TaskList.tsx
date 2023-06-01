// src/components/TaskList.tsx

import React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Subtitle from '../../components/Subtitle';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  addButton: {
    position: 'fixed',
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

const TaskList: React.FC = () => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'status', headerName: 'Status', width: 120 },
  ];

  const rows = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3 description',
      status: 'Completed',
    },
  ];

  return (
    <Box className={classes.root}>
      <Subtitle text="Task List" />

      <Button variant="contained" color="primary" className={classes.addButton}>
        + Nova Tarefa
      </Button>
      <Paper>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </Paper>
    </Box>
  );
};

export default TaskList;
