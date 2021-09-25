





 class Transaction {

  constructor(amount,Account){
this.amount= amount
this.Account= Account

  }
commit(){
  this.Account.balance += this.value
}

 }
class Account {

constructor(username){


  this.username = username

  this.balance = 0
}



}


class Deposit extends Transaction {
get value(){
  return this.amount
}
}




class Withdrawal extends Transaction {
  
  get value(){
    return -this.amount
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);