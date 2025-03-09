import { createConnection } from 'mysql2/promise';

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

async function setupDatabase() {
  const connection = await createConnection(dbConfig);

  await connection.query('DELETE FROM BorrowedBooks');
  await connection.query('DELETE FROM Members');
  await connection.query('DELETE FROM Books');

  for (const member of mockMembers) {
    await connection.query('INSERT INTO Members (code, name) VALUES (?, ?)', [member.code, member.name]);
  }

  for (const book of mockBooks) {
    await connection.query('INSERT INTO Books (code, title, author, stock) VALUES (?, ?, ?, ?)', [book.code, book.title, book.author, book.stock]);
  }

  await connection.end();
}

setupDatabase().then(() => {
  console.log('Database setup complete');
}).catch((err) => {
  console.error('Error setting up database:', err);
});