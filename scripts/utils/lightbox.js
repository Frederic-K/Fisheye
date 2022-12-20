
let currentIndex = "";

const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentVideo = document.getElementsByClassName("lightbox__modal--cardVideo")[0];
const lightboxCurrentCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function displayLightbox(data) {

    //currentIndex = "";

    console.log("lightboxData", data);

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
        lightboxCurrentVideo.setAttribute("controls", "");
        lightboxCurrentVideo.classList.remove("hidden");
    }

    // Alternative : récupérer le titre à partir du "alt=" de l'img
    const lightboxCurrentImgTitleSource = data.parentElement.parentElement.getElementsByClassName("mediaCard__caption--title")[0];

    lightboxCurrentCaption.textContent = lightboxCurrentImgTitleSource.textContent;

    ///////////////////////////////////////////////////////////

    // Move slide event

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

    // Keybord (https://www.toptal.com/developers/keycode/table-of-all-keycodes)

    document.addEventListener("keydown", keybordNav);

    function keybordNav(e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Escape") {
            e.stopPropagation();
            e.preventDefault();

            if (e.key === "ArrowRight") {
                moveLightboxSlide(1);
                currentIndex = currentIndex + 1;
                console.log("newCurrentIndex2", currentIndex);
            }
            else if (e.key === "ArrowLeft") {
                moveLightboxSlide(-1);
                currentIndex = currentIndex - 1;
                console.log("newCurrentIndex1", currentIndex);
            }
            else if (e.key === "Escape") {
                closeLightbox();
            }
        } else {
            return (console.log("Unknow keybord key"));
        };
    };
    
    // TODO : remettre à zéro le compteur "currentIndex"

    // Move slide function   
    
    function moveLightboxSlide(direction) {
        console.log("direction", direction);

        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlide = mediaArray[currentIndex + direction];
        
        console.log("mediaArray", mediaArray);    
        console.log("newLightboxSlide", newLightboxSlide); 

        console.log("MediaArrayLengh", mediaArray.length);

        if (newLightboxSlide.image) { 

            console.log("img");

            lightboxCurrentVideo.classList.add("hidden");
            
            const newlightboxSlidePicture = newLightboxSlide.image;
            console.log("newlightboxSlidePicture", newlightboxSlidePicture); 
    
            const newlightboxSlideTitle = newLightboxSlide.title;
    
            console.log("newlightboxSlideTitle", newlightboxSlideTitle);
    
            const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;
            console.log("newLightboxSlideSource", newLightboxSlideSource);
    
            //lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
    
            lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
            console.log("lightboxCurrentImg", lightboxCurrentImg);
    
            lightboxCurrentCaption.textContent = newlightboxSlideTitle;

            lightboxCurrentImg.classList.remove("hidden");

        } else if (newLightboxSlide.video) {

            console.log("vid");

            lightboxCurrentImg.classList.add("hidden");

            const newlightboxSlideVideo = newLightboxSlide.video;
            console.log("newlightboxSlideVideo", newlightboxSlideVideo); 

            const newlightboxSlideTitle = newLightboxSlide.title;    
            console.log("newlightboxSlideTitle", newlightboxSlideTitle);
    
            const newLightboxSlideSource = `../assets/sample/${newlightboxSlideVideo}`;
            console.log("newLightboxSlideSource", newLightboxSlideSource);

            //lightboxCurrentVideo.removeAttribute("src", "alt", "aria-label");

            lightboxCurrentVideo.setAttribute("src", newLightboxSlideSource);
            console.log("lightboxCurrentVideo", lightboxCurrentVideo);

            lightboxCurrentVideo.setAttribute("controls", "");

            lightboxCurrentVideo.classList.remove("hidden");

        } else {
            console.log("Error media file type");
        }

        if (currentIndex >= mediaArray.length - 2) {
            lightboxNextMedia.classList.add("hidden");
            
        } else {
            lightboxNextMedia.classList.remove("hidden");
        } 
        if (currentIndex === 0) {
            lightboxPrevMedia.classList.add("hidden");
        } else {
            lightboxPrevMedia.classList.remove("hidden");
        }
    };

    lightboxEscBtn.addEventListener("click", () => {
        closeLightbox();  
    });

    // Close  lightbox

    function closeLightbox() {
        lightboxBg.classList.add("hidden");
        lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
        lightboxCurrentVideo.removeAttribute("src", "alt", "aria-label");
        lightboxCurrentVideo.classList.add("hidden");
        //currentIndex = ""; 
        console.log("lastCurrentIndex", currentIndex);
    };  
};

/////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////



