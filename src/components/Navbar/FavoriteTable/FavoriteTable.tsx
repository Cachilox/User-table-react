import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Person } from "@/models";
import { removeFavorite } from "@/redux/states";

interface FavoriteTableProps {}

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
  const dispatch = useAppDispatch();
  const stateFavorites = useAppSelector((state) => state.favorites);
  const pageSize = 5;

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
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
            <IconButton
              onClick={() => handleClick(params.row)}
              color="secondary"
              aria-label="favorites"
              component="label"
            >
              <DeleteIcon />
            </IconButton>
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
      headerName: "level Of Happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={stateFavorites}
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

export default FavoriteTable;
