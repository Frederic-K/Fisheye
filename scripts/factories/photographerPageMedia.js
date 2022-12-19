// Media

function getPhotographerMediaDOM(data, i) {
    const {id, photographerId, title, image, video, likes, date, price} = data
    const index = i

    //localStorage.setItem("dataArray", JSON.stringify(data));
    console.log("PhotographerDOMIndex", index);
    console.log("PhotographerDOMData", data);

    const picture = `../assets/sample/${image}`;
    const movie = `../assets/sample/${video}`;
    const mediaTitle = `Le titre du media est ${title}`;

    // Photographer media card

    const mediaCard = document.createElement("article"); 
    mediaCard.classList.add("mediaCard");
    mediaCard.setAttribute("aria-label", mediaTitle);
    mediaCard.setAttribute("date", Date.parse(date));
    mediaCard.setAttribute("likes", likes);
    mediaCard.setAttribute("title", title);

    // Picture - video

    const mediaCardSample = document.createElement("div");
    mediaCardSample.classList.add("mediaCard__sample");

    function getMediaByFileTypeDOM() {
        if (image) {
            const mediaCardImg = document.createElement("img");
            //const mediaCardImg = document.createElement("a");
            mediaCardImg.classList.add("mediaCard__sample--img");
            //mediaCardImg.setAttribute("id", "testImgSrc");
            mediaCardImg.setAttribute("src", picture);
            mediaCardImg.setAttribute("href", picture);
            mediaCardImg.setAttribute("alt", mediaTitle);
            mediaCardImg.setAttribute("date", Date.parse(date));
            mediaCardImg.setAttribute("likes", likes);
            mediaCardImg.setAttribute("title", title);
            mediaCardImg.setAttribute("data-index", index)
            mediaCardSample.appendChild(mediaCardImg);
        } else if (video) {
            const mediaCardVideo = document.createElement("video");
            mediaCardVideo.classList.add("mediaCard__sample--video");
            mediaCardVideo.setAttribute("src", movie);
            //mediaCardVideo.setAttribute("autoplay", "mute");
            mediaCardVideo.setAttribute("controls", "");
            mediaCardVideo.setAttribute("date", Date.parse(date));
            mediaCardVideo.setAttribute("likes", likes);
            mediaCardVideo.setAttribute("title", title);
            mediaCardSample.appendChild(mediaCardVideo);
        } else {
            console.log("le type de fichier n'est pas reconnu")
        }
    };
    getMediaByFileTypeDOM();

    // Caption

    const mediaCardCaption = document.createElement("div");
    mediaCardCaption.classList.add("mediaCard__caption");

    // Caption title

    const mediaCardTitle = document.createElement("h3");
    mediaCardTitle.classList.add("mediaCard__caption--title");
    mediaCardTitle.setAttribute("aria-label", mediaTitle);
    mediaCardTitle.textContent = title;

    // Caption like container

    const mediaCardLikesContainer = document.createElement("div");
    mediaCardLikesContainer.classList.add("mediaCard__caption--likeContainer");

    // Caption like

    const mediaCardLikes = document.createElement("p");
    mediaCardLikes.classList.add("mediaCard__caption--likes");
    mediaCardLikes.setAttribute("aria-label", `Likes`);
    mediaCardLikes.textContent = likes;

    // Caption like heart button

    const mediaCardLikeBtnContainer = document.createElement("div");
    mediaCardLikeBtnContainer.classList.add("mediaCard__caption--likeBtnContainer");

    const mediaCardLikeBtn = document.createElement("button");
    mediaCardLikeBtn.classList.add("mediaCard__caption--likeBtnIcon");
    mediaCardLikeBtn.setAttribute("type", "button");
    mediaCardLikeBtn.setAttribute("role", "button");

    const mediaCardLikeBtnEmptyHeart = document.createElement("i");
    mediaCardLikeBtnEmptyHeart.classList.add("fa-regular");
    mediaCardLikeBtnEmptyHeart.classList.add("fa-heart");
    mediaCardLikeBtnEmptyHeart.classList.add("empty-heart");

    const mediaCardLikeBtnFullHeart = document.createElement("i");
    mediaCardLikeBtnFullHeart.classList.add("fa-sharp", "fa-solid", "fa-heart", "full-heart", "invisible");
 
    // Get likes from medias

    const photographerLikes = document.getElementsByClassName("photographerPage__insert--SumLikes")[0];
    const photographerTotalNumbLikes = parseInt(photographerLikes.textContent);
    let photographerSumLikes = photographerTotalNumbLikes + likes;
    photographerLikes.textContent = photographerSumLikes;

    // Media likes

    mediaCardLikeBtn.addEventListener("click", function(e) {
        const photographerTotalLikes = document.getElementsByClassName("photographerPage__insert--SumLikes")[0];
        if (likes == mediaCardLikes.textContent) {
            mediaCardLikes.textContent = parseInt(mediaCardLikes.textContent) + 1;
            photographerTotalLikes.textContent = parseInt(photographerTotalLikes.textContent) + 1;
            mediaCardLikeBtnEmptyHeart.classList.add("invisible");
            mediaCardLikeBtnFullHeart.classList.remove("invisible");
        } else {
            mediaCardLikes.textContent = parseInt(mediaCardLikes.textContent) - 1;
            photographerTotalLikes.textContent = parseInt(photographerTotalLikes.textContent) - 1;
            mediaCardLikeBtnEmptyHeart.classList.remove("invisible");
            mediaCardLikeBtnFullHeart.classList.add("invisible");
        }
    });

    // Lightbox launcher 

    mediaCardSample.addEventListener("click", function(e) {
        console.log("target", e.target);
        displayLightbox(e.target);
    } );

    // Indent

    mediaCard.appendChild(mediaCardSample);
    mediaCard.appendChild(mediaCardCaption);
    mediaCardCaption.appendChild(mediaCardTitle);
    mediaCardCaption.appendChild(mediaCardLikesContainer);
    mediaCardLikesContainer.appendChild(mediaCardLikes);    
    mediaCardLikesContainer.appendChild(mediaCardLikeBtnContainer);
    mediaCardLikeBtnContainer.appendChild(mediaCardLikeBtn);
    mediaCardLikeBtn.appendChild(mediaCardLikeBtnEmptyHeart);
    mediaCardLikeBtn.appendChild(mediaCardLikeBtnFullHeart);

    return (mediaCard);
};
