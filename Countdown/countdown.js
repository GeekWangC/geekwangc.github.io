var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 450;//768;
var RADIUS =8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
//截止日期 月份从0开始  倒计时
//var endTime =new Date();//new Date(2015,9,3,18,47,52);
//endTime.setTime(endTime.getTime()+3600*1000);
//现在距离截止日期多长时间
var curShowTimeSeconds = 0;
var balls = [];
const colors = ["#0099CC","#0099C1","#0199CC","#0089CC","red","yellow"];
window.onload = function(){
	//屏幕自适应-start
	WINDOW_WIDTH = document.body.clientWidth;
	WINDOW_HEIGHT = document.body.clientHeight;
	MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
	RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;
	MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);
	//屏幕自适应-end
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	curShowTimeSeconds = getCurShowTimeSeconds();
	setInterval(
		function(){
			render(context);
			update();
		},50);
}
//动画
function update(){
	var nextShowTimeSeconds = getCurShowTimeSeconds();
	var nextHours = parseInt(nextShowTimeSeconds/3600),
		nextMinutes = parseInt((nextShowTimeSeconds-nextHours*3600)/60),
		nextSeconds = nextShowTimeSeconds%60;
	var curHours = parseInt(curShowTimeSeconds/3600),
		curMinutes = parseInt((curShowTimeSeconds-curHours*3600)/60),
		curSeconds = curShowTimeSeconds%60;
	if(nextSeconds!=curSeconds){
		if(parseInt(curHours/10)!=parseInt(nextHours/10)){
			addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curHours/10));
		}
		if(parseInt(curHours%10)!=parseInt(nextHours%10)){
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
		}
		if(parseInt(curMinutes/10)!=parseInt(nextMinutes/10)){
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curHours/10));
		}
		if(parseInt(curMinutes%10)!=parseInt(nextMinutes%10)){
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
		}
		if(parseInt(curSeconds/10)!=parseInt(nextSeconds/10)){
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curHours/10));
		}
		if(parseInt(curSeconds%10)!=parseInt(nextSeconds%10)){
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
		}
		curShowTimeSeconds = nextShowTimeSeconds;
	}

	updateBalls();
	//console.log(balls.length);
}
//小球运动  小球数量控制
function  updateBalls () {
	var cut = 0;
	for (var i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;
		//碰撞检测思路
		if(balls[i].y >= (WINDOW_HEIGHT - RADIUS)){
			balls[i].y = WINDOW_HEIGHT - RADIUS;
			balls[i].vy = - balls[i].vy*0.75;
		}
		//前cut个小球都在屏幕内 性能优化
		if(balls[i].x + RADIUS> 0 && balls[i].x - RADIUS < WINDOW_WIDTH)		{
			balls[cut++] = balls[i]
		}
	}
	
	while(balls.length > Math.min(300,cut)){
		balls.pop();
	}

}
//添加小球
function addBalls(x,y,num){
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				var aBall = {
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+i*2*(RADIUS+1)+(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall);
			}
		}
	}
}
//现在距离截止日期多长时间  倒计时效果已注释 现在是时钟效果
function getCurShowTimeSeconds(){
	var curTime = new Date();
	//var ret = endTime.getTime()-curTime.getTime();
	//ret = Math.round(ret/1000);
	var ret = curTime.getHours()*3600+curTime.getMinutes()*60+curTime.getSeconds();
	//return ret >=0 ? ret : 0;
	return ret;
}
//绘制面板
function render(cxt){
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

	var hours = parseInt(curShowTimeSeconds/3600),
		minutes = parseInt((curShowTimeSeconds-hours*3600)/60),
		seconds = parseInt(curShowTimeSeconds-hours*3600-minutes*60);

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);
	//绘制小球
	for(var i =0;i<balls.length;i++){
		cxt.fillStyle = balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true)
		cxt.closePath();
		cxt.fill();
	}
}
//绘制数字
function renderDigit(x,y,num,cxt){
	cxt.fillStyle = "rgb(0,102,153)";
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)
					+(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath();

				cxt.fill();
			}
		}
	}
}