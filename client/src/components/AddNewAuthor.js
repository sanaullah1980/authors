import { Button, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddNewAuthor = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");

  const updateName = async (e) => {
      try {
          const res = await axios.post('http://localhost:5000/api/author/', {
              name
          });
          setName("");
          navigate('/');

      } catch (error) {
          setErrors(error.response.data.error.errors);
          console.log(errors);
      }
  }


return (
  <div className='edit'>
      <Typography variant='h6'>Add New Author</Typography> 
      <div className='edit__form'>
          <TextField 
                  label= "Name"
                  variant='filled'
                  value={name}
                  helperText={errors && errors.name && errors.name.message}
                  error={errors && errors.name.message}
                  onChange={(e)=> setName(e.target.value)}
          
          />
          <div style={{marginTop: '1rem'}}>
              <Button style={{marginRight: '1rem'}}variant='outlined' onClick={(e)=> navigate('/')}>Cancel</Button>
              <Button variant='contained' onClick={(e)=> updateName(e)}>Submit</Button>
          </div>
      </div>
      
  </div>

)
}

export default AddNewAuthor;