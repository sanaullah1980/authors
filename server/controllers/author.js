import Author from '../model/Author.js';


//@desc         Get all authors
//@route        GET /api/authors 
export const getAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.status(200).json({
            success: true,
            data: authors
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}


//@desc         Get author by Id
//@route        GET /api/author/:id
export const getAuthorById = async (req, res, next) => {
    try {
        const author = await Author.findById(req.params._id);
        res.status(200).json({
            success: true,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

//@desc         Create new Author
//@route        POST /api/author 
export const createNewAuthor = async (req, res, next) => {
    try {
 
        const author = await Author.create(req.body);
        res.status(200).json({
            success: true,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

//@desc         Delete Author
//@route        delete /api/author/:id
export const deleteAuthorById = async (req, res, next) => {
   
    try { 
        const author = await Author.deleteOne({ _id: req.params._id });
        res.status(200).json({
            success: true,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

//@desc         update author
//@route        put /api/author/:id
export const updateAuthorById = async (req, res, next) => {
    try { 
        const author = await Author.findOneAndUpdate({ _id: req.params._id }, req.body, {
            new:true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            data: author
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}