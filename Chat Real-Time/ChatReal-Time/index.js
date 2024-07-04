Array.prototype.reduce2 = function(callback,result){
    for(let i = 0 ; i < this.length ; i++)
    {
        result = callback(result,this[i],i,this);
    }
    return result;
}

const numbers = [1,2,3,4,5];

const result = numbers.reduce2((number,kq) => {
    return number + kq;
},10);

console.log(result);