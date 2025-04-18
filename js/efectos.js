$(document).ready(function(){
	$('.menu a').each(function(index,elemento){
		$(this).css({
			'top': '-200px'

		});
		$(this).animate({top: '0'}, 1500+(index *500));
	});
	//efecto header
	if ($(window).width() > 800 ) {
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});
		$('header .textos').animate({
			opacity :1,
			marginTop :'-52px'
		}, 1500);	
	}
	//scroll elementos menu
	var acercade=$('#acerca-de').offset().top;
	$('#btn-acercade').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:acercade
		},500);
	});
	//Interiores
	var inter=$('#interiores').offset().top;
	$('#btn-interiores').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:inter
		},500);
	});
	//caracteristicas
	var car=$('#funcionamiento').offset().top;
	$('#btn-funcionamiento').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:car
		},500);
	});
	//productos
	var prod=$('#productos').offset().top;
	$('#btn-productos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:prod
		},500);
	});
	//aside active
	const btns = document.querySelectorAll(".nav-btn");
		const contents = document.querySelectorAll(".content");
		var sliderNav = function (manual) {
			btns.forEach((btn)=>{
				btn.classList.remove("active");
			});
			contents.forEach((content)=>{
				content.classList.remove("active");
			});
			btns[manual].classList.add("active");
			contents[manual].classList.add("active");
		}
		btns.forEach((btn,i)=>{
			btn.addEventListener("click", ()=>{
				sliderNav(i)
				});
		});

	window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
});

