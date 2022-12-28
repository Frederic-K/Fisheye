
// Grab photographer's id from url ///////////////////////
// https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams 

async function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");

    return (id);
};

// Photographer (header) ///////////////////////

async function getSelectedPhotographer() {
    const {photographers} = await getPhotographersData();

    const photographerId  = await getPhotographerId();

    const choosenPhotographer = photographers.filter(photographer => photographer.id == photographerId);    

    return (choosenPhotographer);
};

async function displayPhotographerData() {
    const selectedPhotographer = await getSelectedPhotographer();

    const photographerPageDOM = getPhotographerPageDOM(selectedPhotographer[0]);

    const photographersSection = document.querySelector(".photographer__page");
    photographersSection.appendChild(photographerPageDOM);
};

displayPhotographerData();

// Media ///////////////////////

function valueCompare (a, b) {
    return b - a;
};

async function getSelectedPhotographerMedia() {
    const {media} = await getPhotographersData();

    const photographerId = await getPhotographerId();

    const selectedPhotographerMedias = media.filter(photographer => photographer.photographerId == photographerId);
    
    const defaultSortedMedia = selectedPhotographerMedias.sort((a, b) => b.likes - a.likes);
    
    return (defaultSortedMedia);
};


async function displayPhotographerMediaData() {
    const photographersMediaSection = document.querySelector(".photographer__media");
    const selectedPhotographerMedias = await getSelectedPhotographerMedia();

    for (let i = 0; i < selectedPhotographerMedias.length; i++) {
        const photographerMediaDOM = getPhotographerMediaDOM(selectedPhotographerMedias[i],i); 
        photographersMediaSection.appendChild(photographerMediaDOM);
      }
};

async function displayPhotogapherMedia() {
    const {media} = await getPhotographersData();
    displayPhotographerMediaData(media);
};

displayPhotogapherMedia();


