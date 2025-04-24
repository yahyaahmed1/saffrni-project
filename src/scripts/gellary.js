let projectImage = document.querySelectorAll(".gellary-img"),
  projectImageLength = projectImage.length,
  layer = document.querySelector(".layer"),
  layerClose = document.querySelector(".layer-btn"),
  layerImg = document.querySelector(".layer-img")

layerClose.addEventListener("click", () => {
  layer.classList.remove("layer-show")
})

for (let i = 0; i < projectImageLength; i++) {
  projectImage[i].addEventListener("click", () => {
    let imgSrc = projectImage[i].getAttribute("src");
    layerImg.setAttribute("src", imgSrc)
    layer.classList.add("layer-show")
  })
}
