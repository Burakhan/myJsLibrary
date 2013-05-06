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

console.dir(Array.prototype);


/**
 * concat       : birden fazla diziyi birbirne bağlar
 * every        : bir dizideki elemanların verilen fonksiyondan "true" dönmesini bekler
 * filter       : bir dizideki elemanların verilen fonksiyondan "true" dönenlerini dönderir
 * forEach      : dizideki her eleman için fonksiyon çalıştırır.
 * indexOf      : bir dizideki elemanın dizideki yerini belirtir.
 * join         : bir dizideki elemanların tümünü verilen karakter ile birleştirir
 * lastIndexOf  : verilen degerin dizideki son görüldüğü yeri söyler
 * lenght       : dizinin uzunluğunu söyler
 * map          : bir dizideki elemanları verilen fonsiyonda işletir ve sonucu yerine koyar
 * pop          : bir diziye eleman çıkartır (sondan) ve çıkan elemanı söyler
 * push         : bir diziye eleman ekler (sondan) eklediği elemanı söyler
 * reduce       : fonksiyona bak
 * reduceright  : fonksiyona bak
 * reverse      : dizideki elemanları tersine sıralar
 * shift        : diziden eleman çıkartır (baştan)
 * slice        : dizinin bir kısmını alır
 * some         : every gibi çalışır fakar birinin "true" dönmesi yeterlidir
 * sort         : dizideki elemanları fonksiyondan dönen degere göre bir ileri bir geri taşır.
 * splice       : dizinin bir kısmını alır
 * unshift      : diziye eleman ekler (baştan) ve son dizinin uzunluğunu söyler
**/
newBlog();
/**
 * concat
**/
console.log("concat");
var pr = [1,2,3].concat([4,5,6]);
console.log(pr);

newBlog();
/**
 * every
**/
console.log("every");
pr = [1,2,3].every( function (num){ return num < 4; } );
console.log(pr);

newBlog();
/**
 * Filter
**/
console.log("Filter");
pr = [1,2,3].filter( function (num){ return num < 3; } );
console.log(pr);

newBlog();
/**
 * forEach
**/
console.log("forEach");
pr = [1,2,3].forEach( function (num){ console.log(num); } );
console.log(pr);

newBlog();
/**
 * indexOf
 * eger bulamazsa "-1" döner
**/
console.log("indexOf");
pr = [1,2,3].indexOf(2);
console.log(pr);

newBlog();
/**
 * join
**/
console.log("join");
pr = [1,2,3].join("-*-");
console.log(pr);

newBlog();
/**
 * LastIndexOf
**/
console.log("LastIndexOf");
pr = [1,2,3,4,5,6].lastIndexOf(6);
console.log(pr);

newBlog();
/**
 * length
**/
console.log("length");
pr = [1,2,3,4,5,6].length;
console.log(pr);

newBlog();
/**
 * Map
**/
console.log("Map");
pr = [1,2,3,4,5,6].map( function (num){ return num*2; });
console.log(pr);

newBlog();
/**
 * pop
**/
console.log("pop");
pr = [1,2,3,4,5,6].pop();
console.log(pr);

newBlog();
/**
 * push
**/
console.log("push");
pr = [1,2,3,4,5,6].push(7);
console.log(pr);

newBlog();
/**
 * reduce
 * başlangıçta diziden iki eleman alır 
 * aldıgı elemanlardan dönen degeri fonksiyonun ilk parametresine atar
 * ikinci parametresi olarak sıradki (3.) elemanı alır 
 * dizideki elamanlar bitinceye kadar aynı işleme devam eder.
 * en son halini geriye dönderir
**/
console.log("reduce");

pr = [1,2,3,4,5,6].reduce(function (x,y){
    console.log("x:"+x);
    console.log("y:"+y);
    console.log(x+"*"+y);
    return x*y;
});
console.log(pr);

newBlog();

pr = ["sayi1","sayi2","sayi3","sayi4","sayi5"].reduce(function (x,y){
    console.log("x:"+x);
    console.log("y:"+y);
    console.log(x+"-"+y+"\n");
    return x+" "+y;
});
console.log(pr);

newBlog();
/**
 * reduceRight
 * reduce fonksiyonunun yaptıgını sağdan sola dogru yapar
 * sondan diziden iki eleman alır 
 * aldıgı elemanlardan dönen degeri fonksiyonun ilk parametresine atar
 * ikinci parametresi olarak sıradki (sola dogru) elemanı alır 
 * dizideki elamanlar bitinceye kadar aynı işleme devam eder.
 * en son halini geriye dönderir
**/
console.log("reduce");

pr = [1,2,3,4,5,6].reduceRight(function (x,y){
    console.log("x:"+x);
    console.log("y:"+y);
    console.log(x+"*"+y);
    return x*y;
});
console.log(pr);

newBlog();

pr = ["sayi1","sayi2","sayi3","sayi4","sayi5"].reduceRight(function (x,y){
    console.log("x:"+x);
    console.log("y:"+y);
    console.log(x+"-"+y+"\n");
    return x+" "+y;
});
console.log(pr);

newBlog();

/**
 * reverse
**/
pr = [1,2,3,4,5,6].reverse();
console.log(pr);

newBlog();

/**
 * shift
**/
pr = [1,2,3,4,5,6].shift();
console.log(pr);

newBlog();

/**
 * slice
**/
pr = [1,2,3,4,5,6].slice(1,4);
console.log(pr);

newBlog();

/**
 * some
**/
console.log("some");
pr = [1,2,3].some( function (num){ return num < 2; } );
console.log(pr);

newBlog();

/**
 * sort
**/
console.log("sort");
pr = [1,2,3,4,5,6].sort( function (a,b){ return a < b; } );
console.log(pr);

newBlog();

/**
 * splice
**/
console.log("splice");
pr = [1,2,3].splice( 0,2);
console.log(pr);

newBlog();

/**
 * unshift
**/
console.log("unshift");
pr = [1,2,3].unshift(0);
console.log(pr);

newBlog();