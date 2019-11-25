var file_number=13
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var col_array=[c1,c2,c3,c4];
var path="assets/portraits/portrait"
for(i=1;i<=file_number;i++){
    var im=document.createElement("img");
    im.setAttribute("class","materialboxed");
    im.setAttribute("src",path+i+'.jpg');
    col_array[(i-1)%4].appendChild(im)
}

