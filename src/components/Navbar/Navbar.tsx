import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';


export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {
	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	}

	return (
		<>
		<CustomDialog >
			<FavoriteTable />
		</CustomDialog>
		  <AppBar position="fixed">
			<Toolbar>
			  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Practica de programación React + Typescript + MUI
			  </Typography>
			  <Button 
			  	onClick={handleClick}
			  	variant='contained' 
				color="secondary">Open Favorites</Button>
			</Toolbar>
		  </AppBar>
		</>
		
		
	  );
};

export default Navbar;
