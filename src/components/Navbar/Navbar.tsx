import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';


export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {
	return (
		
		  <AppBar position="fixed">
			<Toolbar>
			  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Practica de programación React + Typescript
			  </Typography>
			</Toolbar>
		  </AppBar>
		
	  );
};

export default Navbar;
