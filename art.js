let content = document.getElementById("content")

let currentPage = "photos"


let loadMore = document.getElementById("loadMore")
let unloadAll = document.getElementById("unloadAll")
let backToTop = document.getElementById("toTop")

let photos = [
    "https://i.ibb.co/j4308L3/IMG-20240812-173428958.jpg",
    "https://i.ibb.co/2M0Pvx7/IMG-20240812-173445298.jpg",
    "https://i.ibb.co/Nswy1zK/IMG-20240713-133240272.jpg",
    "https://i.postimg.cc/xT9n2JPs/IMG-0502.jpg",
    "https://i.postimg.cc/W4kQrTnF/IMG-0506.jpg",
    "https://i.postimg.cc/DZq3Vn4k/IMG-0524.jpg",
    "https://i.postimg.cc/nVGf0Vtq/IMG-0526.jpg",
    "https://i.postimg.cc/d1RpH6gJ/IMG-0527.jpg",
    "https://i.postimg.cc/yYp5bkp3/IMG-0538.jpg",
    "https://i.postimg.cc/6QPp6WQ8/IMG-20240713-125645398.jpg",
    "https://i.postimg.cc/hGNKW2Cx/IMG-20240713-133240272.jpg",
    "https://i.postimg.cc/mDxW6tDy/IMG-20240713-133603304.jpg",
    "https://i.postimg.cc/MKYZMbT2/IMG-20240713-135018443.jpg",
    "https://i.postimg.cc/YCnp8rYd/IMG-20240713-140048641.jpg",
    "https://i.postimg.cc/0jsxrb1y/IMG-20240713-140744289.jpg",
    "https://i.postimg.cc/MKs2JsHT/IMG-20240718-224206426.jpg",
    "https://i.postimg.cc/xCQFzH8h/IMG-20240725-193359281.jpg",
    "https://i.postimg.cc/j2dg8bzh/IMG-20240802-201239028.jpg",
    "https://i.postimg.cc/KvjpBmcG/IMG-20240813-185615808.jpg",
    "https://i.postimg.cc/L6WCVGhz/IMG-20240814-062808641.jpg",
    "https://i.postimg.cc/GmsMgzs6/IMG-20240814-062824218.jpg",
    "https://i.postimg.cc/fWBgVVNq/IMG-20240814-063330495.jpg",
    "https://i.postimg.cc/pdbsw8fr/IMG-20240814-194550587.jpg",
    "https://i.postimg.cc/XJxxBzTB/IMG-20240814-194837219.jpg",
    "https://i.postimg.cc/C517G4gP/IMG-20240814-194933792.jpg",
    "https://i.postimg.cc/yxbPvS6V/IMG-20240814-195037338.jpg"

]

let allPhotosLoaded = false
let images = []
images = photos

let lastLoadedImage = 0

//loadAllImages() /* not for prod, only for testing */

loadNImages(5)

function unloadAllImages(){
    const items = document.querySelectorAll('.image-item');
    items.forEach(item => {
        item.remove();
        }
    )
    lastLoadedImage = 0
    allPhotosLoaded = false
}

function loadNImages(n){
    let end = n + lastLoadedImage
    let start = lastLoadedImage - 1
    for(lastLoadedImage; lastLoadedImage < end; lastLoadedImage++){
        
        console.log("Loaded image: ", lastLoadedImage)
        if(photos[lastLoadedImage]){
            if(allPhotosLoaded === false){
                content.innerHTML += "<div class='image-item'>\
                <div class='overlay'>\
                </div>\
                <div class='links'>\
                <a href='" + photos[lastLoadedImage] + "' class='openImage'> <i class='fa-solid fa-up-right-from-square'></i></a>\
                </div>\
                <img src='" + photos[lastLoadedImage] + "' width='100%' >\
                </div>"
            }
            
        }else{
            lastLoadedImage -= 1
            allPhotosLoaded = true
            break;
        }
        
    }
    if (start < lastLoadedImage) { // Only if new images were actually loaded
        const targetElement = content.children[start]; // The first newly loaded element
        
        if (targetElement) {
            const offsetLeft = targetElement.offsetLeft;
            content.scrollTo({
                left: offsetLeft, // Scroll to the horizontal position of the target element
                behavior: "smooth" // Enables smooth scrolling
            });
        }
    }
    
    console.log("Last loaded image index: ", lastLoadedImage)
}





function loadAllImages(){ // function for testing.
    
    for(lastLoadedImage; lastLoadedImage < photos.length; lastLoadedImage++){
        // console.log("Loaded image: ", i)
        content.innerHTML += "<div class='image-item'><div class='overlay'></div><img src='" + photos[lastLoadedImage] + "' width='100%'><div class='underlay'><i class='fa-solid fa-spinner'></i></div></div>"
    }
    console.log("lastLoadedImage: ",lastLoadedImage)
}

backToTop.addEventListener('click', scrollToTop)

function scrollToTop(){
    /* document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera */
    const targetElement = content.children[0]; // The first newly loaded element
        
    if (targetElement) {
        const offsetleft = targetElement.offsetLeft;
        content.scrollTo({
            left: offsetleft - 500, // Scroll to the horizontal position of the target element
            behavior: "smooth" // Enables smooth scrolling
        });
    }
    
}

unloadAll.addEventListener("click", unloadAllImages)

loadMore.addEventListener('click', function(){
    loadNImages(5)
})

