/* eslint-disable no-unused-vars */

// Var ///////////////////////
let currentIndex = ''
let newIndex = ''

// DOM ///////////////////////
const main = document.getElementById('main')
const mediaContainer = document.getElementsByClassName('photographer__media')[0]
const lightboxBg = document.getElementsByClassName('lightbox__bg')[0]
const lightboxModal = document.getElementsByClassName('lightbox__modal')[0]
const lightboxCurrentImg = document.getElementsByClassName('lightbox__modal--cardIMG')[0]
const lightboxCurrentVideo = document.getElementsByClassName('lightbox__modal--cardVideo')[0]
const lightboxCurrentCaption = document.getElementsByClassName('lightbox__modal--caption')[0]
const lightboxEscBtn = document.getElementsByClassName('lightbox__modal--imgESC')[0]
const lightboxPrevMedia = document.getElementsByClassName('lightbox__modal--PrevIconBtn')[0]
const lightboxNextMedia = document.getElementsByClassName('lightbox__modal--NextIconBtn')[0]

function displayLightbox (data) {
  const lightboxMediaSource = data.getAttribute('src')
  const lightboxSlideTitle = data.title
  const mediaCardsNodeList4Lightbox = document.querySelectorAll('.media')
  const mediaCardsNodeList4LightboxArray = Array.from(mediaCardsNodeList4Lightbox)
  currentIndex = parseInt(data.getAttribute('data-index'))

  if (currentIndex === 0) {
    lightboxPrevMedia.classList.add('hidden')
  } else if (currentIndex === mediaCardsNodeList4LightboxArray.length - 1) {
    lightboxNextMedia.classList.add('hidden')
  } else {
    lightboxPrevMedia.classList.remove('hidden')
    lightboxNextMedia.classList.remove('hidden')
  }

  // Display file type ///////////////////////
  const isFileType = (data.getAttribute('filetype') === 'img')
  if (isFileType) {
    lightboxCurrentVideo.classList.add('hidden')
    lightboxCurrentImg.setAttribute('src', lightboxMediaSource)
    lightboxCurrentImg.setAttribute('alt', lightboxSlideTitle)
    lightboxCurrentImg.setAttribute('aria-label', lightboxSlideTitle)
    lightboxCurrentImg.setAttribute('data-index', currentIndex)
    lightboxCurrentImg.classList.remove('hidden')
  } else if (!isFileType) {
    lightboxCurrentImg.classList.add('hidden')
    lightboxCurrentVideo.setAttribute('src', lightboxMediaSource)
    lightboxCurrentVideo.setAttribute('alt', lightboxSlideTitle)
    lightboxCurrentVideo.setAttribute('aria-label', lightboxSlideTitle)
    lightboxCurrentVideo.setAttribute('controls', '')
    lightboxCurrentVideo.setAttribute('data-index', currentIndex)
    lightboxCurrentVideo.classList.remove('hidden')
  }

  lightboxBg.classList.remove('hidden')
  main.setAttribute('aria-hidden', 'true')
  lightboxModal.setAttribute('role', 'dialog')
  lightboxModal.setAttribute('aria-hidden', 'false')
  lightboxModal.setAttribute('aria-modal', 'true')
  lightboxModal.setAttribute('aria-controls', 'modal')
  lightboxModal.setAttribute('aria-label', 'Vue rapprochée du media')

  // Caption ///////////////////////
  const lightboxCurrentTitleSource = data.parentElement.parentElement.getElementsByClassName('mediaCard__caption--title')[0]
  lightboxCurrentCaption.textContent = lightboxCurrentTitleSource.textContent
};

// Move slide event ///////////////////////
lightboxPrevMedia.addEventListener('click', (e) => {
  e.preventDefault()
  moveLightboxSlide(-1)
})

lightboxNextMedia.addEventListener('click', (e) => {
  e.preventDefault()
  moveLightboxSlide(1)
})

// Keybord ///////////////////////
// (https://www.toptal.com/developers/keycode/table-of-all-keycodes)
mediaContainer.addEventListener('keydown', keybordNav)

function keybordNav (e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Escape') {
    if (e.key === 'ArrowRight') {
      moveLightboxSlide(1)
    } else if (e.key === 'ArrowLeft') {
      moveLightboxSlide(-1)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      closeLightbox()
    }
  } else {
    // (console.log("Unknow keybord key"));
  }
};

// Move slide function ///////////////////////
function moveLightboxSlide (direction) {
  newIndex = currentIndex + direction
  currentIndex = newIndex

  const mediaCardsNodeList4Lightbox = document.querySelectorAll('.media')
  const mediaCardsNodeList4LightboxArray = Array.from(mediaCardsNodeList4Lightbox) // Old School : const mediaCardsNodeList4LightboxArray = Array.prototype.slice.call(mediaCardsNodeList4Lightbox);
  const newLightboxSlide = mediaCardsNodeList4LightboxArray[currentIndex]

  const isFileType = (newLightboxSlide.getAttribute('filetype') === 'img')
  if (isFileType) {
    lightboxCurrentImg.classList.remove('hidden')
    lightboxCurrentVideo.classList.add('hidden')
    lightboxCurrentCaption.textContent = newLightboxSlide.title
    lightboxCurrentImg.setAttribute('src', newLightboxSlide.src)
    lightboxCurrentImg.setAttribute('alt', newLightboxSlide.title)
    lightboxCurrentImg.setAttribute('aria-label', newLightboxSlide.title)
  } else if (!isFileType) {
    lightboxCurrentVideo.classList.remove('hidden')
    lightboxCurrentImg.classList.add('hidden')
    lightboxCurrentVideo.setAttribute('src', newLightboxSlide.src)
    lightboxCurrentCaption.textContent = newLightboxSlide.title
    lightboxCurrentVideo.setAttribute('alt', newLightboxSlide.title)
    lightboxCurrentVideo.setAttribute('aria-label', newLightboxSlide.title)
    lightboxCurrentVideo.setAttribute('controls', '')
  } else {
    console.log('Error media file type')
  }

  // Hide arrow start/end ///////////////////////
  if (newIndex === 0) {
    lightboxPrevMedia.classList.add('hidden')
  } else if (newIndex === mediaCardsNodeList4LightboxArray.length - 1) {
    lightboxNextMedia.classList.add('hidden')
  } else {
    lightboxPrevMedia.classList.remove('hidden')
    lightboxNextMedia.classList.remove('hidden')
  }
};

// Close  lightbox ///////////////////////
lightboxEscBtn.addEventListener('click', () => {
  closeLightbox()
})

function closeLightbox () {
  lightboxBg.classList.add('hidden')
  lightboxCurrentImg.removeAttribute('src', 'alt', 'aria-label')
  lightboxCurrentVideo.removeAttribute('src', 'alt', 'aria-label')
  lightboxCurrentVideo.classList.add('hidden')
  lightboxModal.setAttribute('aria-hidden', 'true')
  lightboxModal.setAttribute('aria-modal', 'false')
  const main = document.getElementById('main')
  main.setAttribute('aria-hidden', 'false')
  currentIndex = ''
  newIndex = ''
};
