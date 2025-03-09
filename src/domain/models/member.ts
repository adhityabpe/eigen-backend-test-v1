export class Member {
    constructor(
      public id: number,
      public code: string,
      public name: string,
      public penaltyUntil: Date | null
    ) {}
  }