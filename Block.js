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
    }
    
    toString(){
        return this.Hash.substring(0,10) + " " +  this.TimeStamp + " " + this.prevHash.substring(0,10) + this.Transaction;
    }

    Genesis(){
        return new this("0000000000","Genesis Time", ""); 
    }
}

export default Block;