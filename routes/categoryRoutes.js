const express = require('express');
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/category', getCategories);
router.post('/categories',  createCategory);
router.put('/:id',  updateCategory);
router.delete('/:id',  deleteCategory);

module.exports = router;
