/**
 * User: Burakhan
 * Date: 14.03.2013
 * Time: 11:32
 */
function newBlog(){
    var screen='';
    for (var i = 0; i<30; i++) {
    	screen += '*-';
	}
	console.log(screen);
}

function helloWorld(){
    console.log("Hello World");
}
helloWorld();

newBlog();

var helloWorld = function (){
    console.log("Hello World");
}
helloWorld();

newBlog();
/*
function (){
    console.log("Hello World");
}
*/
var helloWorld = function (){
    console.log("Hello World");
}
//(helloWorld)();

var a = (function (){
    console.log("Hello World");
})();

newBlog();

/**
 * Exception 
 * hata verdikten sonra devamında gelen kodlar çalışmaz
**/

var sifirdanKucukOlmasiGerekenSayi = -1;
if(sifirdanKucukOlmasiGerekenSayi < 0){
    console.log("hata fırlattı");
    //throw Error("Bu sayı sıfırdan küçük olmalı!");
}

newBlog();

function bol(a,b){
    if(b===0){
        throw Error("Zero division error");
    }
    return a/b;
}
/* bol(2,0); //hata fırlatır */
bol(4,2);

var deger = 0;
var sonuc;

try{
    sonuc = bol(12,deger);
}catch(e){
    sonuc = bol(12,1);
}finally{
    console.log(sonuc);
}

