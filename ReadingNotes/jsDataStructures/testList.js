var moviesStr = "(1)教父,"+
"(2)教父2,"+
"(3)肖申克的救赎,"+
"(4)低俗小说,"+
"(5)黄金三嫖客,"+
"(6)十二怒汉,"+
"(7)辛德勒名单,"+
"(8)黑暗骑士,"+
"(9)指环王：王者归来,"+
"(10)搏击俱乐部,"+
"(11)星球大战5:帝国反击战,"+
"(12)飞越疯人院,"+
"(13)指环王：护戒使者,"+
"(14)盗梦空间,"+
"(15)好家伙,"+
"(16)星球大战,"+
"(17)七武士,"+
"(18)黑客帝国,"+
"(19)阿甘正传,"+
"(20)上帝之城";

function createArr(moviesStr) {  
	var arr = moviesStr.split(",");
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i] = arr[i].trim();
	} 
	return arr;
}

var movies = createArr(moviesStr);
var movieList = new List();
for (var i = movies.length - 1; i >= 0; i--) {
	movieList.append(movies[i]);
}

function displayList(list){
	for (list.front(); list.currPos() < list.length(); list.next()) {
		var a = list.getElement();
		console.log(a);
	}
}

displayList(movieList);