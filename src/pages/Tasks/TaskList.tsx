// src/components/TaskList.tsx

import React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addButton: {
    marginBottom: theme.spacing(1),
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
    <Box>
      <Button variant="contained" color="primary" className={classes.addButton}>
        + Nova Tarefa
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </Box>
  );
};

export default TaskList;
