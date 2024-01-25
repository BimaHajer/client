
export class User {
    constructor(
      public id? : number,
      public name? : string,
      public email? : string,
      public oldPassword? : string,
      public password? : string,
      public repassword?:string,
      public picture?: string,
      public resToken? : string,
      public active? : boolean,
      public contactId?: string,
      public role?: string,
      public createdBy?:number,
      public updatedBy?:number,
      public customerId?:number 
    ) {}
  }