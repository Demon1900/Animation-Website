var two=2;
var three=7;
var an=two+three;
console.log("Dev")
console.log(an);
//document.write(an);
function test() 
{
                             //Click on Ruby Rose in Artwork.
  var bor=document.getElementsByClassName('border')[0]
  if(bor.style.borderColor.match('red'))
  {bor.style.borderColor='green';}
  else{bor.style.borderColor='red';}
}

function Flip()
{
  //document.getElementById('HxH').src="Images/2D Art/Fanarts/HxH/Gon HXH Ink.png";
     var pic=document.getElementById('HxH');
if(pic.getAttribute('src')=="Images/2D Art/Fanarts/HxH/Gon HXH color.png")
 {
pic.src="Images/2D Art/Fanarts/HxH/Gon HXH Ink.png";
 }
 else{
    
    pic.src="Images/2D Art/Fanarts/HxH/Gon HXH color.png" 
 }
}
        //This function is serve no purpose.
function AsianF()
{
  var pic=document.getElementById("Asian");

  var x=0;
  console.log(x+'is the start');
  switch(x)
  {
  case 0:
    L=pic.src="Images/2D Art/Fanarts/HxH/Gon HXH Ink.png";
  //pic.src="Images/Asian/Asian Top line - Copy.png";
  console.log("Hi")  
  console.log(x++);
  console.log(x);
  var temp=1;
  break;
  case 1:
    pic.src="Images/Larve/max-matthews-larve-top.jpg";
   console.log('bye');
   var temp=2;
   console.log(x);
   console.log(x+1);
   x=temp;
   console.log(x + 'is now x');
  break;
  default:
    pic.getAttribute('src')==="Images/Asian/Asian 3_4.png"
    console.log('nope');
    break;
  }
   y=x;
  console.log("new x is" + y);
  return  y=x;
}
//Function for Asian Py. right button.
function AsianFR(){
 var pic= document.getElementById('Asian');
  if(pic.getAttribute('src')== "Images/Asian/Asian 3_4.png" )
  {
    pic.src='Images/Asian/Asian Top  - Copy.png';
  }
    
  else if(pic.getAttribute('src')=='Images/Asian/Asian Top  - Copy.png')
  {
    pic.src="Images/Asian/Asian Frontpng.png";
  }
  else{

      pic.src="Images/Asian/Asian 3_4.png";
    }
  
}
//Function for Asian Py. left button.
function AsianFL(){
var pic=document.getElementById('Asian');

if(pic.getAttribute('src')=="Images/Asian/Asian 3_4.png"){
  pic.src="Images/Asian/Asian Frontpng.png";

}
else if(pic.getAttribute('src')=="Images/Asian/Asian Frontpng.png")
{
pic.src='Images/Asian/Asian Top  - Copy.png';
}
else{ pic.src="Images/Asian/Asian 3_4.png"; }
}
//Function for Larve right button.
function buttonLR(){
  var pic=document.getElementById('Larve');
  
  if(pic.getAttribute('src')=="Images/Larve/max-matthews-larve-top.jpg"){
    pic.src='Images/Larve/max-matthews-larve-bottom.jpg';
  }
  else if(pic.getAttribute('src')== 'Images/Larve/max-matthews-larve-bottom.jpg'){
    pic.src='Images/Larve/Larve Front.png';
  }
  else if(pic.getAttribute('src')=='Images/Larve/Larve Front.png'){
    pic.src='Images/Larve/Larve Back.png';
  }
  else{pic.src="Images/Larve/max-matthews-larve-top.jpg";}
}

function ButtonLL(){
  var pic=document.getElementById('Larve');
  if(pic.getAttribute('src')=="Images/Larve/max-matthews-larve-top.jpg"){
    pic.src='Images/Larve/Larve Back.png';
  }
  else if(pic.getAttribute('src')=='Images/Larve/Larve Back.png'){
  pic.src='Images/Larve/Larve Front.png';
  }
 else if(pic.getAttribute('src')=='Images/Larve/Larve Front.png'){
  pic.src='Images/Larve/max-matthews-larve-bottom.jpg';
 }
  else{pic.src="Images/Larve/max-matthews-larve-top.jpg";}
}
                   //Function for Weevil right button. 
function ButtonWR(){ 
  var pic=document.getElementById('Weevil');
  if(pic.getAttribute('src')=="Images/Weevil  Front.png"){
    pic.src="Images/Weevil 3_4.jpg";
  }
  else if(pic.getAttribute('src')=="Images/Weevil 3_4.jpg"){
    pic.src="Images/Weevil  Bottom.png";
  }
  else{
    pic.src="Images/Weevil  Front.png";
  }

}
                    //Function for Weevil left button.
function ButtonWL(){
  var pic=document.getElementById('Weevil');
  if(pic.getAttribute('src')=="Images/Weevil  Front.png"){
    pic.src="Images/Weevil  Bottom.png";
  }
  else if(pic.getAttribute('src')=="Images/Weevil  Bottom.png"){
    pic.src="Images/Weevil 3_4.jpg"
  }
  else{ pic.src="Images/Weevil  Front.png";}
}

function ButtonReR(){
  var pic=document.getElementById('Remote');
  if(pic.getAttribute('src')=="images/Remote/Remote Front.jpg"){
    pic.src="Images/Remote/Remote Front 3_4.jpg";
  }
  else if(pic.getAttribute('src')=="Images/Remote/Remote Front 3_4.jpg"){
    pic.src="Images/Remote/Remote Back.jpg";
 
  }
 else if(pic.getAttribute('src')=="Images/Remote/Remote Back.jpg"){
  pic.src="Images/Remote/Remote Back 3_4.jpg";
 }
  else{pic.src="Images/Remote/Remote Front.jpg";}
}
function ButtonReL(){
  var pic=document.getElementById('Remote');
  if(pic.getAttribute('src')=="Images/Remote/Remote Front.jpg"){
    pic.src="Images/Remote/Remote Back 3_4.jpg";
    
  }
  else if(pic.getAttribute('src')=="Images/Remote/Remote Back 3_4.jpg"){
    pic.src="Images/Remote/Remote Back.jpg";
  }
 else if(pic.getAttribute('src')=="Images/Remote/Remote Back.jpg"){
  pic.src="Images/Remote/Remote Front 3_4.jpg";
 }
  else{pic.src="Images/Remote/Remote Front.jpg";}
}

function ButtonRoR(){
var pic=document.getElementById('Robot');
if (pic.getAttribute('src')=="Images/Robot Front View .jpg") {
  pic.src="Images/Robot Side View .jpg";
}
else{
  pic.src="Images/Robot Front View .jpg";
}
}



