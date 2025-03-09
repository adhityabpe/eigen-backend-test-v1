export class BorrowedBook {
    constructor(
      public id: number,
      public memberId: number,
      public bookId: number,
      public borrowedDate: Date,
      public returnDate: Date | null
    ) {}
  }