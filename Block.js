import SHA256 from "crypto.js";

class Block{

    constructor (prevHash="", TimeStamp,Transaction){
        this.Hash = getHash();
        this.TimeStamp = TimeStamp;
        this.Transaction = Transaction;
        this.prevHash = prevHash;
    }

    getHash(){ //cryptographic hash algorithm
        return SHA256(this.prevHash + this.TimeStamp + JSON.stringify(this.Transaction)).toString();
        //not what goes in parenthesis, but using SHA256, it's pseudorandom algorithm for generating hash
    }
}

export default Block;