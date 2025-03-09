import { Router } from 'express';
import { getAllBorrowedBooks, createBorrowedBook, updateReturnDate } from '../controllers/borrowedBookController';

const router = Router();

/**
 * @swagger
 * /api/borrowedBooks:
 *   get:
 *     summary: Get all borrowed books
 *     responses:
 *       200:
 *         description: List of all borrowed books
 */
router.get('/borrowedBooks', getAllBorrowedBooks);

/**
 * @swagger
 * /api/borrowedBooks:
 *   post:
 *     summary: Borrow a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: number
 *               bookId:
 *                 type: number
 *               borrowedDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Book borrowed
 */
router.post('/borrowedBooks', createBorrowedBook);

/**
 * @swagger
 * /api/borrowedBooks:
 *   put:
 *     summary: Return a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               returnDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Book returned
 */
router.put('/borrowedBooks', updateReturnDate);

export default router;