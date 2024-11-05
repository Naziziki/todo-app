import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import styled from "@emotion/styled";

import HomeIcon from "../Icons/HomeIcon";

export default function NavBar() {
  
  const CustomBottomNavigationAction = styled(BottomNavigationAction)`
    color: white;`;
  
  return (

    <BottomNavigation showLabels 
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        borderTop: 'solid 1px var(--color-border-task)',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '72px',
    }}>

      <CustomBottomNavigationAction label='Home' icon={<HomeIcon /> } />
      <CustomBottomNavigationAction label='Tracker' icon={<HomeIcon />}  />
      <CustomBottomNavigationAction label='Settings' icon={<HomeIcon />}/>
    </BottomNavigation>
  );
}
