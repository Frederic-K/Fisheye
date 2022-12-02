
function getPhotographerPageDOM(data) {

    const {name, id, city, country, tagline, price, portrait} = data;
    console.log("photographerPageData", data);
    console.log("name", name);

    const picture = `../assets/photographers/${portrait}`;

    const photographerProfilePicture = `Photo du profil du photographe ${name}`;
    const location = `${city}, ${country}`;
    const photographerHome = `Lieu de résidence du photographe ${city}, ${country}`;
    const photographerMessage = `Message du photographe ${name}`;
    const photographerContactMsg = `Cliquer pour contacter ${name}`

    // Photographer header
    const photographerHeader = document.createElement("section");
    photographerHeader.classList.add("header__photographerPage");


    // Photographer header info
    const photographerInformations = document.createElement("article");
    photographerInformations.classList.add("header__photographerPage--info");

    // Photographer name
    const photographerName = document.createElement("p");
    photographerName.classList.add("header__photographerPage--name");
    photographerName.textContent = name;

    // Photographer location
    const photographerLocation = document.createElement("p");
    photographerLocation.classList.add("header__photographerPage--location");
    photographerLocation.setAttribute("arial-label", photographerHome);
    photographerLocation.textContent = location;

    // Photographer tagline
    const photographerTagline = document.createElement("p");
    photographerTagline.classList.add("header__photographerPage--name"); 
    photographerTagline.setAttribute("arial-label", photographerMessage);
    photographerTagline.textContent = tagline;

    // Photographer contact
    /*const photographerContactBtn = document.createElement("button");
    photographerContactBtn.classList.add("header__photographerPage--contactBtn");
    photographerContactBtn.setAttribute("arial-label", photographerContactMsg);
    photographerContactBtn.textContent = `Contactez-moi`;
    photographerContactBtn.setAttribute("onclick", displayModal());*/
    //const photographerContactBtn = document.getElementsByClassName("contact__button")[0]; 
    const photographerContactBtn = document.querySelector(".contact__button");
    photographerContactBtn.setAttribute("arial-label", photographerContactMsg);

    // Photographer Img header
    const photographerImgHeader = document.createElement("div");
    photographerImgHeader.classList.add("header__photographerPage--img");

    // Photographe portrait
    const photographerPortrait = document.createElement("img");
    photographerPortrait.classList.add("header__photographerPage--imgProfile")
    photographerPortrait.setAttribute("src", picture);
    photographerPortrait.setAttribute("alt", photographerProfilePicture);
    photographerPortrait.setAttribute("arial-label", photographerProfilePicture);

    photographerHeader.appendChild(photographerInformations);
    photographerInformations.appendChild(photographerName); 
    photographerInformations.appendChild(photographerLocation);
    photographerInformations.appendChild(photographerTagline);
    photographerHeader.appendChild(photographerContactBtn);
    photographerHeader.appendChild(photographerImgHeader);
    photographerImgHeader.appendChild(photographerPortrait);

    return (photographerHeader);
}; 