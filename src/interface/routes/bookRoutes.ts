import { Router } from 'express';
import { getAllBooks, createBook } from '../controllers/bookController';

const router = Router();

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: List of all books
 */
router.get('/books', getAllBooks);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               stock:
 *                 type: number
 *     responses:
 *       201:
 *         description: Book added
 */
router.post('/books', createBook);

export default router;