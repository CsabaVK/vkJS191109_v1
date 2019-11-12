encodeURI(); // -á, -é (átalakítja) --» %[00-FF]
encodeURIComponent(); //: ,; , /, ?, . «-- Ezeket is kikódolja

//0,28,4,42,...
var obj = {
            n1: "0",
            n2: 28,
            n3: 4,
            n4: 42
 }

 /*var obj = {
     nev: 'Maki',
     kor: 12,
    köszön:
        function(
            {
                return "Szia";
            }
        )
 }
 Meki.köszön() //szia*/

 /*var Gyerek = (nev, kor){
     nev: nev,
     kor: kor,
     sír: function(){
         console.log('Ocs');
     }
 }*/



