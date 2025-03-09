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
exports.createBook = exports.getAllBooks = void 0;
const bookUseCases_1 = require("../../application/useCases/bookUseCases");
const book_1 = require("../../domain/models/book");
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, bookUseCases_1.getBooks)();
    res.json(books);
});
exports.getAllBooks = getAllBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, title, author, stock } = req.body;
    const book = new book_1.Book(0, code, title, author, stock);
    yield (0, bookUseCases_1.addBook)(book);
    res.status(201).send('Book added');
});
exports.createBook = createBook;
