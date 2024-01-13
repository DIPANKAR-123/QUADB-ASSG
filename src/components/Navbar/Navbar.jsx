import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from '@mui/icons-material/Translate';
import InsightsIcon from '@mui/icons-material/Insights';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
let navigate=useNavigate();
  useEffect(()=>{
    if(value==0){
        navigate('')
    }
    else if(value==1){
        navigate('/latest')
    }
    else if(value==2){
        navigate('/search')
    }
   
  },[value])
  return (
    <div className='flex justify-around  z-[101]'>
        
    <Box sx={{  width: '100%',
    position: 'fixed',
    bottom: 0,
    
    zIndex: 100, 
      }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        <BottomNavigationAction label="Movies" style={{ color: "red" ,
     margin:'1rem' }} icon={<MovieCreationIcon />} />
        <BottomNavigationAction label="Latest"   style={{ color: "red" ,
     marginRight:'1rem' }} icon={<InsightsIcon />} />
        {/* <BottomNavigationAction label="Language"  style={{ color: "red" ,
     marginRight:'1rem' }} icon={<TranslateIcon />} /> */}
        <BottomNavigationAction label="Search"  style={{ color: "red" ,
     marginRight:'1rem' }} icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
   

    
    
    </div>
  );
}