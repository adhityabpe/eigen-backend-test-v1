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
exports.returnBook = exports.borrowBook = exports.getBorrowedBooks = void 0;
const borrowedBookRepository_1 = require("../../infrastructure/repositories/borrowedBookRepository");
const borrowedBookRepository = new borrowedBookRepository_1.BorrowedBookRepository();
const getBorrowedBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield borrowedBookRepository.getAll();
});
exports.getBorrowedBooks = getBorrowedBooks;
const borrowBook = (borrowedBook) => __awaiter(void 0, void 0, void 0, function* () {
    yield borrowedBookRepository.add(borrowedBook);
});
exports.borrowBook = borrowBook;
const returnBook = (id, returnDate) => __awaiter(void 0, void 0, void 0, function* () {
    yield borrowedBookRepository.updateReturnDate(id, returnDate);
});
exports.returnBook = returnBook;
