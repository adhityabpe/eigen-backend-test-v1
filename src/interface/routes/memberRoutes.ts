import { Router } from 'express';
import { getAllMembers, createMember } from '../controllers/memberController';

const router = Router();

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     responses:
 *       200:
 *         description: List of all members
 */
router.get('/members', getAllMembers);

/**
 * @swagger
 * /api/members:
 *   post:
 *     summary: Add a new member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member added
 */
router.post('/members', createMember);

export default router;