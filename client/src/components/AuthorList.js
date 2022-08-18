import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const AuthorList = () => {

    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);

    const deleteAuthor = (id) => {
        console.log(id);
        const deleteItem = async () => {
            try {
                await axios.delete(`http://localhost:5000/api/author/${id}`)   
                filterAuthor(id);
            } catch (error) {
                console.log(error);
            }
        }
        deleteItem();
    }

    const filterAuthor= (id) => {
        const newAuthorList = authors.filter((author)=> {
            return author._id !== id
        })

        setAuthors(newAuthorList);
    }

    const columns = [
        { field: 'name', headerName: 'Author Name', width: 230 },
        {
            field: "Actions Available",
            width: 300,
            renderCell: (cellValues) => {
              return (
                <Box>
                    <Button
                        sx={{marginLeft: '1rem'}}
                        variant="contained"
                        color="primary"
                        onClick={(event) => {
                            navigate(`/author/${cellValues.row._id}`);
                        }}
                    >
                    Edit
                    </Button>
                    <Button
                        sx={{marginLeft: '1rem'}}
                        variant="outlined"
                        color="primary"
                        onClick={(event) => {
                            deleteAuthor(cellValues.row._id)
                        }}
                    >
                        Delete
                    </Button>    
                </Box>
                
              );
            }
          }
      ];

    const list__style = {
        marginLeft: '1rem'
    }

    useEffect(() => {
        const getAuthors = async () =>{
            try {
                const res = await axios.get('http://localhost:5000/api/author');
                const resData = await res.data;
                setAuthors(resData.data)
            } catch (error) {
                console.log(error);
            }
        }

        getAuthors();
    }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginTop="3rem">
        <Typography variant='h5'>We have quotes by:</Typography>
        <Box sx={{ height: 400, width: '40%' }}>
            <DataGrid
                getRowId={(row) => row._id}
                checkboxSelection={false}
                rows={authors}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
        
    </Box>
  )
}

export default AuthorList;