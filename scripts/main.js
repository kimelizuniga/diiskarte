let roofingContent = document.getElementById("roofing-gallery"),
  deckContent = document.getElementById("deck-gallery"),
  interiorContent = document.getElementById("interior-gallery"),
  modalContainer = document.getElementById("modal-container"),
  innerCarousel = document.getElementById("inner-carousel"),
  carouselModal = document.getElementById("carousel-modal"),
  leftArrow = document.getElementById("left"),
  rightArrow = document.getElementById("right"),
  slideImages = document.getElementsByClassName("mySlides"),
  modalContainerD = document.getElementById("modal-container-deck"),
  innerCarouselD = document.getElementById("inner-carousel-deck"),
  leftArrowD = document.getElementById("left-deck"),
  rightArrowD = document.getElementById("right-deck"),
  slideImagesD = document.getElementsByClassName("mySlidesD"),
  modalContainerI = document.getElementById("modal-container-interior"),
  innerCarouselI = document.getElementById("inner-carousel-interior"),
  leftArrowI = document.getElementById("left-interior"),
  rightArrowI = document.getElementById("right-interior"),
  slideImagesI = document.getElementsByClassName("mySlidesI"),
  roofImageList = document.getElementsByClassName("roof-images");


/* Display all images for roofing */
for (let i = 0; i < roofImages.length; i++) {
  roofingContent.innerHTML +=
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="roof-images" onclick="modalShow(); currentSlide(${i + 1})" src="${roofImages[i].source}" alt="${roofImages[i].alt}">
    </article>
    `;
}

/* Display all images for deck and fences */
for (let i = 0; i < deckImages.length; i++) {
  deckContent.innerHTML +=
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="deck-images" onclick="modalShowD(); currentSlideD(${i + 1})" src="${deckImages[i].source}" alt="${deckImages[i].alt}">
    </article>
    `;
}

/* Display all images for interior renovations*/
for (let i = 0; i < interiorImages.length; i++) {
  interiorContent.innerHTML +=
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="interior-images" onclick="modalShowI(); currentSlideI(${i + 1})" src="${interiorImages[i].source}" alt="${interiorImages[i].alt}">
    </article>
    `;
}

/* MODAL */

let modalBackgroundSource;

function modalShow() {
  modalContainer.style.display = "block";
  document.body.style.overflow = "hidden";
}

function modalShowD() {
  modalContainerD.style.display = "block";
  document.body.style.overflow = "hidden";
}

function modalShowI() {
  modalContainerI.style.display = "block";
  document.body.style.overflow = "hidden";
}

$(document).on('click', '#exit', function () {
  //do something
  modalContainer.style.display = "none";
  document.body.style.overflow = "auto";
})

$(document).on('click', '#exit-deck', function () {
  //do something
  modalContainerD.style.display = "none";
  document.body.style.overflow = "auto";
})

$(document).on('click', '#exit-interior', function () {
  //do something
  modalContainerI.style.display = "none";
  document.body.style.overflow = "auto";
})


for (let i = 0; i < roofImages.length; i++) {
  let caption;

  if(roofImages[i].caption == undefined){
    caption = " ";
  } else {
    caption = roofImages[i].caption;
  }

  innerCarousel.innerHTML +=
    `
    <div class="mySlides text-center">
    <img src="${roofImages[i].source}" alt="${roofImages[i].alt}">
    <span">${i + 1}/${roofImages.length}</span>
    <h6>${caption}</h6>
    </div>
    `;
}



for (let i = 0; i < deckImages.length; i++) {

  let caption;

  if(deckImages[i].caption == undefined){
    caption = " ";
  } else {
    caption = deckImages[i].caption;
  }

  innerCarouselD.innerHTML += `
    <div class="mySlidesD text-center">
    <img src="${deckImages[i].source}" alt="${deckImages[i].alt}">
    <span">${i + 1}/${deckImages.length}</span>
    <h6>${caption}</h6>
    </div>
    `;
}

for (let i = 0; i < interiorImages.length; i++) {

  let caption;

  if(interiorImages[i].caption == undefined){
    caption = " ";
  } else {
    caption = interiorImages[i].caption;
  }

  innerCarouselI.innerHTML += `
    <div class="mySlidesI text-center">
    <img src="${interiorImages[i].source}" alt="${interiorImages[i].alt}">
    <span">${i + 1}/${interiorImages.length}</span>
    <h6>${caption}</h6>
    </div>
    `;
}

/* Roof */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = "0";
  }
  slides[slideIndex - 1].style.display = "block";
  // modalContainer.style.backgroundImage = `url('${roofImages[slideIndex-1].source}')`;

  setTimeout(function(){
    slides[slideIndex -1].style.opacity = "1";
  }, 20)

}

/* Deck */

let slideIndexD = 1;
showSlidesD(slideIndexD);

// Next/previous controls
function plusSlidesD(d) {
  showSlidesD(slideIndexD += d);
}

// Thumbnail image controls
function currentSlideD(d) {
  showSlidesD(slideIndexD = d);
}

function showSlidesD(d) {
  var i;
  var slides = document.getElementsByClassName("mySlidesD");
  if (d > slides.length) { slideIndexD = 1 }
  if (d < 1) { slideIndexD = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = "0";
  }
  slides[slideIndexD - 1].style.display = "block";
  // modalContainerD.style.backgroundImage = `url('${deckImages[slideIndexD-1].source}')`;

  setTimeout(function(){
    slides[slideIndexD -1].style.opacity = "1";
  }, 20)
}

/* Interior */

let slideIndexI = 1;
showSlidesI(slideIndexI);

// Next/previous controls
function plusSlidesI(i) {
  showSlidesI(slideIndexI += i);
}

// Thumbnail image controls
function currentSlideI(i) {
  showSlidesI(slideIndexI = i);
}

function showSlidesI(i) {
  var x;
  var slides = document.getElementsByClassName("mySlidesI");
  if (i > slides.length) { slideIndexI = 1 }
  if (i < 1) { slideIndexI = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
    slides[x].style.opacity = "0";
  }
  slides[slideIndexI - 1].style.display = "block";
  // modalContainerI.style.backgroundImage = `url('${interiorImages[slideIndexI-1].source}')`;

  setTimeout(function(){
    slides[slideIndexI -1].style.opacity = "1";
  }, 20)
}

$(window).keyup(function (e) {
  var key = e.which;
  if (key == 37) {
    plusSlides(-1);
    plusSlidesD(-1);
    plusSlidesI(-1);
  } else if (key == 39) {
    plusSlides(1);
    plusSlidesD(1);
    plusSlidesI(1);
  } else if (key == 27) {
    modalContainer.style.display = "none";
    modalContainerD.style.display = "none";
    modalContainerI.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == modalContainer || event.target == modalContainerD || event.target == modalContainerI) {
    modalContainer.style.display = "none";
    modalContainerD.style.display = "none";
    modalContainerI.style.display = "none";
    document.body.style.overflow = "auto";
  }
}