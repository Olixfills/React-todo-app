import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';



const card = (
  <React.Fragment>
    <CardContent style={{textAlign: 'center'}} >
            <ArrowCircleUpIcon color='primary' style={{ fontSize: '10rem'}} />
      <Typography variant="h3"  color='primary' >
        Add Your Todos Here
        </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">{card}</Card>
    </Box>
  );
}
