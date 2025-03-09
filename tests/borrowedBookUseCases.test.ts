import { borrowBook, returnBook, getBorrowedBooks } from '../src/application/useCases/borrowedBookUseCases';
import { BorrowedBookRepository } from '../src/infrastructure/repositories/borrowedBookRepository';
import { BorrowedBook } from '../src/domain/models/borrowedBook';
import { setupDatabase, teardownDatabase } from './setupDatabase';

jest.mock('../src/infrastructure/repositories/borrowedBookRepository');

describe('BorrowedBookUseCases', () => {
  let borrowedBookRepository: BorrowedBookRepository;

  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await teardownDatabase();
  });

  beforeEach(() => {
    borrowedBookRepository = new BorrowedBookRepository();
  });

  it('should borrow a book', async () => {
    const borrowedBook = new BorrowedBook(0, 1, 1, new Date(), null);
    (borrowedBookRepository.add as jest.Mock).mockResolvedValue(undefined); // Mock the add method
    await borrowBook(borrowedBook);
    expect(borrowedBookRepository.add).toHaveBeenCalledWith(borrowedBook);
  });

  it('should return a book', async () => {
    const returnDate = new Date();
    (borrowedBookRepository.updateReturnDate as jest.Mock).mockResolvedValue(undefined); // Mock the updateReturnDate method
    await returnBook(1, returnDate);
    expect(borrowedBookRepository.updateReturnDate).toHaveBeenCalledWith(1, returnDate);
  });

  it('should get all borrowed books', async () => {
    const mockBorrowedBooks = [{ id: 1, memberId: 1, bookId: 1, borrowedDate: new Date(), returnDate: null }];
    (borrowedBookRepository.getAll as jest.Mock).mockResolvedValue(mockBorrowedBooks); // Mock the getAll method
    const borrowedBooks = await getBorrowedBooks();
    console.log(borrowedBooks); // Log the actual value
    expect(borrowedBooks).toMatchObject(mockBorrowedBooks);
  });
});