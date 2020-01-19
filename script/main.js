/*window.onload = setTimeout(function(){
  var msg = alert('Hey le site xxxvidsxxx est super bien. Viens dessus stp please');
},10000); */
//fonction pour afficher un pop up partie 1
window.onload = setTimeout(function(){
  var msg = confirm('Hey le site xxxvidsxxx est super bien. Viens dessus stp please');
    if (msg == true) {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  else {
    false;
  }
}, 10000);


function butpsy() {
  document.getElementById("psy").style.backgroundColor = "magenta";
 
	

}