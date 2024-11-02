let mainButton = document.getElementById("main")
let artButton = document.getElementById("art")
let badgesButton = document.getElementById("badges")



var root = document.querySelector(':root')
var rootStyle = getComputedStyle(root)

var currentTheme = ""



let themeSwitcher = document.getElementById("theme")
console.log(localStorage.getItem("theme"))
switch(localStorage.getItem("theme")){
    default:
        console.log(localStorage.getItem("theme"))
        setTheme("dark")

        localStorage.setItem("theme" ,"dark")
        currentTheme = localStorage.getItem("theme")
        break;
    case "dark":
        setTheme("dark")
        currentTheme = "dark"
        break;
    case "light":
        setTheme("light")
        currentTheme = "light"

        break;
   
}

themeSwitcher.innerHTML = currentTheme
// console.log(currentTheme)



mainButton.addEventListener('click', function(){
    redirect("index.html")
})

badgesButton.addEventListener('click', function(){
    redirect("badges.html")
})

artButton.addEventListener('click', function(){
    redirect("art.html")
})

themeSwitcher.addEventListener('click', toggleTheme)

function toggleTheme(){
    
    switch(currentTheme){
        case "dark":
            currentTheme = "light"
            localStorage.setItem("theme", "light")
            setTheme("light")
            break;
        case "light":
            currentTheme = "dark"
            localStorage.setItem("theme", "dark")
            setTheme("dark")
            break;
    } 
    themeSwitcher.innerHTML = currentTheme
}

function redirect(where){
    console.log("I'm heading out.")
    window.location.href = where
}


function setTheme(theme){
    switch(theme){
        case "dark":
            root.style.setProperty('--background-color', "#131B23")
            root.style.setProperty('--background-alt-color', "#0d151d")
            root.style.setProperty("--text-color", "#E9F1F7")
            root.style.setProperty("--subtext-color", "#c3cdd4")
            root.style.setProperty("--button-color", "#bfc1c2")
            root.style.setProperty("--button-hover-color", "#DC5F00")
            root.style.setProperty("--button-text-color", "black")
            
            break;
        case "light":
            root.style.setProperty('--background-color', "#d9cfba")
            root.style.setProperty('--background-alt-color', "#AD9987")
            root.style.setProperty("--text-color", "#373e3e")
            root.style.setProperty("--subtext-color", "#686D76")
            root.style.setProperty("--button-color", "#6e453c")
            root.style.setProperty("--button-text-color", "#eae2ca")
            root.style.setProperty("--button-hover-color", "#8F9779")
            break;
    }     
}

    // mainButton.addEventListener('mouseenter', function(){
    //     document.getElementById("left").style.borderRightColor = "var(--button-hover-color)"
    //     console.log("what the fukc???")
    // })