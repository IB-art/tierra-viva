// $(function advantage (){

//   var box=document.getElementsByClassName('advantage__item');
//   var btn=document.getElementById('advantage__button');
//   for (let i=2;i<box.length;i++) {
//       box[i].style.display = "none";
//   }

//   var countD = 2;
//   btn.addEventListener("click", function() {
//       var box=document.getElementsByClassName('advantage__item');
//       countD += 2;
//       if (countD <= box.length){
//           for(let i=0;i<countD;i++){
//               box[i].style.display = "block";
//           }
//       }

//   })

// });

// $(function characteristic (){
//   window.onload = function () {
//     var box=document.getElementsByClassName('characteristic__item');
//     var btn=document.getElementById('characteristic__button');
//     for (let i=2;i<box.length;i++) {
//         box[i].style.display = "none";
//     }
  
//     var countD = 2;
//     btn.addEventListener("click", function() {
//         var box=document.getElementsByClassName('characteristic__item');
//         countD += 2;
//         if (countD <= box.length){
//             for(let i=0;i<countD;i++){
//                 box[i].style.display = "block";
//             }
//         }

//     })
//   }
// });

// window.onload = function () {
//    advantage ();
//    characteristic (); 
// }


$(function(){

 
  var more = document.querySelectorAll('.more');

  for (var i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
      var showPerClick = 2;
      
      var hidden = this.parentNode.querySelectorAll('div.hidden');
      for (var i = 0; i < showPerClick; i++) {
        if (!hidden[i]) return this.outerHTML = "";
  
        hidden[i].classList.add('box');
        hidden[i].classList.remove('hidden');
      }
    });
  }


  $('.certificate-slider').slick({
    prevArrow: '<button type="button" class="arrow-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="arrow-next"><img src="images/arrow-right.png" alt=""></button>',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 881,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.news-slider').slick({
    prevArrow: '<button type="button" class="arrow-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="arrow-next"><img src="images/arrow-right.png" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});






$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });