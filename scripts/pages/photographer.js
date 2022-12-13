
// Récupération de l'id de l'url >> https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams
async function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");

    console.log("photographerID", id);

    return (id);
};

// Photographer (header)

async function getSelectedPhotographer() {
    const {photographers} = await getPhotographersData();
    console.log("photographers", photographers);

    const photographerId  = await getPhotographerId();
    console.log("photographerID", photographerId);

    const choosenPhotographer = photographers.filter(photographer => photographer.id == photographerId);    
    console.log("choosenPhotographer", choosenPhotographer);

    return (choosenPhotographer);
};

async function displayPhotographerData() {
    const selectedPhotographer = await getSelectedPhotographer();
    console.log("selectedPhotographer", selectedPhotographer);

    const photographerPageDOM = getPhotographerPageDOM(selectedPhotographer[0]);
    console.log("photographerPageDOM", photographerPageDOM);

    const photographersSection = document.querySelector(".photographer__page");
    photographersSection.appendChild(photographerPageDOM);
};

displayPhotographerData();

// Media

async function getSelectedPhotographerMedia() {
    const {media} = await getPhotographersData();
    console.log("media2", media);

    const photographerId = await getPhotographerId();
    console.log("photographerID2", photographerId);

    const selectedPhotographerMedias = media.filter(photographer => photographer.photographerId == photographerId);
    
    console.log("choosenPhotographerMedia", selectedPhotographerMedias);
    return (selectedPhotographerMedias);
};


async function displayphotographerMediaData() {
    const photographersMediaSection = document.querySelector(".photographer__media");
    const selectedPhotographerMedias = await getSelectedPhotographerMedia();

    localStorage.removeItem('mediaArray');
    localStorage.setItem('mediaArray', JSON.stringify(selectedPhotographerMedias));

    for (let i = 0; i < selectedPhotographerMedias.length; i++) {
        const photographerMediaDOM = getPhotographerMediaDOM(selectedPhotographerMedias[i],i);
        console.log("i", i);
        
        photographersMediaSection.appendChild(photographerMediaDOM);
        //console.log("sample", sample);
      }

    /*selectedPhotographerMedias.forEach((media) => {
        const photographerMediaDOM = getPhotographerMediaDOM(media);
        //console.log("photographerMediaDOM", photographerMediaDOM);
        
        //photographersMediaSection.appendChild(photographerMediaDOM);
        //console.log("sample", sample);
    });*/
};

async function displayphotogapherMedia() {
    const { media } = await getPhotographersData();
    displayphotographerMediaData(media);
};

displayphotogapherMedia();

// 

