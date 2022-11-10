const bgImgEl = document.getElementById("bg-image");

window.addEventListener("scroll",function(){
updateImage()

})

function updateImage(){
    bgImgEl.style.opacity = 1 - window.pageYOffset/1500
    bgImgEl.style.backgroundSize = 120 - window.pageYOffset/30 + "%"
}