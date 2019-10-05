var file_list=[
    "01_RT16.jpg",
    "14_RT16.jpg",
    "A Boat.jpg",
    "Face.tif",

]
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var col_array=[c1,c2,c3,c4];
var path="assets/paintings/"
for(i=0;i<file_list.length;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed");
    im.setAttribute("src",path+file_list[i]);
    col_array[i%4].appendChild(im)
}