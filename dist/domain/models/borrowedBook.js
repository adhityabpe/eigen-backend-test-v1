"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBook = void 0;
class BorrowedBook {
    constructor(id, memberId, bookId, borrowedDate, returnDate) {
        this.id = id;
        this.memberId = memberId;
        this.bookId = bookId;
        this.borrowedDate = borrowedDate;
        this.returnDate = returnDate;
    }
}
exports.BorrowedBook = BorrowedBook;
