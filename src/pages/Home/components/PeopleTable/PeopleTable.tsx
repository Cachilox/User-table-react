import { useState, useEffect } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { addFavorite } from "@/redux/states";
import { useAppDispatch, useAppSelector } from "@/hooks";

interface PeopleTableProps {}

const PeopleTable: React.FC<PeopleTableProps> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const dispatch = useAppDispatch();

  const statePeople = useAppSelector((state) => state.people);
  const favoritePeople = useAppSelector((state) => state.favorites);

  const pageSize = 5;

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    favoritePeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const colums = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              onChange={() => handleChange(params.row)}
              checked={findPerson(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level Of Happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  useEffect(() => {
    setSelectedPeople(favoritePeople);
  }, [favoritePeople]);

  return (
    <DataGrid
      rows={statePeople}
      columns={colums}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      getRowId={(row) => row.id}
      initialState={{
        pagination: { paginationModel: { pageSize } },
      }}
      pageSizeOptions={[pageSize]}
    />
  );
};

export default PeopleTable;
