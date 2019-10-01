const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide=()=>
{
	burger.addEventListener('click',()=>
	{
		//toggle nav
		nav.classList.toggle('nav-active');

			//animate links
	navLinks.forEach((link,index)=>
	{
		if (link.style.animation)
			{
				link.style.animation='';
			}
		else
		{
		link.style.animation=`navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
		}
	});
		//burger animation
		burger.classList.toggle('toggle');
});

}

navSlide();


	var i = 0; // Start point
	var images = [];
	var time = 4000;

	// Image List
	images[0] = 'images/streetart.jpg';
	images[1] = 'images/gadefest.jpg';
	images[2] = 'images/shopping2.jpg';
	images[3] = 'images/streetfood.jpg';

	// Change Image
	function changeImg(){
		document.getElementById("slide").src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
