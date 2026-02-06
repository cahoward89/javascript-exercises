const sumAll = function(a,b) {
    if ((a<0)||(b<0)) {return "ERROR"};
    if (!Number.isInteger(a) || !Number.isInteger(b)) {return "ERROR"}
    if (a < 0 || b < 0) return "ERROR"

    if (a>b){
        [a,b]=[b,a]
    };
    let array=[]
    for (let i=a;i<=b;i++){
        array.push(i);
        }
    return array.reduce((acc,current)=>(acc+current),0);

};

// Do not edit below this line
module.exports = sumAll;
