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
exports.addBook = exports.getBooks = void 0;
const bookRepository_1 = require("../../infrastructure/repositories/bookRepository");
const bookRepository = new bookRepository_1.BookRepository();
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bookRepository.getAll();
});
exports.getBooks = getBooks;
const addBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    yield bookRepository.add(book);
});
exports.addBook = addBook;
