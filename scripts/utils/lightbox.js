
let currentIndex = "";

const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentImgCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function openLightbox(data) {

    console.log("data", data);

    lightboxBg.classList.remove("hidden");

    const lightboxMediaSource = data.src;
    console.log("lightboxMediaSource", lightboxMediaSource);

    lightboxCurrentImg.setAttribute("src", lightboxMediaSource);

    // Alternative : récupérer le titre à partir du "alt=" de l'img
    const lightboxCurrentImgTitleSource = data.parentElement.parentElement.getElementsByClassName("mediaCard__caption--title")[0];

    lightboxCurrentImgCaption.textContent = lightboxCurrentImgTitleSource.textContent;

    lightboxPrevMedia.addEventListener("click", () => {
        moveLightboxSlide(-1);
        currentIndex = currentIndex - 1;
        console.log("newCurrentIndex1", currentIndex);
    });
    
    lightboxNextMedia.addEventListener("click", () => {
        moveLightboxSlide(1);
        currentIndex = currentIndex + 1;
        console.log("newCurrentIndex2", currentIndex);
    });
    
    
    function moveLightboxSlide(direction) {
        console.log("direction", direction);

        currentIndex = parseInt(data.dataset.index);
        console.log("currentIndex", currentIndex);
     
        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlideIndex = mediaArray[currentIndex + direction];

        console.log("mediaArray", mediaArray);    
        console.log("newLightboxSlideIndex", newLightboxSlideIndex); 

        const newlightboxSlidePicture = newLightboxSlideIndex.image;
        console.log("newlightboxSlidePicture", newlightboxSlidePicture); 

        const newlightboxSlideTitle = newLightboxSlideIndex.title;

        console.log("newlightboxSlideTitle", newlightboxSlideTitle);

        const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;
        console.log("newLightboxSlideSource", newLightboxSlideSource);

        //lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");

        lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
        console.log("lightboxCurrentImg", lightboxCurrentImg);

        lightboxCurrentImgCaption.textContent = newlightboxSlideTitle; 
    };

    /*function moveLightboxSlide(direction) {
        console.log("direction", direction);

        currentIndex = parseInt(data.dataset.index);
        console.log("currentIndex", currentIndex);
     
        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlideIndex = mediaArray[currentIndex + direction];

        console.log("mediaArray", mediaArray);    
        console.log("newLightboxSlideIndex", newLightboxSlideIndex); 

        let newCurrentIndex = currentIndex + direction;
        console.log("newCurrentIndex", newCurrentIndex);

        if (!currentIndex === newCurrentIndex) {

        const newlightboxSlidePicture = newLightboxSlideIndex.image;
        console.log("newlightboxSlidePicture", newlightboxSlidePicture); 

        const newlightboxSlideTitle = newLightboxSlideIndex.title;
        console.log("newlightboxSlideTitle", newlightboxSlideTitle);

        const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;
        console.log("newLightboxSlideSource", newLightboxSlideSource);

        lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");

        lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
        console.log("lightboxCurrentImg", lightboxCurrentImg);

        lightboxCurrentImgCaption.textContent = newlightboxSlideTitle;

        currentIndex = newCurrentIndex;

        } else { 
            
        }     
    
    };*/

};

    
    // data est le e.target

    //retier class hidden de la modal

    // remplire src de l'image de la modal avec data.src

    /*const mediaArray = localStorage.getItem("mediaArray");
    const mediaArrayFinal = JSON.parse(mediaArray);

    console.log("mediaArrayFinal", mediaArrayFinal);

    currentIndex = parseInt(data.dataset.index);

    console.log("currentIndex", currentIndex);

    console.log("mediarrayF", mediaArrayFinal[currentIndex + (-1)]);*/

lightboxPrevMedia.addEventListener("click", () => {
    moveLightboxSlide(-1);
});

lightboxNextMedia.addEventListener("click", () => {
    moveLightboxSlide(1);
});


function moveLightboxSlide(direction) {
    console.log("direction", direction);
 
    const mediaArray = localStorage.getItem("mediaArray");
    const mediaArrayFinal = JSON.parse(mediaArray);

    console.log("mediaArrayFinal", mediaArrayFinal);

    //currentIndex = parseInt(data.dataset.index);

    console.log("currentIndex", currentIndex);

    console.log("mediarrayF", mediaArrayFinal[currentIndex + direction]);


};

lightboxEscBtn.addEventListener("click", () => {
    closeLightbox();
});

function closeLightbox() {

    lightboxBg.classList.add("hidden");
    lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");

    // add src="" a vide
    // add titre a vide

    // add class hidden


    /*lightboxBg.setAttribute("aria-hidden", "true");
    const lightboxCardImg = document.getElementsByClassName("mediaCard__sample--img")[0];
    lightboxCardImg.classList.remove("lightbox__modal--img");
    const lightboxCardCaption = document.getElementsByClassName("mediaCard__caption--title")[0];
    lightboxCardCaption.classList.remove("lightbox__modal--caption");*/
};