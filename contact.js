let mastodon = document.getElementById("mastodon")
let youtube = document.getElementById("youtube")
let instagram = document.getElementById("instagram")

mastodon.addEventListener('click', function(){
    redirect("https://mastodon.world/@bery")
})
youtube.addEventListener('click', function(){
    redirect("https://www.youtube.com/@aqua-bery")
})

instagram.addEventListener('click', function(){
    redirect("https://www.instagram.com/thewitchandrea?igsh=MWthaXBpOXljbHBwMA==")
})

function redirect(where){
    console.log("huhh")
    window.open(where, '_blank');
    /* window.location.href = where */
}