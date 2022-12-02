function getPhotographerPageDOM(data) {

    const {name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    const photographerProfilePicture = `Photo du profil du photographe ${name}`;
    const location = `${city}, ${country}`;
    const photographerHome = `Lieu de résidence du photographe ${city}, ${country}`;
    const photographerMessage = `Message du photographe ${name}`;

    // Photographer header info
    const photographerInformations = document.createElement("article");
    photographerInformations.classList.add("header__photographerPage");

    // Photographer name
    const photographerName = document.createElement("p");
    photographerName.classList.add("header__photographerPage--name");
    photographerName.textContent = name;

    // Photographer location
    const photographerLocation = documment.createElement("p");
    photographerLocation.classList.add("header__photographerPage--location");
    photographerLocation.setAttribute("arial-label", photographerHome);
    photographerLocation.textContent = location;

    // Photographer tagline
    const photographerTagline = document.createElement("p");
    photographerTagline.classList.add("header__photographerPage--name"); 
    photographerTagline.setAttribute("arial-label", photographerMessage)
    photographerTagline.textContent = tagline;

    // Photographer contact
    const photographerContactBtn = document.getElementsByClassName("contact__button")[0]; 

    // Photographer Img header
    const photographerImgHeader = document.createElement("div");
    photographerImgHeader.classList.add("header__photographerPage--img");

    // Photographe portrait
    const photographerPortrait = document.createElement("img");
    photographerPortrait.classList.add("header__photographerPage--imgProfile")
    photographerPortrait.setAttribute("src", picture);
    photographerPortrait.setAttribute("alt", photographerProfilePicture);
    photographerPortrait.setAttribute("arial-label", photographerProfilePicture);

    photographerInformations.appendChild(photographerName); 
    photographerInformations.appendChild(photographerLocation);
    photographerInformations.appendChild(photographerTagline);
    photographerInformations.appendChild(photographerContactBtn);
    photographerInformations.appendChild(photographerImgHeader);
    photographerImgHeader.appendChild(photographerPortrait);
};