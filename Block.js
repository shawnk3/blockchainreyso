
class Block{

    constructor (prevHash="", TimeStamp,Transaction){
        this.Hash = getHash();
        this.TimeStamp = TimeStamp;
        this.Transaction = Transaction;
        this.prevHash = prevHash;
    }

    getHash(){ //some sort of cipheralgorithm 
        
    }
}

export default Block;