import { createConnection } from 'mysql2/promise';
import { Member } from '../../domain/models/member';
import { dbConfig } from '../dbConfig';

export class MemberRepository {
  async getAll(): Promise<Member[]> {
    const connection = await createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM Members');
    return rows as Member[];
  }

  async add(member: Member): Promise<void> {
    const connection = await createConnection(dbConfig);
    await connection.query('INSERT INTO Members (code, name) VALUES (?, ?)', [member.code, member.name]);
  }
}