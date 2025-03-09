"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberController_1 = require("../controllers/memberController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     responses:
 *       200:
 *         description: List of all members
 */
router.get('/members', memberController_1.getAllMembers);
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
router.post('/members', memberController_1.createMember);
exports.default = router;
