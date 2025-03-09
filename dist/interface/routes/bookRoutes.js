"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: List of all books
 */
router.get('/books', bookController_1.getAllBooks);
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
router.post('/books', bookController_1.createBook);
exports.default = router;
