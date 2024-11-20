let contentPage = document.getElementById("contentPage")

let screenContent = document.getElementById("screenContent")
let screenItems = document.getElementById("screenItems")
let closeButton = document.querySelector(".close")

closeButton.addEventListener('click', hideContentPage)

/*--------- SELECTOR ---------*/
let imageSelector = document.getElementById("imageSelector")


var currentImage = 0

let selectorImages = []

const birdieDescription = "Birdie Battle is a solo project I developed in the span of a month.\
                    It's a small game, one on one multiplayer, 2 maps 6 characters and\
                    a handfull of weapons to use. Please chek it out on <a href='https://github.com/AndrejPatak/BirdieBattle'>GitHub</a> and Itch.io (coming soon)"

const glyphDescription = "[GLYPH_NODE] is an open source racing game developed for vimjam5 within 10 days. \
                          Speedrun across the security layers of a secure system to avoid beeing detected by the antiviurs.\
                          Available on <a href='https://beryboo.itch.io/glyph-node'>itch.io</a> for free!\
                          \nSource code is available on github <a href='https://github.com/AndrejPatak/glyph_node'>here</a>"

let glyphImages = [
    "./glyph_node/glyph1.png",
    "./glyph_node/glyph2.png",
    "./glyph_node/glyph3.png",
    "./glyph_node/glyph4.png",
    "./glyph_node/glyph5.png"
    ]
let birdieImages = [
    "./birdie/main_menu.jpg",
    "./birdie/factory_map.png",
    "./birdie/EndScreen.png",
    "./birdie/city_map.png"
    ]

function preloadImages(images){
    for(let index; index < images.length; index++){
        new Image().src = images.index
            
    }
}

preloadImages(glyphImages)
preloadImages(birdieImages)


/*------- END SELECTOR -------*/


/* ----- SOCIALS BUTTONS ------ */




let glyphButton = document.getElementById("glyph")
let birdieButton = document.getElementById("birdie")

glyphButton.addEventListener('click', function(){setContentPage("Glyph")})
birdieButton.addEventListener('click',  function(){setContentPage("Birdie")})
// to pass an arg into an eventListener do something like:
//     button.addEventListener('click', function(){contentPageSay("lol")})



function showContentPage(){

    contentPage.style.display = "block"
}
function hideContentPage(){
    contentPage.style.display = "none"
}


var selectorRight = document.querySelector(".right")
var selectorLeft = document.querySelector(".left")


function setContentPage(thing)
{
    let title = document.querySelector(".title")
    let description = document.querySelector(".description")

    showContentPage()  
        
    

    switch(thing){

        default:
            break;
        case "Glyph":
            if( currentImage > glyphImages.length){
                currentImage = glyphImages.length - 1
            }
            title.innerHTML = "[GLYPH_NODE]"
            description.innerHTML = glyphDescription
            selectorImages = glyphImages
            break;

        case "Birdie":
            title.innerHTML = "Birdie Battle"
            description.innerHTML = birdieDescription
            selectorImages = birdieImages
            break;
    }
    updateImage(currentImage)   
}

function contentPageSay(what){ // debug function lol
    let title = document.querySelector(".title")
    let description = document.querySelector(".description")

    title.innerHTML = ""
    description.innerHTML = "hello!"
}




selectorLeft.addEventListener('click', previousImage)
selectorRight.addEventListener('click', nextImage)


function nextImage(){
    if (currentImage < selectorImages.length - 1){
        currentImage += 1 
    }else{
        currentImage = 0
    }
    updateImage(currentImage)

}

function previousImage(){
    if (currentImage > 0){
        currentImage -= 1 
    }else{
        currentImage = selectorImages.length - 1
    }
    updateImage(currentImage)
}


function updateImage(img){
    
    
    if (img >= selectorImages.length){
        img = selectorImages.length - 1
    }

    let selectorImage = document.getElementById("imageSelector-image")
    selectorImage.style.backgroundImage = "url(" + selectorImages[img] + ")"

}


document.addEventListener('keydown', myFunction);

function myFunction() {
  switch (event.key) {
    case 'ArrowLeft':
      previousImage()
      break;
    case 'ArrowRight':
      nextImage()
      break;
    case 'Escape':
        hideContentPage()
        break;
    default:
      console.log("unbinded key");
      return;
  }

  event.preventDefault();
}       