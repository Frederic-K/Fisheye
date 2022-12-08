// Media

function getPhotographerMediaDOM(data) {
    const {id, photographerId, title, image, video, likes, date, price} = data

    const picture = `../assets/sample/${image}`;
    const movie = `../assets/sample/${video}`;
    const mediaTitle = `Le titre du media est ${title}`;

    // Photographer media card

    const mediaCard = document.createElement("article"); 
    mediaCard.classList.add("mediaCard");
    mediaCard.setAttribute("aria-label", mediaTitle);

    // Picture - video

    const mediaCardSample = document.createElement("div");
    mediaCardSample.classList.add("mediaCard__sample");

    if (image) {
        const mediaCardImg = document.createElement("img");
        mediaCardImg.classList.add("mediaCard__sample--img");
        mediaCardImg.setAttribute("src", picture);
        mediaCardImg.setAttribute("alt", mediaTitle);
        mediaCardSample.appendChild(mediaCardImg);
    } else if (video) {
        const mediaCardVideo = document.createElement("video");
        mediaCardVideo.classList.add("mediaCard__sample--video");
        mediaCardVideo.setAttribute("src", movie);
        //mediaCardVideo.setAttribute("autoplay", "mute");
        mediaCardVideo.setAttribute("controls", "");
        mediaCardSample.appendChild(mediaCardVideo);
    } else {
        console.log("le type de fichier n'est pas reconnu")
    }

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

    const mediaCardLikeBtnEmptyHeart = document.createElement("i");
    mediaCardLikeBtnEmptyHeart.classList.add("fa-regular");
    mediaCardLikeBtnEmptyHeart.classList.add("fa-heart");
    mediaCardLikeBtnEmptyHeart.classList.add("empty-heart");

    const mediaCardLikeBtnFullHeart = document.createElement("i");
    mediaCardLikeBtnFullHeart.classList.add("fa-sharp");
    mediaCardLikeBtnFullHeart.classList.add("fa-solid");
    mediaCardLikeBtnFullHeart.classList.add("fa-heart");
    mediaCardLikeBtnFullHeart.classList.add("full-heart");
    


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

    // Get likes from every media

    let photographerLikes = document.getElementsByClassName("photographerPage__insert--SumLikes")[0].textContent;
    const photographerNumbLikes = parseInt(photographerLikes);
    let photographerSumLikes = photographerNumbLikes + likes;
    document.getElementsByClassName("photographerPage__insert--SumLikes")[0].textContent = photographerSumLikes;
    console.log("photographerPage__insert--SumLikes", photographerSumLikes);

    return (mediaCard);
};

