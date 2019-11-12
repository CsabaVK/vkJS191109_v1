var obj = {
    n1: 23,
    n2: 45,
    n3: 56,
    n4: 88,
    string1: 'alma',
    string2: 'labda'
}

obj.sum = function(n1, n2){
    return n1 + n2;
}

obj.sum(18, 42);

console.log(obj.sum(18, 42));

//-----------------------

var Függvény = function(név, kor, szín){
    név: név;
    kor: kor;
    szín: szín;
}

var aladar = new Függvény('Aladár', 21)
var sir = function (){return "sír"}

