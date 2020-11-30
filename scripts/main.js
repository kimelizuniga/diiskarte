let roofingContent  = document.getElementById("roofing-gallery"),
    deckContent     = document.getElementById("deck-gallery"),
    interiorContent = document.getElementById("interior-gallery"),
    modalContainer  = document.getElementById("modal-container"),
    innerCarousel   = document.getElementById("inner-carousel"),
    imageModal      = document.getElementById("modal-image"),
    roofImageList   = document.getElementsByClassName("roof-images");


/* Display all images for roofing */    
for(let i = 0; i < roofImages.length; i++){
    roofingContent.innerHTML += 
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="roof-images" onclick="modalShow();" src="${roofImages[i].source}" alt="${roofImages[i].alt}">
    </article>
    `;
    
}

/* Display all images for deck and fences */
for(let i = 0; i < deckImages.length; i++){
    deckContent.innerHTML += 
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="deck-images" onclick="modalShow();" src="${deckImages[i].source}" alt="${deckImages[i].alt}">
    </article>
    `;
}

/* Display all images for interior renovations*/
for(let i = 0; i < interiorImages.length; i++){
    interiorContent.innerHTML += 
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img class="interior-images" onclick="modalShow();" src="${interiorImages[i].source}" alt="${interiorImages[i].alt}">
    </article>
    `;
}

/* MODAL */

function modalShow() {
    modalContainer.style.display = "block";
}

$(document).on('click','.roof-images',function(){
    //do something
    imageModal.src = this.src;
})

$(document).on('click','.deck-images',function(){
    //do something
    imageModal.src = this.src;
})

$(document).on('click','.interior-images',function(){
    //do something
    imageModal.src = this.src;
})

$(document).on('click','#exit',function(){
    //do something
    modalContainer.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  }
