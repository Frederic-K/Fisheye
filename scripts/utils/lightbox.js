
function displayLightbox() {

    const lightboxBg = document.getElementById("lightbox__bg");
    lightboxBg.style.display = "block";
    lightboxBg.setAttribute("aria-hidden", "false");

    const lightboxModal = document.getElementsByClassName("lightbox__modal")[0];

    const lightboxBtnESC = document.getElementsByClassName("lightbox__modal--imgESC")[0];
    lightboxBtnESC.setAttribute("role", "button");
    lightboxBtnESC.textContent = `Fermer`;
    lightboxBtnESC.setAttribute("alt", "Bouton de fermeture de la vue");
    lightboxBtnESC.setAttribute("aria-label", "Bouton de fermeture de la vue");
    lightboxModal.appendChild(lightboxBtnESC);

    const lightboxPreviousMedia = document.createElement("div");
    lightboxPreviousMedia.classList.add("lightbox__modal--PrevIconBtn");
    lightboxPreviousMedia.setAttribute("role", "button");
    lightboxPreviousMedia.setAttribute("type", "button");
    lightboxPreviousMedia.setAttribute("aria-lable", "Bouton pour afficher le media précedent");
    lightboxPreviousMedia.setAttribute("onclick", "plusSlides(-1)")
    lightboxModal.appendChild(lightboxPreviousMedia);

    const lightboxArrowLeft = document.createElement("i"); 
    lightboxArrowLeft.classList.add("fa-solid", "fa-chevron-left");
    lightboxPreviousMedia.appendChild(lightboxArrowLeft);

    const lightboxMediaCard = document.createElement("div");
    //lightboxMediaCard.classList.add("mySlides");
    lightboxModal.appendChild(lightboxMediaCard);


    const lightboxCardImg = document.createElement("img");
    lightboxCardImg.classList.add("mySlides");
    lightboxMediaCard.appendChild(lightboxCardImg);
    
    const lightboxCaptionContainer = document.createElement("div");
    lightboxCaptionContainer.classList.add("caption__container");
    lightboxModal.appendChild(lightboxCaptionContainer);

    const lightboxCardCaption = document.createElement("p");
    lightboxCardCaption.setAttribute("id", "caption");
    lightboxCaptionContainer.appendChild(lightboxCardCaption);

    const lightboxNextMedia = document.createElement("div");
    lightboxNextMedia.classList.add("lightbox__modal--NextIconBtn");
    lightboxNextMedia.setAttribute("role", "button");
    lightboxNextMedia.setAttribute("type", "button");
    lightboxNextMedia.setAttribute("aria-lable", "Bouton pour afficher le media suivant");
    lightboxNextMedia.setAttribute("onclick", "plusSlides(1)")
    lightboxModal.appendChild(lightboxNextMedia);

    const lightboxArrowRight = document.createElement("i"); 
    lightboxArrowRight.classList.add("fa-solid", "fa-chevron-right");
    lightboxNextMedia.appendChild(lightboxArrowRight);


    /*function selectMediaSrc(image, video) {
        if (image) {
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
        };
    };*/

    const mediaCard = document.getElementsByClassName("mediaCard");
    console.log("lightbox meddiaCard", mediaCard);

    let slideIndex = 1;

    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    };
    
   function currentSlide(n) {
        showSlides(slideIndex = n);
    };
    
    function showSlides(n) {
        let i; 
        let slides = document.getElementsByClassName("mySlides");
        console.log("slides", slides);
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    };
};



/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i; 
    let slides = document.getElementsByClassName("mySlides");
    console.log("slides", slides);
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //slides[slideIndex-1].style.display = "block";
};*/

function closeLightbox() {
    const lightboxBg = document.getElementById("lightbox__bg");
    lightboxBg.style.display = "none";
    /*lightboxBg.setAttribute("aria-hidden", "true");
    const lightboxCardImg = document.getElementsByClassName("mediaCard__sample--img")[0];
    lightboxCardImg.classList.remove("lightbox__modal--img");
    const lightboxCardCaption = document.getElementsByClassName("mediaCard__caption--title")[0];
    lightboxCardCaption.classList.remove("lightbox__modal--caption");*/
};