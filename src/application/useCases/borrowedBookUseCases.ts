import { BorrowedBookRepository } from '../../infrastructure/repositories/borrowedBookRepository';
import { BorrowedBook } from '../../domain/models/borrowedBook';

const borrowedBookRepository = new BorrowedBookRepository();

export const getBorrowedBooks = async (): Promise<BorrowedBook[]> => {
  return await borrowedBookRepository.getAll();
};

export const borrowBook = async (borrowedBook: BorrowedBook): Promise<void> => {
  await borrowedBookRepository.add(borrowedBook);
};

export const returnBook = async (id: number, returnDate: Date): Promise<void> => {
  await borrowedBookRepository.updateReturnDate(id, returnDate);
};