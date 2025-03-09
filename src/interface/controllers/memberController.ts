import { Request, Response } from 'express';
import { getMembers, addMember } from '../../application/useCases/memberUseCases';
import { Member } from '../../domain/models/member';

export const getAllMembers = async (req: Request, res: Response) => {
  const members = await getMembers();
  res.json(members);
};

export const createMember = async (req: Request, res: Response) => {
  const { code, name } = req.body;
  const member = new Member(0, code, name, null);
  await addMember(member);
  res.status(201).send('Member added');
};