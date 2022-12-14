
let currentIndex = "";

const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentVideo = document.getElementsByClassName("lightbox__modal--cardVideo")[0];
const lightboxCurrentCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function openLightbox(data) {

    console.log("data", data);

    lightboxBg.classList.remove("hidden");
    
    currentIndex = parseInt(data.dataset.index);
    console.log("currentIndex", currentIndex);

    const lightboxMediaSource = data.src;
    console.log("lightboxMediaSource", lightboxMediaSource);

    lightboxCurrentImg.setAttribute("src", lightboxMediaSource);

    // Alternative : récupérer le titre à partir du "alt=" de l'img
    const lightboxCurrentImgTitleSource = data.parentElement.parentElement.getElementsByClassName("mediaCard__caption--title")[0];

    lightboxCurrentCaption.textContent = lightboxCurrentImgTitleSource.textContent;

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
    
    
    /*function moveLightboxSlide(direction) {
        console.log("direction", direction);
     
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

        lightboxCurrentCaption.textContent = newlightboxSlideTitle; 
    };*/

    function moveLightboxSlide(direction) {
        console.log("direction", direction);
     
        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlideIndex = mediaArray[currentIndex + direction];

        console.log("mediaArray", mediaArray);    
        console.log("newLightboxSlideIndex", newLightboxSlideIndex); 

        if (image) {
            const newlightboxSlidePicture = newLightboxSlideIndex.image;
            console.log("newlightboxSlidePicture", newlightboxSlidePicture);
            const newLightboxPictureSource = `../assets/sample/${newlightboxSlidePicture}`;
            console.log("newLightboxSlideSource", newLightboxPictureSource); 
            lightboxCurrentImg.setAttribute("src", newLightboxPictureSource);
            console.log("lightboxCurrentImg", lightboxCurrentImg);
        } else {
            const newlightboxSlideVideo = newLightboxSlideIndex.video;
            console.log("newlightboxSlideVideo", newlightboxSlideVideo); 
            const newLightboxMediaSource = `../assets/sample/${newlightboxSlideVideo}`;
            console.log("newLightboxMediaSource", newLightboxMediaSource);
            lightboxCurrentVideo.setAttribute("src", newLightboxMediaSource);
            console.log("lightboxCurrentVideo", lightboxCurrentVideo);
        }

        const newlightboxSlideTitle = newLightboxSlideIndex.title;
        console.log("newlightboxSlideTitle", newlightboxSlideTitle);



        //lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");



        lightboxCurrentCaption.textContent = newlightboxSlideTitle;     
    };

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