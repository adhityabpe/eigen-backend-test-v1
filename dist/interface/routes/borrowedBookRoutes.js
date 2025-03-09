"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrowedBookController_1 = require("../controllers/borrowedBookController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/borrowedBooks:
 *   get:
 *     summary: Get all borrowed books
 *     responses:
 *       200:
 *         description: List of all borrowed books
 */
router.get('/borrowedBooks', borrowedBookController_1.getAllBorrowedBooks);
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
router.post('/borrowedBooks', borrowedBookController_1.createBorrowedBook);
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
router.put('/borrowedBooks', borrowedBookController_1.updateReturnDate);
exports.default = router;
