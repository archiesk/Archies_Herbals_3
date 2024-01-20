function setup() {
    var isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
    canw=displayWidth;
    canh=displayHeight
    createCanvas(displayWidth+80,displayHeight)   
    }else{
      canw=windowWidth;
      canh=windowHeight
      createCanvas(windowWidth,windowHeight)
    }
}



function function1() {
  window.location.href="https://www.youtube.com"
  
}