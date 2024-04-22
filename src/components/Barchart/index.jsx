import React from 'react';
import { Chart as chartjs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Card, Paper, Typography, Button, Menu, MenuItem } from '@mui/material';

chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const index = () => {
  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Days',
        data: [60, 80, 40, 70, 60, 30, 60],
        backgroundColor: ['red', 'yellow', 'red', 'yellow', 'red', 'yellow', 'red'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleWeeklyButtonClick = () => {
    
  };

  return (
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card elevation={3}>
        <Paper elevation={3}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
              Customer Map
            </Typography>
            <Button variant="outlined" onClick={handleWeeklyButtonClick}>
              Weekly
              <Menu>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
              </Menu>
            </Button>
            <div style={{ width: '500px', height: '300px' }}>
              <Bar data={data} options={options} />
            </div>
          </Box>
        </Paper>
      </Card>
    </Box>




    //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     <Card elevation={3}>
      
//         <Paper elevation={3}>
//           <Box sx={{ p: 2 }}>
//             <div style={{ width: '500px', height: '300px' }}>
//               <Bar data={data} options={options} />
//             </div>
//           </Box>
//         </Paper>
      
//     </Card>
//   </Box>

     );
};

export default index;