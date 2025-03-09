import { createConnection } from 'mysql2/promise';
import { BorrowedBook } from '../../domain/models/borrowedBook';
import { dbConfig } from '../dbConfig';



export class BorrowedBookRepository {
  async getAll(): Promise<BorrowedBook[]> {
    const connection = await createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM BorrowedBooks');
    return rows as BorrowedBook[];
  }

  async add(borrowedBook: BorrowedBook): Promise<void> {
    const connection = await createConnection(dbConfig);
    await connection.query('INSERT INTO BorrowedBooks (memberId, bookId, borrowedDate, returnDate) VALUES (?, ?, ?, ?)', [borrowedBook.memberId, borrowedBook.bookId, borrowedBook.borrowedDate, borrowedBook.returnDate]);
  }

  async updateReturnDate(id: number, returnDate: Date): Promise<void> {
    const connection = await createConnection(dbConfig);
    await connection.query('UPDATE BorrowedBooks SET returnDate = ? WHERE id = ?', [returnDate, id]);
  }
}