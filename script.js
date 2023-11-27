function moveImage() {
    var scrollY = document.querySelector(".headerContainer").scrollTop;
    var parallaxImage = document.getElementById("parallaxImage");
    parallaxImage.style.transform = "translateX(-" + scrollY * 0.5 + "px)";
}
