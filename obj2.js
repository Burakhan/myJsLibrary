/**
 * User: Burakhan
 * Date: 24.03.2013
 * Time: 01:32
 */
function newBlog(){
    var screen='';
    for (var i = 0; i<30; i++) {
        screen += '*-';
	}
	console.log(screen);
}

var Ev = function() {};
Ev.prototype.git = function (kisi){
    console.log(kisi.name + ' eve gitti.');
};

var Kisi = function (name){
    this.name = name;
};

Kisi.prototype.eveGit = function(ev){
    ev.git(this);
};

var ali = new Kisi("Ali");
var veli = new Kisi("Veli");
var ev = new Ev();

ali.eveGit(ev);
veli.eveGit(ev);

newBlog();

var fatih = {
    yas : 23,
    kosabilir: true,
    kos: function(){
        if(this.kosabilir){
            console.log("Koşmaya başladı");
        }
    }
};

fatih.kos(); 
fatih.kosabilir = false;
fatih.kos();

newBlog();

function Animal(){
    alert('construct');
    return ":)";
}

var animal = Animal();
console.log(animal);
/**
 * Nesnelerin geriye dönen degerleri olmaz
**/
var animal = new Animal();
console.log(animal);

newBlog();

/**
 * 
 * INSTANCEOF
 * 
**/
var bird;
console.log(bird instanceof Animal); // false

bird = new Animal();

console.log(bird instanceof Animal); // true
