






















function loadContent() {
  console.log('loadContents')
$('body').prepend(nav)

}



function ears() {

$('body').on('click', 'a.a1', (e) => {
  console.log('a1')
});
$('body').on('click', 'a.a2', (e) => {
  console.log('a2')
});
$('body').on('click', 'a.a3', (e) => {
  console.log('a3')
});
$('body').on('click', 'a.a4', (e) => {
  console.log('a4')
});

}


$(document).ready(() => {
  loadContent()
  ears()
});


