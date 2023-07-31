/***slider start***/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
   
    loop:true,
  });
  /***slider end***/
  function menutoggle(){
    const togglemenu = document.querySelector('.toggle');
    togglemenu.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
  }