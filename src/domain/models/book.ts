export class Book {
    constructor(
      public id: number,
      public code: string,
      public title: string,
      public author: string,
      public stock: number
    ) {}
  }