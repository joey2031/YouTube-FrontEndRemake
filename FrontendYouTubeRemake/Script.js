
// look at for overlay 
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay

function openSlideMenue(){

	document.getElementById('menu').style.width = '250px';
	document.getElementById('navContainer').style.marginLeft = '0px';
	document.getElementById("overlay").style.display = "block"; // for the overlay affect.
	document.body.style.overflow = 'hidden'; // so when the nav bar is out you cant scroll on the body.


}


function closeSlideMenue(){
	document.getElementById('menu').style.width = '0';
	document.getElementById('navContainer').style.marginLeft = '0px';
	document.getElementById("overlay").style.display = "none";
	document.body.style.overflow = 'visible'; 

}




/*

need to see how to do this with one button.
function openCloseSlideMenue(){
		let open = false;


	if (open == false){
	document.getElementById('menu').style.width = '250px';
	document.getElementById('navContainer').style.marginLeft = '250px';
	open = true;
	//alert("open");


	}

	if (open == true){
	document.getElementById('menu').style.width = '0px';
	document.getElementById('navContainer').style.marginLeft = '0px';
	open = false;

	}



}

*/