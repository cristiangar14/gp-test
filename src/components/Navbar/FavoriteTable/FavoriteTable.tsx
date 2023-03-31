import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Button } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTableProps {}

const FavoriteTable : React.FC<FavoriteTableProps> = () => {
	const pageSize = 5
	const dispatch = useDispatch()
	const stateFavorites = useSelector((store: AppStore)=> store.favorites)

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person))
	}

	const columns = [
		{ 
			field: 'actions',
			headerName: '',
			type:'actions',
			sortable: false,
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Button 
			  	onClick={()=> handleClick(params.row)}
			  	variant='contained' 
				color="secondary">-</Button>
			}</>
		},
		{ 
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{ 
			field: 'category',
			headerName: 'Category',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{ 
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{ 
			field: 'levelOfHappiness',
			headerName: 'Happiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	]

	return <DataGrid
	columns={columns}
	rows={stateFavorites}
	disableColumnSelector
	disableRowSelectionOnClick
	autoHeight
	pagination
	pageSizeOptions={[pageSize, 100]}
	rowCount={pageSize}
	getRowId={(row:any) => row.id}

/>;
};

export default FavoriteTable;
