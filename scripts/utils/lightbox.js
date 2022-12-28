
// Var ///////////////////////

let currentIndex = "";
let newIndex = "";

// DOM ///////////////////////

const main = document.getElementById("main");
const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxModal = document.getElementsByClassName("lightbox__modal")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentVideo = document.getElementsByClassName("lightbox__modal--cardVideo")[0];
const lightboxCurrentCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function displayLightbox(data) {

    // Aria ///////////////////////

    lightboxBg.classList.remove("hidden");
    main.setAttribute("aria-hidden", "true");
    lightboxModal.setAttribute("role", "dialog")
    lightboxModal.setAttribute("aria-hidden", "false");
    lightboxModal.setAttribute("aria-modal", "true");
    lightboxModal.setAttribute("aria-controls", "modal");
    lightboxModal.setAttribute("aria-label", "Vue rapprochée du media");

    // Source ///////////////////////

    currentIndex = parseInt(data.getAttribute("data-index"));

    const lightboxMediaSource = data.getAttribute("src");

    const lightboxSlideTitle = data.title;

    // Display file type ///////////////////////

   let isFileType = (data.getAttribute("filetype") === "img");

   if (isFileType) {
        lightboxCurrentVideo.classList.add("hidden");
        lightboxCurrentImg.setAttribute("src", lightboxMediaSource);
        lightboxCurrentImg.setAttribute("alt", lightboxSlideTitle); 
        lightboxCurrentImg.setAttribute("aria-label", lightboxSlideTitle);
        lightboxCurrentImg.setAttribute("data-index", currentIndex);
        lightboxCurrentImg.classList.remove("hidden");
    } else if (!isFileType) {
        lightboxCurrentImg.classList.add("hidden");
        lightboxCurrentVideo.setAttribute("src", lightboxMediaSource);
        lightboxCurrentVideo.setAttribute("alt", lightboxSlideTitle); 
        lightboxCurrentVideo.setAttribute("aria-label", lightboxSlideTitle);  
        lightboxCurrentVideo.setAttribute("controls", "");
        lightboxCurrentVideo.setAttribute("data-index", currentIndex);
        lightboxCurrentVideo.classList.remove("hidden");
    }

    // Caption ///////////////////////

    const lightboxCurrentTitleSource = data.parentElement.parentElement.getElementsByClassName("mediaCard__caption--title")[0];
    lightboxCurrentCaption.textContent = lightboxCurrentTitleSource.textContent;
};

// Move slide event ///////////////////////

lightboxPrevMedia.addEventListener("click", (e) => {
    e.preventDefault();
    moveLightboxSlide(-1);
});

lightboxNextMedia.addEventListener("click", (e) => {
    e.preventDefault();
    moveLightboxSlide(1);;
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

    newIndex = currentIndex + direction;

    currentIndex = newIndex;
    
    const mediaCardsNodeList4Lightbox = document.querySelectorAll(".media");
    //const mediaCardsNodeList4LightboxArray = Array.prototype.slice.call(mediaCardsNodeList4Lightbox);
    const mediaCardsNodeList4LightboxArray = Array.from(mediaCardsNodeList4Lightbox);

    const newLightboxSlide = mediaCardsNodeList4LightboxArray[currentIndex];

    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox
    //if (newIndex > mediaCardsNodeList4LightboxArray.length) {currentIndex = 0};
    //if (newIndex < 1) {currentIndex = mediaCardsNodeList4LightboxArray.length};

    let isFileType = (newLightboxSlide.getAttribute("filetype") === "img");

    if (isFileType) { 
        lightboxCurrentImg.classList.remove("hidden");
        lightboxCurrentVideo.classList.add("hidden");             
        lightboxCurrentCaption.textContent = newLightboxSlide.title;    
        lightboxCurrentImg.setAttribute("src", newLightboxSlide.src);
        lightboxCurrentImg.setAttribute("alt", newLightboxSlide.title); 
        lightboxCurrentImg.setAttribute("aria-label", newLightboxSlide.title);   
    } 
    else if (!isFileType) {
        lightboxCurrentVideo.classList.remove("hidden");
        lightboxCurrentImg.classList.add("hidden");      
        lightboxCurrentVideo.setAttribute("src", newLightboxSlide.src);
        lightboxCurrentCaption.textContent = newLightboxSlide.title;
        lightboxCurrentVideo.setAttribute("alt", newLightboxSlide.title); 
        lightboxCurrentVideo.setAttribute("aria-label", newLightboxSlide.title);  
        lightboxCurrentVideo.setAttribute("controls", "");

    } else {
        console.log("Error media file type");
    }
};

// Close  lightbox ///////////////////////
    
lightboxEscBtn.addEventListener("click", () => {
    closeLightbox();  
});

function closeLightbox() {
    lightboxBg.classList.add("hidden");
    lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
    lightboxCurrentVideo.removeAttribute("src", "alt", "aria-label");
    lightboxCurrentVideo.classList.add("hidden");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    currentIndex = ""; 
    newIndex = "";
}; 



