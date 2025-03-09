import { Request, Response } from 'express';
import { getBorrowedBooks, borrowBook, returnBook } from '../../application/useCases/borrowedBookUseCases';
import { BorrowedBook } from '../../domain/models/borrowedBook';

export const getAllBorrowedBooks = async (req: Request, res: Response) => {
  const borrowedBooks = await getBorrowedBooks();
  res.json(borrowedBooks);
};

export const createBorrowedBook = async (req: Request, res: Response) => {
  const { memberId, bookId, borrowedDate } = req.body;
  const borrowedBook = new BorrowedBook(0, memberId, bookId, borrowedDate, null);
  await borrowBook(borrowedBook);
  res.status(201).send('Book borrowed');
};

export const updateReturnDate = async (req: Request, res: Response) => {
  const { id, returnDate } = req.body;
  await returnBook(id, returnDate);
  res.status(200).send('Book returned');
};