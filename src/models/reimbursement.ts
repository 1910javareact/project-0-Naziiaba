import { User } from "./user"


export class Reimbursement {
    reimbursementId: number // primary key
    author: number  // foreign key -> User, not null
    amount: number   // not null
    dateSubmitted: number  // not null
    dateResolved: number  // not null
    description: string  // not null
    resolver: number  // foreign key -> User
    status: number  // foreign ey -> ReimbursementStatus, not null
    type: number  // foreign key -> ReimbursementType
  }


  export class ReimbursementType {
    typeId: number   // primary key
    type: string  // not null, unique

    constructor(typeId: number, type: string){
      this.typeId = typeId,
      this.type = type
    }
  }

  //Types:  Lodging, Travel, Food, or Other.

  export class ReimbursementStatus {
    statusId: number   // primary key
    status: string  // not null, unique

    constructor(statusId: number, status: string){
      this.statusId = statusId,
      this.status = status
    }
  }