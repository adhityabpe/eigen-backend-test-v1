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
exports.BookRepository = void 0;
const promise_1 = require("mysql2/promise");
const dbConfig_1 = require("../dbConfig");
class BookRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, promise_1.createConnection)(dbConfig_1.dbConfig);
            const [rows] = yield connection.query('SELECT * FROM Books');
            return rows;
        });
    }
    add(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, promise_1.createConnection)(dbConfig_1.dbConfig);
            yield connection.query('INSERT INTO Books (code, title, author, stock) VALUES (?, ?, ?, ?)', [book.code, book.title, book.author, book.stock]);
        });
    }
}
exports.BookRepository = BookRepository;
