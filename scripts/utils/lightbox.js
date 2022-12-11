
function displayLightbox() {

    const lightboxBg = document.getElementById("lightbox__bg");
    lightboxBg.style.display = "block";
    lightboxBg.setAttribute("aria-hidden", "false");

    const lightboxModal = document.getElementsByClassName("lightbox__modal")[0];

    const lightboxBtnESC = document.getElementsByClassName("lightbox__modal--imgESC")[0];
    lightboxBtnESC.setAttribute("alt", "Bouton de fermeture de la vue");
    lightboxBtnESC.setAttribute("aria-label", "Bouton de fermeture de la vue");
    lightboxModal.appendChild(lightboxBtnESC);

    const lightboxPreviousMedia = document.createElement("div");
    lightboxPreviousMedia.classList.add("lightbox__modal--PrevIconBtn");
    lightboxPreviousMedia.setAttribute("role", "button");
    lightboxPreviousMedia.setAttribute("type", "button");
    lightboxPreviousMedia.setAttribute("aria-lable", "Bouton pour afficher le media précedent");
    lightboxModal.appendChild(lightboxPreviousMedia);

    const lightboxArrowLeft = document.createElement("i"); 
    lightboxArrowLeft.classList.add("fa-solid", "fa-chevron-left");
    lightboxPreviousMedia.appendChild(lightboxArrowLeft);

    const lightboxMediaCard = document.createElement("div");
    lightboxMediaCard.classList.add("lightbox__modal--card");
    lightboxModal.appendChild(lightboxMediaCard);

    const lightboxCardImg = document.getElementsByClassName("mediaCard__sample--img")[0];
    console.log("lightboxCardImg", lightboxCardImg);

    lightboxCardImg.classList.add("lightbox__modal--img");
    lightboxMediaCard.appendChild(lightboxCardImg);
    //lightboxMediaCard.textContent = `lightboxCardImg`;

    const lightboxCardCaption = document.getElementsByClassName("mediaCard__caption--title")[0];
    lightboxCardCaption.classList.add("lightbox__modal--caption");
    lightboxMediaCard.appendChild(lightboxCardCaption);

    const lightboxNextMedia = document.createElement("div");
    lightboxNextMedia.classList.add("lightbox__modal--NextIconBtn");
    lightboxNextMedia.setAttribute("role", "button");
    lightboxNextMedia.setAttribute("type", "button");
    lightboxNextMedia.setAttribute("aria-lable", "Bouton pour afficher le media suivant");
    lightboxModal.appendChild(lightboxNextMedia);

    const lightboxArrowRight = document.createElement("i"); 
    lightboxArrowRight.classList.add("fa-solid", "fa-chevron-right");
    lightboxNextMedia.appendChild(lightboxArrowRight);


   /* if (image) {
        const lightboxCardImg = document.createElement("img");
        lightboxCardImg.classList.add("lightbox__modal--img");
        lightboxCardImg.setAttribute("src", picture);
        lightboxCardImg.setAttribute("alt", lightboxMediaTitle);
        lightboxMediaCard.appendChild(lightboxCardImg);
    } else if (video) {
        const lightboxCardVideo = document.createElement("video");
        lightboxCardVideo.classList.add("lightbox__modal--video");
        lightboxCardVideo.setAttribute("src", movie);
        //mediaCardVideo.setAttribute("autoplay", "mute");
        lightboxCardVideo.setAttribute("controls", "");
        lightboxMediaCard.appendChild(lightboxCardVideo);
    } else {
        console.log("le type de fichier n'est pas reconnu")
    };*/
    
    /*const lightboxMediaShown = document.createElement("img");
    lightboxMediaCard.appendChild(lightboxMediaShown);*/
    
    /*const lightboxMediaCaption = document.createElement("div");
    lightboxMediaCard.appendChild(lightboxMediaCaption);*/

};

function closeLightbox() {
    const lightboxBg = document.getElementById("lightbox__bg");
    lightboxBg.style.display = "none";
    lightboxBg.setAttribute("aria-hidden", "true");
    const lightboxCardImg = document.getElementsByClassName("mediaCard__sample--img")[0];
    lightboxCardImg.classList.remove("lightbox__modal--img");
    const lightboxCardCaption = document.getElementsByClassName("mediaCard__caption--title")[0];
    lightboxCardCaption.classList.remove("lightbox__modal--caption");
};