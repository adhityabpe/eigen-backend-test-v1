import { Request, Response } from 'express';
import { getBooks, addBook } from '../../application/useCases/bookUseCases';
import { Book } from '../../domain/models/book';

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await getBooks();
  res.json(books);
};

export const createBook = async (req: Request, res: Response) => {
  const { code, title, author, stock } = req.body;
  const book = new Book(0, code, title, author, stock);
  await addBook(book);
  res.status(201).send('Book added');
};