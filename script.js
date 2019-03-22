let string;

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




function showTitle(string) {
  let count = 0;
  const [timeGroups, boxGroups] = buildTitleGroups(string)


  
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

  return [timeGroups, boxGroups]
  };

  function renderEffects(string) {
    $('.wrapper').replaceWith(introHeader(string))
    fancyShow()
    
    showTitle(string)
  }

  

function loadContent() {
  $('.wrapper').replaceWith(introBannerName)
  $('body').on('click', 'button.nameBannerButton', function (e) {
		e.preventDefault();
    string = $('.nameBannerInput').val()
    renderEffects(string)
    $('footer').prepend(replayButton)
	});

};

function ears() {
  $('body').on('click', 'button.replayButton', function (e) {
    e.preventDefault();
    console.log('botboy')
    renderEffects(string)
	});

}


$(document).ready(() => {
  loadContent()
  ears()
});
