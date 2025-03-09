import { MemberRepository } from '../../infrastructure/repositories/memberRepository';
import { Member } from '../../domain/models/member';

const memberRepository = new MemberRepository();

export const getMembers = async (): Promise<Member[]> => {
  return await memberRepository.getAll();
};

export const addMember = async (member: Member): Promise<void> => {
  await memberRepository.add(member);
};