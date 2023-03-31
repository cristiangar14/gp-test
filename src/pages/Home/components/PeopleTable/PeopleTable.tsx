import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface PeopleTableProps {}

const PeopleTable : React.FC<PeopleTableProps> = () => {

	const pageSize = 5
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const dispatch = useDispatch()
	const statePeople = useSelector((store: AppStore)=> store.people)
	const stateFavorites = useSelector((store: AppStore)=> store.favorites)

	const findPerson = (person: Person) => !!stateFavorites.find(p => p.id === person.id)
	const filterPerson = (person: Person) => stateFavorites.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
		dispatch(addFavorite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}

	useEffect(() => {
		setSelectedPeople(stateFavorites)
	}, [stateFavorites])
	

	const columns = [
		{ 
			field: 'actions',
			headerName: '',
			type:'actions',
			sortable: false,
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Checkbox 
					size='small' 
					checked={findPerson(params.row)} 
					onChange={()=> handleChange(params.row)}
				/>
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
	rows={statePeople}
	disableColumnSelector
	disableRowSelectionOnClick
	autoHeight
	pagination
	pageSizeOptions={[pageSize, 100]}
	rowCount={pageSize}
	getRowId={(row:any) => row.id}

/>;
};

export default PeopleTable;
