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
const promise_1 = require("mysql2/promise");
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_eigen'
};
const mockMembers = [
    { code: 'M001', name: 'Angga' },
    { code: 'M002', name: 'Ferry' },
    { code: 'M003', name: 'Putri' }
];
const mockBooks = [
    { code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1 },
    { code: 'SHR-1', title: 'A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 1 },
    { code: 'TW-11', title: 'Twilight', author: 'Stephenie Meyer', stock: 1 },
    { code: 'HOB-83', title: 'The Hobbit, or There and Back Again', author: 'J.R.R. Tolkien', stock: 1 },
    { code: 'NRN-7', title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', stock: 1 }
];
function setupDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, promise_1.createConnection)(dbConfig);
        yield connection.query('DELETE FROM BorrowedBooks');
        yield connection.query('DELETE FROM Members');
        yield connection.query('DELETE FROM Books');
        for (const member of mockMembers) {
            yield connection.query('INSERT INTO Members (code, name) VALUES (?, ?)', [member.code, member.name]);
        }
        for (const book of mockBooks) {
            yield connection.query('INSERT INTO Books (code, title, author, stock) VALUES (?, ?, ?, ?)', [book.code, book.title, book.author, book.stock]);
        }
        yield connection.end();
    });
}
setupDatabase().then(() => {
    console.log('Database setup complete');
}).catch((err) => {
    console.error('Error setting up database:', err);
});
