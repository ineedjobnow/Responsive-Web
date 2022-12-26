$(function(){
   AOS.init(); 

   $('#portfolio-filters  li').click(function(){
      let filter = $(this).data('filter');
      $('#portfolio-filters>li').removeClass('active');
      $(this).addClass('active');
      if(filter == '*'){
         $('.portfolio-item').fadeIn();
      }else{
         $('.portfolio-item').hide();
         $('.'+ fliter).fadeIn();
      }
      
   })
   let mobile = false
   $('.mobile-nav-toggle1').click(function(){
      mobile = true;
      $('.navbar ul').animate({
         right:'-15px',
         opacity:1
         }, 500);
      $(this).hide();
      $('.mobile-nav-toggle2').show();
   })
   $('.mobile-nav-toggle2').click(function(){
      mobile = true;
      $('.navbar ul').animate({
         right: '-260px',
    opacity: 0
         }, 500);
      $(this).hide();
      $('.mobile-nav-toggle1').show();
   })
  
   $('.nav-link').click(function(e){
      e.preventDefault();
      let direct = $(this).attr('href');
      let postTop = $(direct).offset().top;
      $('html,body').animate({
         scrollTop: postTop
      }, 500);
    
      $('html, body').animate({scrollTop: postTop}, 500);
      if(mobile){
         $('.navbar ul').animate({
            right:'-260px',
            opacity:0
         },500,function(){
            mobile = false;
         });
         
      }
      });
   $('.dropdown').click(function(){
      $('.dropdown ul').toggleClass("show");
   })
   
   
})
/*
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.6447043, 126.6670912), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};
var markerPosition  = new kakao.maps.LatLng(37.6447043, 126.6670912); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
*/
