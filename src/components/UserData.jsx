import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {addUserAction, deleteUserAction, removeAllUsersAction} from '../store/slices/userSlice'; 
import { randomData } from '../api/chance';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function UserData() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users); // Assuming users is the slice name for user data

  const addUser = (name) => {
    dispatch(addUserAction({ name })); // Changed addUser to addUserAction
  }
  
  const deleteUser = (id) => {
    dispatch(deleteUserAction({ id }));
  } 
  
  const removeAllUsers = () => {
    dispatch(removeAllUsersAction());
  }
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>List of users</StyledTableCell>
            <StyledTableCell align="right"><button
              onClick={() => {
                addUser(randomData().name);
              }}
            >Add new user</button></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={()=>{
                  deleteUser(id);
                }}>Delete</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {(users.length === 0)?<p>No users available</p> : <div style={{marginTop:"20px",display:"flex", justifyContent:"right"}}>
        <button onClick={()=>{
          removeAllUsers();
        }}>Delete All</button>
    </div>}
    </>
  );
}
