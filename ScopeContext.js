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

/**
 * Public Private type
**/

var globals = "global degişken";
function fonksiyon(){
    var globals = "lokal degişken";
    console.log(globals);
}
fonksiyon(); //local degişken
console.log(globals); //global degişken

var globasl = "global degişken";
function fonksiyon(){
    globals = "lokal dsegişken";
    console.log(globals);
}
fonksiyon(); //local degişken
console.log(globals); //local degişken

newBlog();

/**
 * 
 * context,this,new
**/
var names = "javascript";

console.log(window.names);
console.log(self.names);
console.log(this.names);

newBlog();

var Sinif = {
    ogrenciler: ["ali","veli"],
    getOgrenci: function (id){
        return this.ogrenciler[id];
    }
};

console.log(Sinif.getOgrenci(0));

function Sinif2 () {
    this.ogrenciler = ["ali","veliz"];
    this.getOgrenci = function (id){
        return this.ogrenciler[id];
    };
}
var sinif = new Sinif2();
console.log(sinif.getOgrenci(1));

newBlog();

/**
 * context atamak
**/

function Sinif3(){
    console.log(this.ogrenciler);
}

Sinif3(); // undefined

var YeniSinif = Sinif3.bind({ogrenciler:["ali","veli"]});
YeniSinif();

newBlog();
/**
 * dışardan context ekledik
**/

function Sinif4(){
    console.log(this.ogrenciler);
}

Sinif4(); // undefined
Sinif4.call({ogrenciler:["ali","veli"]});

newBlog();
/**
 * Boş context
**/

var Topla = function (a,b){
    return a+b;
};
Topla(2,2); //4
Topla.call(null,2,2); //4
console.log(Topla.apply(null,[2,2])); //4

newBlog();

function warn(){
    console.log(this.name);
}
function test(){
    this.name = "javascript";
    warn.call(this);
}
test();

newBlog();

var animals = [
    {species:"Lion",name:"King"},
    {species:"Whale",name:"Fail"}
];

for (var i = 0; i<animals.length; i++){
    (function (i){
        this.print = function(){
            console.log('#'+ i +' '+ this.species +':'+ this.name);
        };
        this.print();
    }).call(animals[i],i);
}


