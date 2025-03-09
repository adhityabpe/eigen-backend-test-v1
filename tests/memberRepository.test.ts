import { MemberRepository } from '../src/infrastructure/repositories/memberRepository';
import { Member } from '../src/domain/models/member';

jest.mock('../src/infrastructure/repositories/memberRepository');

describe('MemberRepository', () => {
  let memberRepository: MemberRepository;

  beforeEach(() => {
    memberRepository = new MemberRepository();
  });

  it('should get all members', async () => {
    const mockMembers = [{ id: 1, code: 'M001', name: 'Angga', penaltyUntil: null }];
    memberRepository.getAll = jest.fn().mockResolvedValue(mockMembers); // Mock the getAll method
    const members = await memberRepository.getAll();
    expect(members).toEqual(mockMembers);
  });

  it('should add a member', async () => {
    const member = new Member(0, 'M002', 'Ferry', null);
    memberRepository.add = jest.fn().mockResolvedValue(undefined); // Mock the add method
    await memberRepository.add(member);
    expect(memberRepository.add).toHaveBeenCalledWith(member);
  });
});