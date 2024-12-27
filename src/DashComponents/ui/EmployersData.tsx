import { getAllEmployersFn } from "@/Redux/Slice/Employe/AllEmloyers";
import { AppDispatch, RootState } from "@/Redux/Store";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
 
import { useSelector } from "react-redux";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { delEmployeeFn, resetDelEmployees } from "@/Redux/Slice/Employe/DeleteEmployesSlice";


const columns: GridColDef[] = [
    { field: 'employee_id', headerName: 'Id', width: 100 },
    { field: 'employee_name', headerName: 'Name', width: 200 },
    { field: 'employee_address', headerName: 'Email', width: 300 },
    { field: 'employee_phone', headerName: 'Phone number', width: 200 },
    { field: 'salary_amount', headerName: 'Salary', width: 200 },
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
  
  


  export const ActionCell = (params:any) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch<AppDispatch>()
   

   
  
    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleDelete = () => {
      dispatch(delEmployeeFn(params.row.employee_id));
      dispatch(resetDelEmployees());
      handleClose();
    };
  
    // const GetOneVendorHandle = () => {
    //   dispatch(getOneVendorFn(params.row.vendor_id));
    //   dispatch(resetOneVendor());
    //   handleClose();
    // };
  
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
          <Link to={`/Dashboard/Employees/update/${params.row.employee_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem onClick={() => console.log('Update')}>Update</MenuItem>
          </Link>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          <MenuItem onClick={() => console.log('More')}>More</MenuItem>
        </Menu>
      </div>
    );
  };



function EmployersData() {

  const navigate = useNavigate();
  const toastId = "deleteVendor";
 const AllEmployeesState= useSelector((state:RootState)=> state.AllEmployes)
 const dispatch= useDispatch<AppDispatch>()
 useEffect(() => {
  dispatch(getAllEmployersFn());
}, [dispatch]);

const DeleteEmplyState= useSelector((state:RootState)=>state.deleteEmployee)



 useEffect(() => {
  if (DeleteEmplyState.isLoading) toast.loading('Deleting!', { id: toastId });
  if (DeleteEmplyState.isSuccess) {
    toast.success('Vendor is deleted.', { id: toastId });
    navigate('/Dashboard/Employees');
  }
  if (DeleteEmplyState.isError) {
    toast.error(DeleteEmplyState.errorMsg, { id: toastId });
  }
  dispatch(resetDelEmployees());
}, [DeleteEmplyState.isLoading, DeleteEmplyState.isError, DeleteEmplyState.isSuccess, dispatch, navigate]);

  return (
    <div>

      
   
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: 1, width: '98%' }}>
        <DataGrid
          rows={AllEmployeesState.data.map((employer) => ({ id: employer.employee_id, ...employer }))}
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
  )
}

export default EmployersData