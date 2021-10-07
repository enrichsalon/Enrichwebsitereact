import * as React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Rating, Typography } from '@mui/material';



export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100px',
          height: '25px',
          marginBottom:"1rem",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 0.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        
        <Typography sx={{paddingLeft:"4px", paddingRight:"4px" , width: "15px"}}>4.3</Typography>
        <Rating name="StarRateIcon" defaultValue={1} max={1} sx={{width: "15.3px" , paddingRight:"10px",paddingLeft:"4px"}}/>
        <Divider orientation="vertical" flexItem />
        <Typography  sx={{paddingLeft:"4px" ,paddingRight:"4px", width: "18px"}}>218</Typography>
        
      </Box>
    </div>
  );
}