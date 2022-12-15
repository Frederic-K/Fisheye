
let currentIndex = "";

const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentVideo = document.getElementsByClassName("lightbox__modal--cardVideo")[0];
const lightboxCurrentCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function displayLightbox(data) {

    currentIndex = "";

    console.log("data", data);

    lightboxBg.classList.remove("hidden");
    
    currentIndex = parseInt(data.dataset.index);
    console.log("dataSet", data.dataset.index);
    console.log("currentIndex", currentIndex);

    const lightboxMediaSource = data.src;
    console.log("lightboxMediaSource", lightboxMediaSource);

    const lightboxMediaClass = data.classList.value;
    console.log("lightboxMediaClass", lightboxMediaClass);

   if (lightboxMediaClass === "mediaCard__sample--img") {
        console.log("lightboxMediaClass = image");
        lightboxCurrentVideo.classList.add("hidden");
        lightboxCurrentImg.setAttribute("src", lightboxMediaSource);
        lightboxCurrentImg.classList.remove("hidden");
    } else {
        console.log("lightboxMediaClass = video");
        lightboxCurrentImg.classList.add("hidden");
        lightboxCurrentVideo.setAttribute("src", lightboxMediaSource);
        lightboxCurrentVideo.classList.remove("hidden");

    }

    //lightboxCurrentImg.setAttribute("src", lightboxMediaSource);

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
    
        // TODO : remettre à zéro le compteur "currentIndex"
    
    function moveLightboxSlide(direction) {
        console.log("direction", direction);

        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlide = mediaArray[currentIndex + direction];

        const {image, video} = newLightboxSlide;

        console.log("mediaArray", mediaArray);    
        console.log("newLightboxSlideIndex", newLightboxSlide); 

        /*let checkNewSlideFileType = newLightboxSlide.includes(image);*/

        if (image) { 

            console.log("img");
            
            const newlightboxSlidePicture = newLightboxSlide.image;
            console.log("newlightboxSlidePicture", newlightboxSlidePicture); 
    
            const newlightboxSlideTitle = newLightboxSlide.title;
    
            console.log("newlightboxSlideTitle", newlightboxSlideTitle);
    
            const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;
            console.log("newLightboxSlideSource", newLightboxSlideSource);
    
            lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
    
            lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
            console.log("lightboxCurrentImg", lightboxCurrentImg);
    
            lightboxCurrentCaption.textContent = newlightboxSlideTitle;

        } else if (video) {

            console.log("vid");

            const newlightboxSlideVideo = newLightboxSlide.video;
            console.log("newlightboxSlideVideo", newlightboxSlideVideo); 

            const newlightboxSlideTitle = newLightboxSlide.title;
    
            console.log("newlightboxSlideTitle", newlightboxSlideTitle);
    
            const newLightboxSlideSource = `../assets/sample/${newlightboxSlideVideo}`;
            console.log("newLightboxSlideSource", newLightboxSlideSource);

            lightboxCurrentVideo.setAttribute("src", newLightboxSlideSource);
            console.log("lightboxCurrentVideo", lightboxCurrentVideo);

            lightboxCurrentVideo.classList.remove("hidden");

        } else {
            console.log("turlututu");
        }
        
        /*const newlightboxSlidePicture = newLightboxSlide.image;
        console.log("newlightboxSlidePicture", newlightboxSlidePicture); 

        const newlightboxSlideTitle = newLightboxSlide.title;

        console.log("newlightboxSlideTitle", newlightboxSlideTitle);

        const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;
        console.log("newLightboxSlideSource", newLightboxSlideSource);

        lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");

        lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
        console.log("lightboxCurrentImg", lightboxCurrentImg);

        lightboxCurrentCaption.textContent = newlightboxSlideTitle;*/

    };
};

lightboxEscBtn.addEventListener("click", () => {
    closeLightbox();

function closeLightbox() {
    lightboxBg.classList.add("hidden");
    lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
    lightboxCurrentVideo.removeAttribute("src", "alt", "aria-label");
    lightboxCurrentVideo.classList.add("hidden");
    currentIndex = ""; 
    console.log("lastCurrentIndex", currentIndex);
};    
});

