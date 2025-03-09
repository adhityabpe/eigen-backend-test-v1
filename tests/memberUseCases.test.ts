import { getMembers, addMember } from '../src/application/useCases/memberUseCases';
import { MemberRepository } from '../src/infrastructure/repositories/memberRepository';
import { Member } from '../src/domain/models/member';
import { setupDatabase, teardownDatabase } from './setupDatabase';

jest.mock('../src/infrastructure/repositories/memberRepository');

describe('MemberUseCases', () => {
  let memberRepository: MemberRepository;

  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await teardownDatabase();
  });

  beforeEach(() => {
    memberRepository = new MemberRepository();
  });

  it('should get all members', async () => {
    const mockMembers = [{ id: 1, code: 'M001', name: 'Angga', penaltyUntil: null }];
    (memberRepository.getAll as jest.Mock).mockResolvedValue(mockMembers); // Mock the getAll method
    const members = await getMembers();
    console.log(members); // Log the actual value
    expect(members).toMatchObject(mockMembers);
  });

  it('should add a member', async () => {
    const member = new Member(0, 'M002', 'Ferry', null);
    (memberRepository.add as jest.Mock).mockResolvedValue(undefined); // Mock the add method
    await addMember(member);
    expect(memberRepository.add).toHaveBeenCalledWith(member);
  });
});