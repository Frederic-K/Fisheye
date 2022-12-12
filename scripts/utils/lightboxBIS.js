class Lightbox {

    static init() {
        const sources = document.querySelectorAll('img[src$".jpg"], video[src$".mp4"]')
        console.log("sources", sources)
            .forEach(source => source.addEventListener("click", e => {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('src')
                )
            }))
    }

    /**
     * 
     * @param {string} src URL du media
     */

    constructor (src) {
        const element = this.buildDOM(src)
        document.main.appendChild(element)
    }

    /**
     * @param {string} src URL du media
     * @return {HTMLElement}
     */

    buildDOM (src) {
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
                <img src="${src}" alt="" airia-label="">
            </div>
            <div>
                <i class="fa-solid fa-chevron-right"></i>
            </div>`
        return dom
    }
}

/**
 *     <div id="lightbox__bg" aria-hidden="true">
      <div class="lightbox__modal">
        <img class="lightbox__modal--imgESC" src="assets/icons/close.svg" onclick="closeLightbox()"/>
      </div>
      <div class="lightbox__modal--PrevIconBtn">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="lightbox__modal--imgContainer">
        <img src="" alt="" airia-label="">
      </div>
      <div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
 */

Lightbox.init()