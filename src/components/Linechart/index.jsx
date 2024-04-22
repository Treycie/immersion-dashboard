import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement, Title } from 'chart.js';
import {Card,CardContent,Box,Typography,Button} from '@mui/material';
import { Save as SaveIcon,  } from '@mui/icons-material';

chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title
);

const index = () => {
  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      data: [8, 7.8, 6, 8, 7, 5, 6],
      backgroundColor: 'transparent',
      borderColor: 'rgba(54, 162, 235, 1)', 
      borderWidth: 3,
      tension: 0.4 
    }]
  };

  const options = {
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'Weekly Data',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'black', 
          font: {
            weight: 'bold' 
          }
        }
      },
      y: {
        display: false, 
        min: 2,
        max: 10
      }
    },
    elements: {
      line: {
        borderWidth: 3, 
        borderColor: 'rgba(54, 162, 235, 1)', 
        shadowColor: 'rgba(54, 162, 235, 0.5)', 
        shadowBlur: 20,
        tension: 0.4 
      }
    }
  };

  const handleSaveReportClick = () => {
    
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card elevation={3} sx={{ width: '400px', height: '300px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <Typography variant="h6" component="h2">Chart Order</Typography>
          <Button variant="outlined" onClick={handleSaveReportClick}>Save Report</Button>
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">Lorem ipsum dolor sit amet.</Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  </Box>
);
};

export default index;