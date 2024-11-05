import "./AppBar.style.css";

import AppBarMenuIcon from "../Icons/AppBarMenuIcon";
import styled from '@emotion/styled';
import IconButton  from "@mui/material/IconButton";

const AppBarMenuButton = styled(IconButton)`
color: white;
padding: 6px 3px`;

export default function AppBar() {
  return (
    <div className="AppBar">
      <AppBarMenuButton disabled className="AppBar__Button">
        <AppBarMenuIcon />
      </AppBarMenuButton >
      <div className="AppBar__Header">Home</div>
    </div>
  );
}