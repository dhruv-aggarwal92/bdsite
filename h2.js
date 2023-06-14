var outer=document.getElementsByClassName("outer");
var body=document.querySelector("body")
var lap=document.getElementsByClassName("lap");
var button=document.getElementById("button")
var header1=document.getElementById('header1');
var img=document.getElementById('img');

var video=document.getElementById('video')

var show1=setInterval(slide_show1,4000);
function slide_show1(){
    img.style.opacity=0;
    setTimeout(function(){img.src="img2.jpg"},400);
    setTimeout(function(){img.style.opacity=0.9},500);    
    setTimeout(function(){img.style.opacity=0;},4000);
    setTimeout(function(){img.src="img3.jpg"},4400);
    setTimeout(function(){img.style.opacity=0.9},4500);
    setTimeout(function(){img.style.opacity=0;},8000);
    setTimeout(function(){img.src="img7.jpg"},8400);
    setTimeout(function(){img.style.opacity=0.9},8500);
    setTimeout(function(){img.style.opacity=0;},12000);
    setTimeout(function(){img.src="img4.jpg"},12400);
    setTimeout(function(){img.style.opacity=0.9},12500);
    setTimeout(function(){img.style.opacity=0;},16000);
    setTimeout(function(){img.src="img6.jpg"},16400);
    setTimeout(function(){img.style.opacity=0.9},16500);
    setTimeout(function(){img.style.opacity=0;},20000);
    // setTimeout(function(){img.style.opacity=0;},28000);
    clearInterval(show1);
}
var slide_show1;

var show=setInterval(slide_show,24000);
function slide_show(){
    img.style.opacity=0;
    setTimeout(function(){img.src="img1.jpg"},400);
    setTimeout(function(){img.style.opacity=0.9},500);    
    setTimeout(function(){img.style.opacity=0;},4000);
    setTimeout(function(){img.src="img2.jpg"},4400);
    setTimeout(function(){img.style.opacity=0.9},4500);
    setTimeout(function(){img.style.opacity=0;},8000);
    setTimeout(function(){img.src="img3.jpg"},8400);
    setTimeout(function(){img.style.opacity=0.9},8500);
    setTimeout(function(){img.style.opacity=0;},12000);
    setTimeout(function(){img.src="img7.jpg"},12400);
    setTimeout(function(){img.style.opacity=0.9},12500);
    setTimeout(function(){img.style.opacity=0;},16000);
    setTimeout(function(){img.src="img4.jpg"},16400);
    setTimeout(function(){img.style.opacity=0.9},16500);
    setTimeout(function(){img.style.opacity=0;},20000);
    setTimeout(function(){img.src="img6.jpg"},20400);
    setTimeout(function(){img.style.opacity=0.9},20500);
    // clearInterval(show);
}
var slide_show;

// button.addEventListener('click',function(){
//     img.style.opacity=0;
//     setInterval(function(){img.src="img2.jpg"},350);
//     setInterval(function(){img.style.opacity=1},400);
// })

for(var i=0;i<8;++i){
    outer[i].style.width=((window.innerWidth/3)-15)+"px";
    // lap[0].style.width=outer[i]-100+"px";
}

// body.style.background="white";
// for(let j=0;j<8;++j){
//     var temp=0;
//     lap[j].addEventListener('click',photo)
//     function photo(){
//         temp=1;
//         lap[j].style.marginLeft="0px";
//         lap[j].style.width=window.innerWidth+"px";
//         lap[j].style.height=window.innerHeight+"px";
//         lap[j].style.transform="rotateY(0deg)";
//         for(i=0;i<8;++i){
//             if(i!=j){
//                 lap[i].classList.add("hide");               
//             }
//         }
//         lap[j].style.top="0px";
//         lap[j].style.left="0px";
//         console.log(temp);
//         // body.style.height=window.innerHeight+"px";
//             // body.style.overflow="hidden"
//         }
// }

// button.addEventListener('click',function(){
//     video.style.visibility="visible";
// })

