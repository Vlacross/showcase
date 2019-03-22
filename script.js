

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

function showTitle(string) {
  let count = 0;
  const [timeGroups, boxGroups] = buildTitleGroups(string)
  console.log(timeGroups, boxGroups)


  
  for (let i = 0; i < boxGroups[count].length; i++) {
    
      setTimeout(() => {
        $(boxGroups[count][i]).addClass('shadowRight')
      }, 75)
      setTimeout(() => {
        $(boxGroups[count][i]).replaceWith(timeGroups[count][i])
      }, 150)
 
      setTimeout(() => {
        $(boxGroups[count+1][i]).addClass('shadowRight')
      }, 225)
      setTimeout(() => {
        $(boxGroups[count+1][i]).replaceWith(timeGroups[count+1][i])
      }, 300)

      setTimeout(() => {
        $(boxGroups[count+2][i]).addClass('shadowRight')
      }, 375)
      setTimeout(() => {
        $(boxGroups[count+2][i]).replaceWith(timeGroups[count+2][i])
      }, 450)

      setTimeout(() => {
        $(boxGroups[count+3][i]).addClass('shadowRight')
      }, 525)
      setTimeout(() => {
        $(boxGroups[count+3][i]).replaceWith(timeGroups[count+3][i])
      }, 650)
    }

}

function buildTitleGroups(str) {
  let arr = str.split('');
    let timeGroups = 
   [
    [],
    [],
    [],
    []
  ];

  let boxGroups = 
  [
    [],
    [],
    [],
    []
  ];
  
  let count = 0;
  for(let i = 0; i < arr.length; i++) {

  if(count === timeGroups.length) {
  count = 0}
   timeGroups[count].push(`<span class="introLetter">${arr[i]}</span>`)
   boxGroups[count].push(`.b${i+1}`)
    count++
  }
  // console.log(timeGroups)
  // console.log(boxGroups)
  return [timeGroups, boxGroups]
  }




function loadContent() {
  $('.wrapper').replaceWith(introBannerName)
  $('body').on('click', 'button.nameBannerButton', function (e) {
		e.preventDefault();
    let string = $('.nameBannerInput').val()
    console.log(string)
    $('.wrapper').replaceWith(introHeader(string))
    fancyShow()
    introLetters(string)
    showTitle(string)
	});
  // fancyShow()
  // introTitle()
};



$(document).ready(() => {
  loadContent()
});


// $('.deskHeaderLeft')

// $('.deskHeaderCenter')

// $('.deskHeaderRight')

// shadowLeft

// shadowRight

// shadowTop

// shadowBottom 
