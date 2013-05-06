/**
 * User: Burakhan
 * Date: 24.03.2013
 * Time: 02:00
 */
 
function newBlog(){
    var screen='';
    for (var i = 0; i<30; i++) {
        screen += '*-';
    }
	console.log(screen);
}


function A () {
    console.log('construct A');
}

function B () {
    console.log('construct B');
}

var X = new B();

newBlog();


function A () {}
function B () {}

A.prototype.test = 1;
B.prototype = A.prototype;

console.log((new B()).test);
/**
 * Biz a prototipini degilde b nin degerini degiştirmek istersek
**/
newBlog();

B.prototype.test = 2;
console.log((new A()).test);

/**
 * Bir prototipi kopyalar iken
 * Object.create
 * Metodunu kullanıyoruzt
**/
newBlog();

function C () {}
function D () {}

C.prototype.test = 1;

D.prototype = Object.create(C.prototype);

D.prototype.test = 2;
console.log((new C()).test);

/**
 * Kopyalanan nesneler kopyalandıkları nesnenenin construct unu alırlar
**/

C.prototype.myConstructor = function () {
    console.log(this.constructor.name);
};
var X = new C();
X.myConstructor(); //return {C}

D.prototype.myConstructor = function () {
    console.log(this.constructor.name);
};
X = new D();
X.myConstructor(); //return {C}

/**
 * kopyalanan nesnenin constructur unu degiştirmek için
**/

D.prototype.constructor = D;

X = new D();
X.myConstructor(); //return {D}

newBlog();
/**
 * 
 * __PROTO__
 * 
**/

function E(){}
E.prototype.test = 1;
E.prototype.myConstructor = function () {
    console.log(this.constructor.name);
};

function F(){}
F.prototype = Object.create(E.prototype);
F.prototype.constructor = F;
F.prototype.myConstructor = function(){
    console.log(this.constructor.name);
    
    //kendi prototipinin constructor u
    console.log('this.__proto__.constructor.name: '+ this.__proto__.constructor.name);
    
    //asıl prototipin constructor u
    console.log('this.__proto__.__proto__.constructor.name: '+ this.__proto__.__proto__.constructor.name);
};

var X = new E();
X.myConstructor();

var X = new F();
X.myConstructor();

newBlog();

/*
Kısaltırsak
*/
/*
Object.prototype.super = function(){
    return this.__proto__.__proto__;
};
//yahut
function super(obj){
    return obj.__proto__.__proto__;
};
*/