//opens the specified menu
function openBio(bio) {
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

       
