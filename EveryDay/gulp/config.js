/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */ 
 
var src = './src'; 
var dest = './build'; 
module.exports = {     
	less: {         
		all: src + "/less/**/*.less"  //所有less   
	}
}
