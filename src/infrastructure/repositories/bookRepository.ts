import { createConnection } from 'mysql2/promise';
import { Book } from '../../domain/models/book';
import { dbConfig } from '../dbConfig';


export class BookRepository {
  async getAll(): Promise<Book[]> {
    const connection = await createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM Books');
    return rows as Book[];
  }

  async add(book: Book): Promise<void> {
    const connection = await createConnection(dbConfig);
    await connection.query('INSERT INTO Books (code, title, author, stock) VALUES (?, ?, ?, ?)', [book.code, book.title, book.author, book.stock]);
  }
}