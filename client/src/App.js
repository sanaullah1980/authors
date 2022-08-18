import './App.css';
import { Button, TextField, Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import EditAuthor from './components/EditAuthor';
import AddNewAuthor from './components/AddNewAuthor';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Typography
            sx={{margin:"1rem"}} 
            variant="h4" >
          Favorite Authors
        </Typography>
        <Link to={'/new'}> Add New Author </Link>
      </div>
      
      

      <Routes>
        <Route path='/' element={<AuthorList />} />
        <Route path='/new' element={<AddNewAuthor />} />
        <Route path='/errorPage' element={<ErrorPage />} />
        <Route path='/author/:id' element={<EditAuthor />} />
      </Routes>
      
    </div>
  );
}

export default App;
