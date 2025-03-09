import { getBooks, addBook } from '../src/application/useCases/bookUseCases';
import { BookRepository } from '../src/infrastructure/repositories/bookRepository';
import { Book } from '../src/domain/models/book';
import { setupDatabase, teardownDatabase } from './setupDatabase';

jest.mock('../src/infrastructure/repositories/bookRepository');

describe('BookUseCases', () => {
  let bookRepository: BookRepository;

  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await teardownDatabase();
  });

  beforeEach(() => {
    bookRepository = new BookRepository();
  });

  it('should get all books', async () => {
    const mockBooks = [{ id: 1, code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1 }];
    (bookRepository.getAll as jest.Mock).mockResolvedValue(mockBooks); // Mock the getAll method
    const books = await getBooks();
    console.log(books); // Log the actual value
    expect(books).toMatchObject(mockBooks);
  });

  it('should add a book', async () => {
    const book = new Book(0, 'JK-45', 'Harry Potter', 'J.K Rowling', 1);
    (bookRepository.add as jest.Mock).mockResolvedValue(undefined); // Mock the add method
    await addBook(book);
    expect(bookRepository.add).toHaveBeenCalledWith(book);
  });
});