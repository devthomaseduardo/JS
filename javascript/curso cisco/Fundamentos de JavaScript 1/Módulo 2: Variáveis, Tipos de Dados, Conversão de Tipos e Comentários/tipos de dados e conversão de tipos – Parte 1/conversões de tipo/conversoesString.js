let str = 'text';
let strStr = String(str);
console.log(`${typeof str} : ${str}`);
console.log(`${typeof strStr} : ${strStr}`);

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} : ${nr}`);
console.log(`${typeof strNr} : ${strNr}`);

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} : ${bl}`);
console.log(`${typeof strBl} : ${strBl}`);

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`);
console.log(`${typeof strBnr} : ${strBnr}`);

let un = undefined;
let strUn = String(un);
console.log(`${typeof un} : ${un}`);
console.log(`${typeof strUn} : ${strUn}`);

let n = null;
let strN = String(n);
console.log(`${typeof n} : ${n}`);
console.log(`${typeof strN} : ${strN}`);
