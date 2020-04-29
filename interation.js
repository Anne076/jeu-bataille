
couleur = new Array("coeur","carreau","trèfle","pique");
nombre = new Array("2","3","4","5","6","7","8","9","10","valet","dame","roi","as"); 
bataille_buffer = new Array();
vous = new Array();
comp = new Array();

function inidata(){
carte = new Array();
inc = 0
for (i=0;i<13;i++) 
{
for (x=0;x<4;x++)
{
carte[inc] = nombre[i]+"_de_"+couleur[x];
inc++
}
}

for (i=0;i<52;i++) 
{
for (x=0;x<52;x++)
{
if (Math.random() < Math.random())
{
temp = carte[i];
carte[i] = carte[x];
carte[x] = temp;
}
}
}

for (i=0;i<26;i++)
{
vous[i] = carte[i];
}
for (i=26;i<52;i++)
{
comp[i-26] = carte[i];
}
refresh_all(); 
next_click(); 

}
function refresh_all()
{
document.getElementById("comp_pointage").innerHTML  = "Nbre de carte : "+comp.length;
document.getElementById("vous_pointage").innerHTML  = "Nbre de carte : "+vous.length;
document.getElementById("vous").innerHTML = "<IMG src='"+vous[0]+".GIF'><IMG src='blank.GIF' width='53' heigth='68'>";
document.getElementById("comp").innerHTML  = "<IMG src='"+comp[0]+".GIF'><IMG src='blank.GIF'  width='53' heigth='68'>";
}
function next_click()
{
if (vous.length==0)
{
alert("Vous avez perdu !!!");
window.location.reload();
}
if (comp.length==0)
{
alert("Vous avez gagnez !!!");
window.location.reload();
}

refresh_all();
c_carte = comp[0].substring(0,comp[0].indexOf("_")); 
v_carte = vous[0].substring(0,vous[0].indexOf("_"));
c_index = false;
v_index = false;

for (i=0;i<13;i++)
{
v_index = (v_carte != nombre[i] && isFinite(v_index)) ? v_index : i;
c_index = (c_carte != nombre[i] && isFinite(c_index)) ? c_index : i;
}

if (v_index > c_index) 
{
temp_c = comp[0].replace("_"," ").replace("_"," ");
document.getElementById("message").innerHTML = "Vous gagnez un "+temp_c+" .";
vous.push(vous[0]);
vous.push(comp[0]);
comp.shift(); 
vous.shift();
}
if (v_index < c_index)
{
temp_v = vous[0].replace("_"," ").replace("_"," ");
document.getElementById("message").innerHTML = "Vous perdez un "+temp_v+" .";
comp.push(vous[0]);
comp.push(comp[0]);
comp.shift();
vous.shift();
}
if (v_index == c_index) 
{
document.getElementById("message").innerHTML = "BATAILLE !!!<BR>";
i=1;
while (i=1000) 
{
if (vous.length != 0 && comp.length !=0)
{
bataille_buffer.push(vous[0]);
bataille_buffer.push(comp[0]);
vous.shift(); 
comp.shift();
if (vous[0].substring(0,vous[0].indexOf("_")) == bataille_buffer[0].substring(0,bataille_buffer[0].indexOf("_"))) 
{
document.getElementById("message").innerHTML += "Vous avez gagné "+bataille_buffer.length/2+ " cartes.";
for (x=0;x<bataille_buffer.length;x++) 
{
vous.push(bataille_buffer[x]);
}
bataille_buffer = new Array(); 
break;
}
if (comp[0].substring(0,comp[0].indexOf("_")) == bataille_buffer[0].substring(0,bataille_buffer[0].indexOf("_"))) 
{
document.getElementById("message").innerHTML += "L'ordinateur a gagné "+bataille_buffer.length/2+ " cartes.";
for (x=0;x<bataille_buffer.length;x++)
{
comp.push(bataille_buffer[x]);
}
bataille_buffer = new Array();
break;
}
}
else 
{
break;
}
i++
}
}

if (vous.length == 0){ 
alert("Vous avez perdu !");
window.location.reload();
}

if (comp.length == 0){
alert("Vous avez gagné !");
window.location.reload();
}

document.getElementById("comp_pointage").innerHTML  = "Nbre de carte : "+comp.length;
document.getElementById("vous_pointage").innerHTML  = "Nbre de carte : "+vous.length;

}



                                                 