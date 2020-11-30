let roofingContent = document.getElementById("roofing-gallery"),
    deckContent = document.getElementById("deck-gallery"),
    interiorContent = document.getElementById("interior-gallery"),
    modalContainer = document.getElementById("modal-container"),
    innerCarousel = document.getElementById("inner-carousel"),
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
    <img class="roof-images" onclick="modalShow(); currentSlide(${i+1})" src="${roofImages[i].source}" alt="${roofImages[i].alt}">
    </article>
    `;
}

/* Display all images for deck and fences */
for (let i = 0; i < deckImages.length; i++) {
    deckContent.innerHTML +=
        `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="deck-images" onclick="modalShowD(); currentSlideD(${i+1})" src="${deckImages[i].source}" alt="${deckImages[i].alt}">
    </article>
    `;
}

/* Display all images for interior renovations*/
for (let i = 0; i < interiorImages.length; i++) {
    interiorContent.innerHTML +=
        `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="interior-images" onclick="modalShowI(); currentSlideI(${i+1})" src="${interiorImages[i].source}" alt="${interiorImages[i].alt}">
    </article>
    `;
}

/* MODAL */

function modalShow() {
    modalContainer.style.display = "block";
}

function modalShowD() {
    modalContainerD.style.display = "block";
}

function modalShowI() {
    modalContainerI.style.display = "block";
}

$(document).on('click', '#exit', function () {
    //do something
    modalContainer.style.display = "none";
})

$(document).on('click', '#exit-deck', function () {
    //do something
    modalContainerD.style.display = "none";
})

$(document).on('click', '#exit-interior', function () {
    //do something
    modalContainerI.style.display = "none";
})


for (let i = 0; i < roofImages.length; i++) {
    innerCarousel.innerHTML += `<img class="mySlides" src="${roofImages[i].source}" alt="${roofImages[i].alt}"></img>`;
}

for (let i = 0; i < deckImages.length; i++) {
    innerCarouselD.innerHTML += `<img class="mySlidesD" src="${deckImages[i].source}" alt="${deckImages[i].alt}"></img>`;
}

for (let i = 0; i < interiorImages.length; i++) {
    innerCarouselI.innerHTML += `<img class="mySlidesI" src="${interiorImages[i].source}" alt="${interiorImages[i].alt}"></img>`;
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
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
  if (d > slides.length) {slideIndexD = 1}
  if (d < 1) {slideIndexD = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexD-1].style.display = "block";
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
  if (i > slides.length) {slideIndexI = 1}
  if (i < 1) {slideIndexI = slides.length}
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[slideIndexI-1].style.display = "block";
}

$(window).keyup(function (e) {
  var key = e.which;
  if(key == 37 ) {
    plusSlides(-1);
    plusSlidesD(-1);
    plusSlidesI(-1);
  } else if(key == 39) {
    plusSlides(1);
    plusSlidesD(1);
    plusSlidesI(1); 
  } else if(key == 27) {
    modalContainer.style.display = "none";
    modalContainerD.style.display = "none";
    modalContainerI.style.display = "none";
  }
});

window.onclick = function (event) {
    if (event.target == modalContainer || event.target == modalContainerD || event.target == modalContainerI ) {
        modalContainer.style.display = "none";
        modalContainerD.style.display = "none";
        modalContainerI.style.display = "none";
    }
}
