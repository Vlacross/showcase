



const introBannerName = 
`
<div  class="wrapper">
  <div class="deskHeaderLeft"></div>
  <div class="introHeaderCenter">
    <label for="nameBannerInput" class="nameBannerInputLabel">Enter Your Name</label>
      <input id="nameBannerInput" class="nameBannerInput" type="text" min="1" max="24">  
      <button type="submit" class="nameBannerButton">Enter</button>
    
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


function introLetters(str) {


  let result = []
  let count = 1;
  for (let i = 0; i < str.length; i++) {

    // let box = $(`.box b${count}`)

   
    `
    <span class="introLetter ${count}">${str[i]}</span>
    `
    count++
  }
console.log(result.length)
// return result

}


const introLetter1 = 
`
<span class="introLetter 1">T</span>
`;

const introLetter2 = 
`
<span class="introLetter 2">i</span>
`;

const introLetter3 = 
`
<span class="introLetter 3">m</span>
`;

const introLetter4 = 
`
<span class="introLetter 4">V</span>
`;

const introLetter5 = 
`
<span class="introLetter 5">l</span>
`;

const introLetter6 = 
`
<span class="introLetter 6">a</span>
`;

const introLetter7 = 
`
<span class="introLetter 7">s</span>
`;

const introLetter8 = 
`
<span class="introLetter 8">u</span>
`;

const introLetter9 = 
`
<span class="introLetter 9">k</span>
`;

