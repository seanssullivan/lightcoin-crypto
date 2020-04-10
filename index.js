class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    return this.transactions.reduce((sum, curr) => sum + curr.value, 0);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  isAllowed() {
    return this.account.balance + this.value > 0 ? true : false;
  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true;

    } else {
      return false;
    }
  }
}

class Deposit extends Transaction{

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
console.log('Transaction Amount:' + t1.value);
const t1Commited = t1.commit();
console.log("Transaction Successful:", t1Commited);
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
console.log('Transaction Amount:' + t2.value);
const t2Commited = t2.commit();
console.log("Transaction Successful:", t2Commited);
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
console.log('Transaction Amount:' + t3.value);
const t3Commited = t3.commit();
console.log("Transaction Successful:", t3Commited);
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
