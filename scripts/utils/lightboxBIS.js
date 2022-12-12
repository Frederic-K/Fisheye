// https://grafikart.fr/tutoriels/lightbox-javascript-1224

class Lightbox {

    static init() {
        //const links = document.querySelectorAll('img[href$=".jpg"]');
        const links = document.querySelectorAll('img[href]');
        console.log("links", links)
            .forEach(link => link.addEventListener('click', e => 
            {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('href'))
            }))
    }

    /**
     * 
     * @param {string} url du media
     */

    constructor (url) {
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    /**
     * @param {string} url du media
     * @return {HTMLElement}
     */

    buildDOM (url) {
        const dom = document.createElement("div")
        dom.classList.add("lightbox__bg")
        dom.innerHTML = 
            `<div class="lightbox__modal">
                <img class="lightbox__modal--imgESC" src="assets/icons/close.svg" onclick="closeLightbox()"/>
            </div>
            <div class="lightbox__modal--PrevIconBtn">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="lightbox__modal--imgContainer">
                <img href="${url}" src="${url}" alt="" airia-label="">
            </div>
            <div>
                <i class="fa-solid fa-chevron-right"></i>
            </div>`
        return dom
    }
};

Lightbox.init();