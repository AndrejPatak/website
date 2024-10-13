let drawingsButton = document.getElementById("drawings")
let photoButton = document.getElementById("photos")
let webButton = document.getElementById("web")

let content = document.getElementById("content")

let currentPage = "photos"

let rows = 1

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

let arts = [
    "https://i.postimg.cc/pLZPwRwL/ekv-Shirt-Compressed.png",
    "https://i.postimg.cc/TYndcrQm/Wallpaper-EKV.png",
    "https://i.postimg.cc/pVwV80QR/ViewIMG.png"
    
]

let workingImages = photos

let imageItems = []
let allPhotosLoaded = false

let lastLoadedImage = 0

//loadAllImages() /* not for prod, only for testing */

//loadNImages(5)
backToTop.addEventListener('click', scrollToTop)



addRow()

function addRow(){
    
    if(!allPhotosLoaded){
        content.innerHTML += "<div class='image-row'> </div>"
        let imageRows = content.getElementsByClassName("image-row")
        loadNImages(5, imageRows[imageRows.length - 1])
    }
}

function unloadAllImages(){
    const itemsList = document.querySelectorAll('.image-item');
    const rowsList = document.querySelectorAll('.image-row')
    itemsList.forEach(item => {
        item.remove();
        }
    )
    rowsList.forEach(row => {
        row.remove()
        }
    )
    lastLoadedImage = 0
    allPhotosLoaded = false
    imageItems = []
}

function loadNImages(n, where){
    let end = n + lastLoadedImage
    let start = lastLoadedImage - 1
    for(lastLoadedImage; lastLoadedImage < end; lastLoadedImage++){
        
        console.log("Loaded image: ", lastLoadedImage)
        if(workingImages[lastLoadedImage]){
            if(allPhotosLoaded === false){
                where.innerHTML += "<div class='image-item'>\
                <div class='overlay'>\
                </div>\
                <div class='links'>\
                <a href='" + workingImages[lastLoadedImage] + "' class='openImage'> <i class='fa-solid fa-up-right-from-square'></i></a>\
                </div>\
                <img src='" + workingImages[lastLoadedImage] + "' width='100%' >\
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
            const offsetBottom = targetElement.offsetBottom;
            content.scrollTo({
                bottom: offsetBottom, // Scroll to the horizontal position of the target element
                behavior: "smooth" // Enables smooth scrolling
            });
        }
    }
    
    console.log("Last loaded image index: ", lastLoadedImage)
}

function loadAllImages(){ // function for testing.
    
    for(lastLoadedImage; lastLoadedImage < workingImages.length; lastLoadedImage++){
        // console.log("Loaded image: ", i)
        content.innerHTML += "<div class='image-item'><div class='overlay'></div><img src='" + workingImages[lastLoadedImage] + "' width='100%'><div class='underlay'><i class='fa-solid fa-spinner'></i></div></div>"
    }
    console.log("lastLoadedImage: ",lastLoadedImage)
}

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

function updateImages(to){
    const imageItems = content.getElementsByClassName("image-item")
   /* for(let i = 0; i < imageItems.length; i++){
    if(i + 1 > to.length){
        imageItems[i].remove()
    }else{
        imageItems[i].getElementsByTagName("img")[0].src = to[i]
    }
    
   } */
    unloadAllImages()
    workingImages = to
    addRow()
}


unloadAll.addEventListener("click", unloadAllImages)

loadMore.addEventListener('click', function(){
    addRow()
})

drawingsButton.addEventListener("click", function(){updateImages(arts)})
webButton.addEventListener("click", function(){updateImages(photos)})
photoButton.addEventListener("click", function(){updateImages(photos)})
