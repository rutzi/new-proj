
  $('.slider1').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
  });


  $('.sliders').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	adaptiveWidth: true
  });



  let newsBtn = document.querySelectorAll('.news-title');
  let news = document.querySelectorAll('.news-text-block');
  for(var i = 0; i < newsBtn.length; i++){
  	newsBtn[i].addEventListener('click', accarBtn);
  };

  function accarBtn (){

  	if(!(this.classList.contains('active'))){
  		
  		this.classList.add('active')
	  }else if(this.classList.contains('active')){
	  	this.classList.remove('active')
	 		
	 		//Якщо хочеш видаляти всі класи актів при кожному кліку
	  	// for(var i = 0; i < newsBtn.length; i++){
	  	// 		newsBtn[i].classList.remove('active');
	  	// }
	  }
	};
