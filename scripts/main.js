let roofingContent  = document.getElementById("roofing-gallery"),
    deckContent     = document.getElementById("deck-gallery"),
    interiorContent = document.getElementById("interior-gallery");


/* Display all images for roofing */    
for(let i = 0; i < roofImages.length; i++){
    roofingContent.innerHTML += 
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img src="${roofImages[i].source}" alt="${roofImages[i].alt}">
    </article>
    `;
}

/* Display all images for deck and fences */
for(let i = 0; i < deckImages.length; i++){
    deckContent.innerHTML += 
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img src="${deckImages[i].source}" alt="${deckImages[i].alt}">
    </article>
    `;
}

/* Display all images for interior renovations*/
for(let i = 0; i < interiorImages.length; i++){
    interiorContent.innerHTML += 
    `
    <article class="col-6 col-md-4 col-lg-3">
    <img src="${interiorImages[i].source}" alt="${interiorImages[i].alt}">
    </article>
    `;
}