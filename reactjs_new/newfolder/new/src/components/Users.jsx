import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';

function Users() {

  const [books, setBooks] = useState([]);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []);

  return (
    <>
      <h1>Game of Thrones Books</h1>
      {/* display users from the API */}
          <TableContainer>
          <Button variant="contained" color="primary" style={{float:"right"}}>Add</Button>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email&nbsp;</TableCell>
                  <TableCell>Phone&nbsp;</TableCell>
                  <TableCell>Website&nbsp;</TableCell>
                  <TableCell>Edit&nbsp;</TableCell>
                  <TableCell>Delete&nbsp;</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>                      
                  {books.map((book, index) => (
                  <TableRow>
                    <TableCell>{book.name}</TableCell>
                    <TableCell>{book.username}</TableCell>
                    <TableCell>{book.email}</TableCell>
                    <TableCell>{book.phone}</TableCell>
                    <TableCell>{book.website}</TableCell>
                    <TableCell><CreateIcon/></TableCell>
                    <TableCell><DeleteForeverIcon/></TableCell>
                  </TableRow>
                   ))} 
              </TableBody>
            </Table>
          </TableContainer>
      <Table/>
      </>
  )
}

export default Users;