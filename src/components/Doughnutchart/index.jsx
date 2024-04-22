import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js';
import {Box, Paper,Card} from '@mui/material';

chartjs.register(ArcElement, Tooltip, Legend);

const index = () => {
  
  const data1 = {
    labels: ['Red', 'Remaining'],
    datasets: [
      {
        data: [82, 18],
        backgroundColor: ['#FF6384', '#DDDDDD'],
      },
    ],
  };

  
  const data2 = {
    labels: ['Blue', 'Remaining'],
    datasets: [
      {
        data: [22, 78],
        backgroundColor: ['#36A2EB', '#DDDDDD'],
      },
    ],
  };

  
  const data3 = {
    labels: ['Green', 'Remaining'],
    datasets: [
      {
        data: [62, 38],
        backgroundColor: ['#4CAF50', '#DDDDDD'],
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '900px' }}>
        <Card elevation={3}>
          
            <Paper elevation={3}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
                <div style={{ width: '300px', height: '300px' }}>
                  <Doughnut data={data1} />
                </div>
                <div style={{ width: '300px', height: '300px' }}>
                  <Doughnut data={data2} />
                </div>
                <div style={{ width: '300px', height: '300px' }}>
                  <Doughnut data={data3} />
                </div>
              </Box>
            </Paper>
          
        </Card>
      </Box>
    </Box>
    );
};

export default index;