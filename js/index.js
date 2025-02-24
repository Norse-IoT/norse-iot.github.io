
//This section of the code handles the Dark Mode popup.
document.querySelector("#theme-container").innerHTML = `
<div tabindex=0 onclick="theme('dark')" id="iot-theme" src="/images/dark.webp" class="" alt="Dark Mode">
<i class="fa fa-2x fa-moon-o" aria-hidden="true"></i>
</div>`

//Checks if the user has already turned on Dark Mode.
if (localStorage.darkMode == "true") {
    theme("dark")
}
else {
    theme("light")
}


//This function switches Dark Mode on and off.
function theme(theme) {
    baseurl = ``
    //DARK MODE
    if (theme == "dark") {
        document.getElementById("theme").href = `${baseurl}/css/dark.css`
        document.getElementById("iot-theme").outerHTML = `<div tabindex=0 onclick="theme('light')" id="iot-theme" src="/images/dark.webp" class="" alt="Light Mode">
        <i class="fa fa-3x fa-sun-o" aria-hidden="true"></i>
        </div>`
        localStorage.darkMode = "true"
    }
    //LIGHT MODE
    else {
        localStorage.darkMode = "false"
        document.getElementById("theme").href = `${baseurl}/css/light.css`
        document.getElementById("iot-theme").outerHTML = `<div tabindex=0 onclick="theme('dark')" id="iot-theme" src="/images/dark.webp" class="" alt="Dark Mode">
        <i class="fa fa-3x fa-moon-o" aria-hidden="true"></i>
        </div>`


    }
}

//opens the specified menu
function openBio(bio) {
    //close a previously opened bio
    oldBio = document.querySelector(".visible-bio")
    if (oldBio != null) {
        closeBio(oldBio.id)
    }
    //open bio
    document.getElementById(bio).className = "visible-bio";
    document.getElementById(bio).style.opacity = 0;
    let opacity = parseFloat(document.getElementById(bio).style.opacity)
    setInterval(function(){
        if (opacity <= 1) {
            opacity += 1
            document.getElementById(bio).style.opacity = opacity
        }
    }, 15)


    }
    
//closes the specified menu
function closeBio(bio) {
    let opacity = parseFloat(document.getElementById(bio).style.opacity)
    setInterval(function(){
        if (opacity >= -5) {
            opacity -= 1
            document.getElementById(bio).style.opacity = opacity;
            if (opacity <= -5) {
                document.getElementById(bio).className = "hidden-bio";
            }
        }
        }, 15)
    
    
}
   

document.getElementById("year").innerHTML = new Date().getFullYear()
function isHidden() {
    return (document.getElementById("officers").offsetParent === null)
    }
