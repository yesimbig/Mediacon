  /*
$(document).ready(function () {  
    //$('img').hide(); //先把所有圖片先隱藏  
    var ImgCount = $('img').length; //取得圖片的個數  
    $('img').each(function () {  
       
        var url = $(this).attr("src");  
        $(this).attr("src", url);  
   
        function ImageLoading() {  
            //$(this).fadeIn(1000);  
            ImgCount--;  
            if (ImgCount === 0) {  

				
	
               // alert("All images Loaded..");  
            }  
        }  
   
        if ($(this).complete) {  
            imageLoaded.call(this);  
        } else {  
            $(this).one('load', ImageLoading);  
        }  
    });  
});  
*/
window.setTimeout("go()",1000);
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type, callback, false);
  }
}

//建築物動畫監聽
function go(){
	$('#buildings').removeClass().attr({class: "buildingMove"});
	$('#building-1').removeClass().attr({class: "buildingMove-1"});
	$('#building-2').removeClass().attr({class: "buildingMove-2"});
	$('#building-3').removeClass().attr({class: "buildingMove-3"});
	$('#building-4').removeClass().attr({class: "buildingMove-4"});
	$('#building-5').removeClass().attr({class: "buildingMove-5"});
	var e = document.getElementById("building-5");
	PrefixedEvent(e, "AnimationStart", listener);
	PrefixedEvent(e, "AnimationEnd", listener);

}

//監聽事件
function listener(e) {
  if(e.type.toLowerCase().indexOf("animationstart") >= 0){

  }
  
  //建築動畫結束，顯示劇情
  else if(e.type.toLowerCase().indexOf("animationend") >= 0){
	//alert("End: elapsed time is " + e.elapsedTime);
	$('#welcome-window').hide();
	$('#welcome-window').css('opacity',"1");	
	$('#welcome-window').slideDown(1500);
  } 
  
}

//--------------------------------文字縮放-----------------------------------
/*
$('#welcome-window #title').fitText(0.8, { minFontSize: '60px', maxFontSize: '120px' });
$('#end-window #title').fitText(0.8, { minFontSize: '48px', maxFontSize: '92px' });
$('#welcome-window #subtitle').fitText(2.8, { minFontSize: '16px', maxFontSize: '32px' });
$('#end-window #subtitle').fitText(2.8, { minFontSize: '16px', maxFontSize: '32px' });
$('#welcome-window #emergency-title').fitText(2.8, { minFontSize: '16px', maxFontSize: '32px' });
$('#end-window #emergency-content').fitText(3.4, { minFontSize: '11px', maxFontSize: '22px' });
$('#welcome-window #emergency-content').fitText(3.4, { minFontSize: '11px', maxFontSize: '22px' });
$('#welcome-window #tip1').fitText(3.8, { minFontSize: '10px', maxFontSize: '20px' });
$('#welcome-window #tip2').fitText(3.8, { minFontSize: '10px', maxFontSize: '20px' });	
$('#problem #problem-title').fitText(2.8, { minFontSize: '16px', maxFontSize: '32px' });
$('#problem #text').fitText(2.4, { minFontSize: '16px', maxFontSize: '32px' });
$('#problem #warning').fitText(0.5, { minFontSize: '10px', maxFontSize: '20px' });	
$('#board-text').fitText(2.4, { minFontSize: '11px', maxFontSize: '22px' });


$('#timer').fitText(1.6, { minFontSize: '24px', maxFontSize: '48px' });
*/
				$('.problem').hide();
				$('.time-out').hide();
				$('.board').hide();
				$('#end-window').hide();

//--------------------------------按鈕事件------------------------------------


$("#btn-remind").hover(
					function(){
						$(this).attr("src", "img/p3_4/noticebutton2-01.png");},
					function(){
						$(this).attr("src", "img/p3_4/noticebutton1-01.png");})
				.click(function() {
						if($('#welcome-window').css('opacity')==1){
							$("#remind").slideUp(1000);
							$("#welcome-window #emergency-content").slideUp(1000);
							$("#welcome-window #tip").hide();
							$("#welcome-window #tip").css('opacity',"1");	
							$("#welcome-window #tip").slideDown(1000);
						}
				});

$("#btn-start").hover(
					function(){
						$(this).attr("src", "img/p3_4/startbutton2-01.png");},
					function(){
						$(this).attr("src", "img/p3_4/startbutton1-01.png");})
				.click(function() {
					if($("#welcome-window #tip").css('opacity')==1){
						$('#welcome-window').slideUp(500);
						$('#background-left').removeClass().addClass('fadeOutLeft animated');
						$('#background-right').removeClass().addClass('fadeOutRight animated');
						$($('.problem')[0]).show();
						$($('.problem')[0]).removeClass().addClass('problem fadeInUp animated');
						$('#timer').removeClass().addClass('fadeInUp animated');				
					}
				});

$(".optionA").click(function() {
					//document.write(need_time[mission_state]);
					$($('.problem')[mission_state]).removeClass().addClass('problem fadeOutDown animated');
					window.setTimeout("gonext()",500);
					now_time -= need_time[mission_state];
					select[mission_state] = true;
				});
				

