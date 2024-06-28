import { Account, OtherAccount } from "./class/dioAccount";
import { PeopleAccount } from "./class/peopleAccount";
import { CompanyAccount } from "./class/companyAccount";
import { OtherDioAccount } from "./class/otherAccount";


const otherAccount: OtherDioAccount = new OtherDioAccount ()
console.log(otherAccount)
otherAccount.deposit(400)
console.log(otherAccount)
