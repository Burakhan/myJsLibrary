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

/*
* array list view in all key and index 
*/
var list  = {name: 'javaScript', version: '1.71'};
for (var label in list){
    var value = list[label];
    console.log(label + ' : ' + value);
}

newBlog();

/*
* array index search
*/
if("name" in list){
	console.log('true');
	console.log("name" in list);
}

newBlog();

/*
* array key search
* return index number
*/
var list = ['javaScript','js','list'];

function search(value,list){
	var foundIndex = -1;
	for(var i in list){
		if(list[i] == value){
			foundIndex = i;
			break;
		}
	}
	return foundIndex;
}
console.log(search('js',list));

newBlog();

/*
* array key search 
* return found list
*/
function searchAll(value,list){
	var all = [];
	for (var i in list){
		if(list[i] == value){
			all.push(value);
			continue;
		}
		console.log(i);
	}
	return all;
}
console.log(searchAll('js',list));