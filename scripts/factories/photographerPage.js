function getPhotographerPageDOM(data) {

    const {name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    const photographerProfilePicture = `Photo du profil du photographe ${name}`;
    const location = `${city}, ${country}`;
    const photographerHome = `Lieu de résidence du photographe ${city}, ${country}`;
    const photographerMessage = `Message du photographe ${name}`;

    // Photographer Header
    const photographerInformations = document.createElement("article");
    photographerInformations.classList.add("header__photographerPage--info");

    // Photographer Name
    

    photographerInformations.appendChild()    
};