
class Transaction {

    constructor(senderId, receiverId, amount){
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.amount = amount;
    }
    getAmount() { return this.amount;}

}

export default Transaction;