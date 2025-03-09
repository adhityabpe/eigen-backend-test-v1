import { BookRepository } from '../../infrastructure/repositories/bookRepository';
import { Book } from '../../domain/models/book';

const bookRepository = new BookRepository();

export const getBooks = async (): Promise<Book[]> => {
  return await bookRepository.getAll();
};

export const addBook = async (book: Book): Promise<void> => {
  await bookRepository.add(book);
};