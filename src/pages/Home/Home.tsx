import { People } from "@/data";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const pageSize = 5;
  const colums = [
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
  ];

  return (
    <DataGrid
      rows={People}
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

export default Home;
