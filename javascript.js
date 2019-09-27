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


if(burger.onclick)
{
	var logo = document.getElementsByClassName(".logo").width="30";

}
else
{
	var logo = document.getElementsByClassName(".logo").width="80";	
}