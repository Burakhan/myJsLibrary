/**
 * User: Burakhan
 * Date: 06.03.2013
 * Time: 02:56
 */
function newBlog(){
    var screen='';
	for (var i = 0; i<30; i++) {
		screen += '*-';
	}
	console.log(screen);
}

newBlog();

console.log('0 212 563 32 32'.match(/0 \d{3} \d{3} \d{2} \d{2}/));

newBlog();
/*
* Yukardaki fonsiyon ile aynı işlevi yapıyor
*
*/
console.log('0 212 563 32 32'.match(new RegExp(/0 \d{3} \d{3} \d{2} \d{2}/)));

newBlog();

var reg = "(?:[0-9]{1,3}\.){3}[0-9]{1,3}";
console.log("951.159.85.45".match(new RegExp(reg)));

newBlog();
 /**
 * Bug var
 * 
 **/

reg = "(?:(?:25[0-5]|24[0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|24[0-9]|[01]?[0-9][0-9]?)";
console.log("951.159.85.45".match(new RegExp(reg)));