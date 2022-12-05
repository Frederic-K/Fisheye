// Media

// Check media file type
/*function getPhotographerMediaFileType() {
    const {media} =  getPhotographersData();
    console.log("media3", media);
    if (media === "image") {
        return "picture"
    } else if (media === "video") {
        return "movie"
    } else {
        return console.log("Le type de media n'est pas reconnu")
    }
}; */

//getPhotographerMediaFileType();

/*function setPhotographerMediaType() {
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

/*function setPhotographerMediaType() {
    const { media } = getPhotographersData();
    console.log("media3", media);

    if (media === "image") {
        console.log("image")
    } else if (media === "video") {
        console.log("video")
    } else {
        return console.log("Le type de media n'est pas reconnu")
    }
    return (media);
};
setPhotographerMediaType();*/



function getPhotographerMediaDOM(data) {
    const {id, photographerId, title, image, video, likes, date, price} = data;
    //console.log("title", title);
    console.log("video", video);
    
    //const mediaFileType = setPhotographerMediaType();

    const picture = `../assets/sample/${image}`;
    const movie = `../assets/sample/${video}`;
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
    mediaCardImg.setAttribute("alt", mediaTitle);

    const mediaCardVideo = document.createElement("video");
    mediaCardVideo.classList.add("mediaCard__sample--video");
    mediaCardVideo.setAttribute("src", movie);
    //mediaCardVideo.setAttribute("autoplay", "");
    //mediaCardVideo.setAttribute("controls", "");

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