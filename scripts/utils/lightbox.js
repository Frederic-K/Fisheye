
// Var ///////////////////////

let currentIndex = "";
let newIndex = "";

// DOM ///////////////////////

const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentVideo = document.getElementsByClassName("lightbox__modal--cardVideo")[0];
const lightboxCurrentCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function displayLightbox(data) {

    currentIndex = null;
    console.log("currentIndexWhenOpeningLightbox", currentIndex);
    newIndex = null;
    console.log("newtIndexWhenOpeningLightbox", newIndex);

    lightboxBg.classList.remove("hidden");
    
    currentIndex = parseInt(data.dataset.index);
    //console.log("dataSet", data.dataset.index);
    console.log("currentIndexFromDataSet", currentIndex);

    const lightboxMediaSource = data.src;
    //console.log("lightboxMediaSource", lightboxMediaSource);

    const lightboxMediaClass = data.classList.value;
    //console.log("lightboxMediaClass", lightboxMediaClass);

    const lightboxSlideTitle = data.title;

   if (lightboxMediaClass === "mediaCard__sample--img") {
        //console.log("lightboxMediaClass = image");
        lightboxCurrentVideo.classList.add("hidden");
        lightboxCurrentImg.setAttribute("src", lightboxMediaSource);
        lightboxCurrentImg.setAttribute("alt", lightboxSlideTitle); 
        lightboxCurrentImg.setAttribute("aria-label", lightboxSlideTitle);
        lightboxCurrentImg.classList.remove("hidden");
    } else {
        //console.log("lightboxMediaClass = video");
        lightboxCurrentImg.classList.add("hidden");
        lightboxCurrentVideo.setAttribute("src", lightboxMediaSource);
        lightboxCurrentVideo.setAttribute("alt", lightboxSlideTitle); 
        lightboxCurrentVideo.setAttribute("aria-label", lightboxSlideTitle);  
        lightboxCurrentVideo.setAttribute("controls", "");
        lightboxCurrentVideo.classList.remove("hidden");
    }

    // Alternative : récupérer le titre à partir du "alt=" de l'img
    const lightboxCurrentImgTitleSource = data.parentElement.parentElement.getElementsByClassName("mediaCard__caption--title")[0];

    lightboxCurrentCaption.textContent = lightboxCurrentImgTitleSource.textContent;

    // Move slide event ///////////////////////

    lightboxPrevMedia.addEventListener("click", (e) => {
        moveLightboxSlide(-1);
        console.log("IndexAfterMoveslidePrev", currentIndex);
    });
    
    lightboxNextMedia.addEventListener("click", (e) => {
        moveLightboxSlide(1);
        console.log("IndexAfterMoveslideNext", currentIndex);
    });

    // Keybord ///////////////////////
    // (https://www.toptal.com/developers/keycode/table-of-all-keycodes)

    document.addEventListener("keydown", keybordNav);

    function keybordNav(e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Escape") {
            if (e.key === "ArrowRight") {
                moveLightboxSlide(1);
            }
            else if (e.key === "ArrowLeft") {
                moveLightboxSlide(-1);
            }
            else if (e.key === "Escape") {
                e.preventDefault();
                closeLightbox();
            }
        } else {
            return (console.log("Unknow keybord key"));
        };
    };
    
    // Move slide function ///////////////////////
    
    function moveLightboxSlide(direction) {
        
        console.log("direction", direction);
        console.log("currentIndex", currentIndex);

        newIndex = currentIndex + direction;
        console.log("newIndex", newIndex);

        currentIndex = newIndex;    

        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlide = mediaArray[currentIndex];

        console.log("newLightboxSlide", newLightboxSlide);
                
        //console.log("mediaArray", mediaArray);          
        //console.log("MediaArrayLengh", mediaArray.length);

        if (newLightboxSlide.image) { 
            lightboxCurrentVideo.classList.add("hidden");            
            const newlightboxSlidePicture = newLightboxSlide.image;    
            const newlightboxSlideTitle = newLightboxSlide.title;    
            const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;    
            lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
            lightboxCurrentImg.setAttribute("alt", newlightboxSlideTitle); 
            lightboxCurrentImg.setAttribute("aria-label", newlightboxSlideTitle);    
            lightboxCurrentCaption.textContent = newlightboxSlideTitle;
            lightboxCurrentImg.classList.remove("hidden");
        } else if (newLightboxSlide.video) {
            lightboxCurrentImg.classList.add("hidden");
            const newlightboxSlideVideo = newLightboxSlide.video;
            const newlightboxSlideTitle = newLightboxSlide.title;      
            const newLightboxSlideSource = `../assets/sample/${newlightboxSlideVideo}`;
            lightboxCurrentVideo.setAttribute("src", newLightboxSlideSource);
            lightboxCurrentVideo.setAttribute("alt", newlightboxSlideTitle); 
            lightboxCurrentVideo.setAttribute("aria-label", newlightboxSlideTitle);  
            lightboxCurrentVideo.setAttribute("controls", "");
            lightboxCurrentCaption.textContent = newlightboxSlideTitle;
            lightboxCurrentVideo.classList.remove("hidden");

        } else {
            console.log("Error media file type");
        }

        /*
        https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox
        if (direction > mediaArray.length) {currentIndex = 0};
        if (direction < 1) {currentIndex = mediaArray.length};*/

    };

    lightboxEscBtn.addEventListener("click", () => {
        closeLightbox();  
    });

    // Close  lightbox ///////////////////////

    function closeLightbox() {
        lightboxBg.classList.add("hidden");
        lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
        lightboxCurrentVideo.removeAttribute("src", "alt", "aria-label");
        lightboxCurrentVideo.classList.add("hidden");
        window.location.reload();
        currentIndex = null; 
        newIndex = null;
        console.log("lastCurrentIndexWhenCloseLightbox", currentIndex);
        console.log("lastNewIndexWhenCloseLightbox", newIndex);
    };  
};



