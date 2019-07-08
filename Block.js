
class Block{

    constructor (prevHash="", TimeStamp,Transaction){
        this.Hash = getHash();
        this.TimeStamp = TimeStamp;
        this.Transaction = Transaction;
        this.prevHash = prevHash;
    }

    getHash(){ return this.prevHash + this.TimeStamp + JSON.stringify(this.Transaction) }
}

export default Block;