$(".optionB").click(function() {
					$($('.problem')[mission_state]).removeClass().addClass('problem fadeOutDown animated');
					window.setTimeout("gonext()",500);
					select[mission_state] = false;
				});

$(".optionM").click(function() {
					$($('.problem')[mission_state]).removeClass().addClass('problem fadeOutDown animated');
					window.setTimeout("gonext()",500);
					now_time -= need_time[mission_state];
				});
				
$(".emergency-button").click(function() {
					
					$($('.problem')[mission_state]).removeClass().addClass('problem fadeOutDown animated');
					window.setTimeout("gonext()",500);
					now_time -= need_time[mission_state];
					//document.write(need_time[mission_state]);
				});

$(".re").hover(
				function(){
						$(".re").attr("src", "img/p17/restart2-01.png");},
				function(){
						$(".re").attr("src", "img/p17/restart1.png");})
				.click(function() {
					location.reload();
				});				

$("#board-button").hover(
				function(){
						$(".em8").attr("src", "img/p8/next2-01.png");},
				function(){
						$(".em8").attr("src", "img/p8/next1-01.png");})
				.click(function() {
					$('.board').removeClass().addClass('board fadeOut animated');
					window.setTimeout("goend()",500);
				});
				
//決定下一個要顯示的畫面
function gonext(){
	
	if(now_time<=0){
		$('.time-out').show();
		$('.time-out').removeClass().addClass('time-out fadeIn animated');
		$('#timer').removeClass().addClass('fadeOutDown animated');
	}
	else if(mission_state == question_num-1){
		$('.board').show();
		$('.board').removeClass().addClass('board fadeIn animated');
		$('#timer').removeClass().addClass('fadeOutDown animated');
		setboard();
	}
	else{
		$($('.problem')[mission_state+1]).show();
		$($('.problem')[mission_state+1]).removeClass().addClass('problem fadeInUp animated');
		changeTime();
		mission_state++;
	}
	
	
}

//顯示最終畫面
function goend(){
	$('#background-left').removeClass().addClass('fadeInRight animated');
	$('#background-right').removeClass().addClass('fadeInLeft animated');
	$('#end-window').show();
	$('#end-window').removeClass().addClass('fadeIn animated');
}

function changeTime(){
	document.getElementById("hour").innerHTML= padZero(Math.floor(now_time/60));
	document.getElementById("minute").innerHTML= padZero(now_time%60);
}

function setboard(){
	
	var str;
	
	var interview = "";
	if(select[0]==false){
		interview += "<u>受難者家屬</u>";
	}
	if(select[1]==false){
		if(interview!="")interview +="、";
		interview += "<u>救災人員</u>";
	}
	if(select[2]==false){
		if(interview!="")interview +="、";
		interview += "<u>建築專家</u>";
	}
	if(select[5]==false){
		if(interview!="")interview +="、";
		interview += "<u>政府官員</u>";
	}
	
	if(interview!=""){
		str = "你在現場的時候，怎麼沒有去採訪"+interview+"?<br>這樣就缺了他們的立場或是資訊，編輯們認為你的報導不夠完整。<br><br>";
	}
	
	if(select[8]==false){//拍照
		str += "<b>缺照片</b><br>整篇文章都是文字，沒有照片，你是想讓讀者憑空發想嗎？<br><br>";

	}
	
	if(select[10]==false){//標題
		str += "<b>缺猛標題</b><br>標題要再多用點心哦！放在臉書上沒有點擊率！<br><br>";
	}
	document.getElementById("board-text").innerHTML= str;	
	
}

function restart(){
	var mission_state = 0;
	var question_num = 7;
	var now_time = 240;
	
	$('img').hide(); //先把所有圖片先隱藏  
    var ImgCount = $('img').length; //取得圖片的個數  
    $('img').each(function () {  
       
        var url = $(this).attr("src");  
        $(this).attr("src", url);  
   
        function ImageLoading() {  
            $(this).fadeIn(1000);  
            ImgCount--;  
            if (ImgCount === 0) {  

				window.setTimeout("go()",1000);
					
               // alert("All images Loaded..");  
            }  
        }  
   
        if ($(this).complete) {  
            imageLoaded.call(this);  
        } else {  
            $(this).one('load', ImageLoading);  
        }  
    });  
	$('.problem').hide();
	$('.time-out').hide();
	$('#background-left').removeClass().addClass('fadeInRight animated');
	$('#background-right').removeClass().addClass('fadeInLeft animated');
}


// 左邊補0
function padZero(str){
	if(str >= 10)
		return str;
	else
		return "0" +str;
}

var w = 0;
function changepic(){

	if(w%2){
		$('#topic-big').attr("src", "img/p15/topic1.png");
	}else{
		$('#topic-big').attr("src", "img/p15/topic2.png");
	}
		w++;
	setTimeout(changepic,1000);
	
}


//------------------任務狀態-----------------------------------------
var mission_state = 0;
var question_num = 11;
var now_time = 240;

var need_time = [20,30,40,30,0,60,0,60,10,60,0];
var select = [];
changeTime();
changepic();


