// Media

function getPhotographerMediaDOM(data) {
    const {id, photographerId, title, image, video, likes, date, price} = data

    const picture = `../assets/sample/${image}`;
    const movie = `../assets/sample/${video}`;
    const mediaTitle = `Le titre du media est ${title}`;

    const totalLike = document.getElementsByClassName("likeNumber")[0].textContent;
    const TITI = parseInt(totalLike);
    let SumLike = TITI + likes;
    document.getElementsByClassName("likeNumber")[0].textContent = SumLike;
    console.log("SumLike", SumLike);

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

    // Caption like

    const mediaCardLikeBtn = document.createElement("p");
    mediaCardLikeBtn.classList.add("mediaCard__caption--likes");
    mediaCardLikeBtn.setAttribute("aria-label", `Likes`);
    mediaCardLikeBtn.textContent = likes;

    // Indent

    mediaCard.appendChild(mediaCardSample);
    mediaCard.appendChild(mediaCardCaption);
    mediaCardCaption.appendChild(mediaCardTitle);
    mediaCardCaption.appendChild(mediaCardLikeBtn);

    return (mediaCard);
};

