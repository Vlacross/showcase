
const introBannerName = 
`
<div  class="wrapper">
  <div class="deskHeaderLeft"></div>
  <div class="introHeaderCenter">
  <fielset class="introHeaderCenter">
    <label for="nameBannerInput" class="nameBannerInputLabel">Enter Your Name</label>
      <input id="nameBannerInput" class="nameBannerInput" type="text" min="1" max="24">  
      <button type="submit" class="nameBannerButton">Enter</button>
    </fieldset>
  </div>
  <div class="deskHeaderRight"></div>

</div>
`


function introHeader(str) {

  
  let result = ''
  let count = 1;
  for (let i = 0; i < str.length; i++) {

 result+=
    `
    <div class="box b${count}"></div>
    `
    
    count++
  }
  let introHeader = 
  `
<div  class="wrapper">
  <div class="deskHeaderLeft"></div>
  <form class="deskHeaderCenter">
    ${result}
  </form>
  <div class="deskHeaderRight"></div>

</div>
`
return introHeader
  
};


const replayButton = 
`
    <div class="replay">
      <button class="replayButton">Again</button>
    </div>
`



