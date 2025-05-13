import { AppDispatch, RootState } from "@/Redux/Store";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getAllUsersFn } from "@/Redux2/Slice/AllCustomers";
import SideParsm from "../SideParsm";
import Nav from "../Nav";
// Make sure this import points to the correct slice

// Define the columns based on the user data
const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'role', headerName: 'Role', width: 100 },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    width: 150,
    renderCell: (params) => {
      const date = new Date(params.row.updatedAt);
      const formattedDate = date.toLocaleDateString(); // Format to 'YYYY-MM-DD'
      return <span>{formattedDate}</span>;
    },
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ActionCell {...params} />
      </div>
    ),
  },
];

const ActionCell = (params: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleDelete = () => {
    toast.success(`User ${params.row.username} deleted.`);
    handleClose();
  };

  return (
    <div>
      <MoreVertIcon
        aria-label="more"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        <Link to={`/Dashboard/Users/update/${params.row.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={() => console.log('Update')}>Update</MenuItem>
        </Link>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={() => console.log('More')}>More</MenuItem>
      </Menu>
    </div>
  );
};

function UsersData() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.AllUsers.data);
  const isLoading = useSelector((state: RootState) => state.AllUsers.isLoading);
  const isError = useSelector((state: RootState) => state.AllUsers.isError);
  const errorMsg = useSelector((state: RootState) => state.AllUsers.errorMsg);

  useEffect(() => {
    dispatch(getAllUsersFn());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(errorMsg);
    }
  }, [isError, errorMsg]);

  return (
    <div className=" min-h-screen">
      <div className='p-3 flex justify-between'>
      <h1 className='lg:hidden'>
        <SideParsm />
      </h1>
      <div className="navhome p-0 flex w-full justify-end">
        <Nav />
      </div>
    </div>
    <div className=" bg-white rounded-md overflow-hidden">

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: 1, width: '98%' }}>
        <DataGrid
          rows={users.map((user) => ({ id: user.id, ...user }))}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            gap: '20px',
          }}
        />
      </Box>
    </Box>
    </div>
    </div>
  );
}

export default UsersData;
