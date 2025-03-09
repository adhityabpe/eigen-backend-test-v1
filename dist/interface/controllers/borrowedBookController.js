"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReturnDate = exports.createBorrowedBook = exports.getAllBorrowedBooks = void 0;
const borrowedBookUseCases_1 = require("../../application/useCases/borrowedBookUseCases");
const borrowedBook_1 = require("../../domain/models/borrowedBook");
const getAllBorrowedBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowedBooks = yield (0, borrowedBookUseCases_1.getBorrowedBooks)();
    res.json(borrowedBooks);
});
exports.getAllBorrowedBooks = getAllBorrowedBooks;
const createBorrowedBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId, bookId, borrowedDate } = req.body;
    const borrowedBook = new borrowedBook_1.BorrowedBook(0, memberId, bookId, borrowedDate, null);
    yield (0, borrowedBookUseCases_1.borrowBook)(borrowedBook);
    res.status(201).send('Book borrowed');
});
exports.createBorrowedBook = createBorrowedBook;
const updateReturnDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, returnDate } = req.body;
    yield (0, borrowedBookUseCases_1.returnBook)(id, returnDate);
    res.status(200).send('Book returned');
});
exports.updateReturnDate = updateReturnDate;
