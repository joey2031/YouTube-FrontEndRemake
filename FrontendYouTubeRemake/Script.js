// for over lay //www.w3schools.com/howto/howto_js_sidenav.asp
//Better idea to add a overlay https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay

function openSlideMenue(){

	document.getElementById('menu').style.width = '250px';
	document.getElementById('navContainer').style.marginLeft = '0px';
	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


}


function closeSlideMenue(){
	document.getElementById('menu').style.width = '0';
	document.getElementById('navContainer').style.marginLeft = '0px';
	//document.body.style.backgroundColor = "white";

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