

function fancyShow() {
  $('.deskHeaderLeft').addClass('shadowBottom')
  setTimeout(() => {
    $('.deskHeaderLeft').removeClass('shadowBottom')
    $('.deskHeaderLeft').addClass('shadowRight')
  }, 75)
  setTimeout(() => {
    $('.deskHeaderLeft').removeClass('shadowRight')
    $('.deskHeaderCenter').addClass('shadowLeft')
  }, 150)
  setTimeout(() => {
    $('.deskHeaderCenter').removeClass('shadowLeft')
    $('.deskHeaderCenter').addClass('shadowTop')
  }, 225)
  setTimeout(() => {
    $('.deskHeaderCenter').removeClass('shadowTop')
    $('.deskHeaderCenter').addClass('shadowRight')
  }, 300)
  setTimeout(() => {
    $('.deskHeaderCenter').removeClass('shadowRight')
    $('.deskHeaderRight').addClass('shadowLeft')
  }, 375)
  setTimeout(() => {
    $('.deskHeaderRight').removeClass('shadowLeft')
    $('.deskHeaderRight').addClass('shadowBottom')
  }, 450)
  setTimeout(() => {
    $('.deskHeaderRight').removeClass('shadowBottom')
    $('.deskHeaderRight').addClass('shadowRight')
  }, 525)
  setTimeout(() => {
    $('.deskHeaderRight').removeClass('shadowRight')
    $('.deskHeaderRight').addClass('shadowTop')
  }, 600)
  setTimeout(() => {
    $('.deskHeaderRight').removeClass('shadowTop')
    $('.deskHeaderRight').addClass('shadowLeft')
  }, 675)
  setTimeout(() => {
    $('.deskHeaderRight').removeClass('shadowLeft')
    $('.deskHeaderCenter').addClass('shadowRight')
  }, 750)
  setTimeout(() => {
    $('.deskHeaderCenter').removeClass('shadowRight')
    $('.deskHeaderCenter').addClass('shadowBottom')
  }, 825)
  setTimeout(() => {
    $('.deskHeaderCenter').removeClass('shadowBottom')
    $('.deskHeaderCenter').addClass('shadowLeft')
  }, 900)
  setTimeout(() => {
    $('.deskHeaderCenter').removeClass('shadowLeft')
    $('.deskHeaderLeft').addClass('shadowRight')
  }, 975)
  setTimeout(() => {
    $('.deskHeaderLeft').removeClass('shadowRight')
    $('.deskHeaderLeft').addClass('shadowTop')
  }, 1050)
  setTimeout(() => {
    $('.deskHeaderLeft').removeClass('shadowTop')
    $('.deskHeaderLeft').addClass('shadowLeftFinal')
  }, 1125)

};

function introTitle() {
  setTimeout(() => {
    $('.b1').addClass('shadowRight')
    $('.b5').addClass('shadowRight')
    $('.b9').addClass('shadowRight')
  }, 75)
  setTimeout(() => {
    $('.b1').replaceWith(introLetter1)
    $('.b5').replaceWith(introLetter5)
    $('.b9').replaceWith(introLetter9)
  }, 150)
  setTimeout(() => {
    $('.b2').addClass('shadowRight')
    $('.b6').addClass('shadowRight')
  }, 225)
  setTimeout(() => {
    $('.b2').replaceWith(introLetter2)
    $('.b6').replaceWith(introLetter6)
  }, 300)
  setTimeout(() => {
    $('.b3').addClass('shadowRight')
    $('.b7').addClass('shadowRight')
  }, 375)
  setTimeout(() => {
    $('.b3').replaceWith(introLetter3)
    $('.b7').replaceWith(introLetter7)
    // $('.introLetter 3').addClass('shadowTop')
  }, 450)
  setTimeout(() => {
    $('.b4').addClass('shadowRight')
    $('.b8').addClass('shadowRight')
  }, 525)
  setTimeout(() => {
    $('.b4').replaceWith(introLetter4)
    $('.b8').replaceWith(introLetter8)
    // $('.introLetter 4').addClass('shadowTop')
  }, 600)
}

// $('.deskHeaderLeft')

// $('.deskHeaderCenter')

// $('.deskHeaderRight')

// shadowLeft

// shadowRight

// shadowTop

// shadowBottom 




function loadContent() {
  $('.wrapper').replaceWith(introHeader)
  fancyShow()
  introTitle()
};



$(document).ready(() => {
  loadContent()
});




/*
$(document).ready(function(){
  predictLocation();

  showText($('.1'));
  setTimeout(function() {
    showText($('.2'));}, 1000);
  setTimeout(function() {
    showText($('.3'));}, 2000);
  setTimeout(function() {
    showText($('.4'));}, 3000); 

});
 */
