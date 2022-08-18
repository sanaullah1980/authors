import express from 'express';
import { createNewAuthor, deleteAuthorById, getAuthorById, getAuthors, updateAuthorById } from '../controllers/author.js';

const router = express();

router
    .route('/')
    .get(getAuthors)
    .post(createNewAuthor)

router
    .route('/:_id')
    .get(getAuthorById)
    .put(updateAuthorById)
    .delete(deleteAuthorById)

export default router;