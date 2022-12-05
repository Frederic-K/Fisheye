// Media

// Check media file type
/*function getPhotographerMediaFileType(image, video) {
    const {image, video} = getPhotographersData();
    if (image) {
        return "picture"
    } else if (video) {
        return "movie"
    } else {
        return console.log("Le type de media n'est pas reconnu")
    }
}; 

function setPhotographerMediaType() {
    const name = getPhotographersData();
    console.log("name2", name);

    const fileType = getPhotographerMediaFileType();
    console.log("fileType", fileType);

    if (fileType === picture) {
        const mediaCardImg = document.createElement("img");
        mediaCardImg.classList.add("mediaCard__sample--img");
        mediaCardImg.setAttribute("src", `../assets/photographer_media/${name}/${image}`);
    } else if (fileType === movie) {
        const mediaCardVideo = document.createElement("video");
        mediaCardVideo.classList.add("mediaCard__sample--video");
        mediaCardVideo.setAttribute("src", `../assets/photographer_media/${name}/${video}`);
        mediaCardVideo.setAttribute("autoplay", "");
        mediaCardVideo.setAttribute("controls", "");
    } else {
        return console.log("Le type de media n'est pas reconnu")
    }
};*/

/*function setPhotographerMediaType(data) {
    const { image, video } = data;
    console.log("getPhotographersData2", )
    if (image) {
        const mediaCardImg = document.createElement("img");
        mediaCardImg.classList.add("mediaCard__sample--img");
        mediaCardImg.setAttribute("src", `../assets/photographer_media/${name}/${image}`);
    } else if (video) {
        const mediaCardVideo = document.createElement("video");
        mediaCardVideo.classList.add("mediaCard__sample--video");
        mediaCardVideo.setAttribute("src", `../assets/photographer_media/${name}/${video}`);
        mediaCardVideo.setAttribute("autoplay", "");
        mediaCardVideo.setAttribute("controls", "");
    } else {
        return console.log("Le type de media n'est pas reconnu")
    }
};*/


function getPhotographerMediaDOM(data) {
    const {id, photographerId, title, image, video, likes, date, price} = data;
    console.log("photographerMediaData", data);

    //const mediaFileType = setPhotographerMediaType();

    const picture = `../assets/sample/${image}`;
    const mediaTitle = `Le titre du media est ${title}`;


    // Photographer media card

    const mediaCard = document.createElement("article"); 
    mediaCard.classList.add("mediaCard");
    mediaCard.setAttribute("arial-label", mediaTitle);

    // Picture

    const mediaCardSample = document.createElement("div");
    mediaCardSample.classList.add("mediaCard__sample");

    const mediaCardImg = document.createElement("img");
    mediaCardImg.classList.add("mediaCard__sample--img");
    mediaCardImg.setAttribute("src", picture);

    const mediaCardVideo = document.createElement("video");
    mediaCardVideo.classList.add("mediaCard__sample--video");
    mediaCardVideo.setAttribute("src", picture);
    mediaCardVideo.setAttribute("autoplay", "");
    mediaCardVideo.setAttribute("controls", "");

    // Caption

    const mediaCardCaption = document.createElement("div");
    mediaCardCaption.classList.add("mediaCard__caption");

    // Caption title

    const mediaCardTitle = document.createElement("h3");
    mediaCardTitle.classList.add("mediaCard__caption--title");
    mediaCardTitle.setAttribute("arial-label", mediaTitle);
    mediaCardTitle.textContent = title;

    // Caption like

    const mediaCardLikeBtn = document.createElement("p");
    mediaCardLikeBtn.classList.add("mediaCard__caption--likes");
    mediaCardLikeBtn.setAttribute("arial-label", `Likes`);
    mediaCardLikeBtn.textContent = likes;

    // Indent

    mediaCard.appendChild(mediaCardSample);
    mediaCardSample.appendChild(mediaCardImg);
    //mediaCardSample.appendChild(mediaCardVideo);
    //mediaCardSample.appendChild(mediaFileType);
    mediaCard.appendChild(mediaCardCaption);
    mediaCardCaption.appendChild(mediaCardTitle);
    mediaCardCaption.appendChild(mediaCardLikeBtn);

    return (mediaCard);
};