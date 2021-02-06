function myFunction() {
    document.getElementById("demo").style.opacity = "1.0";
  }
function reverse(){
    document.getElementById("demo").style.opacity="0.0";
}
function cg1(){
  document.getElementById("red_change1").style.color="#FA4338";
}
function rc1(){
  document.getElementById("red_change1").style.color=" #3F4450";
}  
function cg2(){
  document.getElementById("red_change2").style.color="#FA4338";
}
function rc2(){
  document.getElementById("red_change2").style.color=" #3F4450";
}  
function cg3(){
  document.getElementById("red_change3").style.color="#FA4338";
}
function rc3(){
  document.getElementById("red_change3").style.color=" #3F4450";
}  
function createvideo(){
  var i_frame= document.createElement("ïframe");
  //  i_frame.setAttribute("id","demo");
   i_frame.setAttribute("src","https://player.vimeo.com/video/476425296");
   i_frame.setAttribute("width","640");
   i_frame.setAttribute("height","360");
   i_frame.setAttribute("frameborder","0");
   i_frame.setAttribute("title","vimeo-player");
   i_frame.setAttribute("allowfullscreen");
   var video_div=document.getElementById("video_div");
   video_div.appendChild(i_frame);
}
function createvideo1(){
  var i_frame= document.createElement("ïframe");
  i_frame.src="https://player.vimeo.com/video/476425296";
  i_frame.width="640";
  i_frame.height="360";
  i_frame.frameborder="0";
  i_frame.title="vimeo_player";
  document.getElementById("video_div").appendChild(i_frame);
}
