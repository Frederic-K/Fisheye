function photographerFactory(data) {
    const { portrait, name, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = "#";

    function getUserCardDOM() {

        const photographerArticleCard = document.createElement("article");
        photographerArticleCard.classList.add("photographer__article");
        
        const photographerLink = document.createElement("a");
        photographerLink.classList.add("photographer__article--link");
        photographerLink.setAttribute("href", link);

        const photographerImgLinkCard = document.createElement("div");
        photographerImgLinkCard.classList.add("photographer__article--linkImg")

        const photographerImgCard = document.createElement("img");
        photographerImgCard.classList.add("photographer__article--img");
        photographerImgCard.setAttribute("src", picture);

        const photographerNameCard = document.createElement("h2");
        photographerNameCard.classList.add("photographer__article--linkTitle");
        photographerNameCard.textContent = name;
        
        const photographerArticleCaption = document.createElement("div");
        photographerArticleCaption.classList.add("photographer__article--caption");

        const photographerlocation = document.createElement("div");
        photographerlocation.classList.add("photographer__article--captionLocation");

        const photographerlocationCity = document.createElement("p");
        photographerlocationCity.classList.add("photographer__article--captionCity");
        photographerlocationCity.textContent = city;

        const photographerlocationCountry = document.createElement("p");
        photographerlocationCountry.classList.add("photographer__article--captionCountry");
        photographerlocationCountry.textContent = country;

        const photographTagLine = document.createElement("p");
        photographTagLine.classList.add("photographer__article--captionTagLine");
        photographTagLine.textContent = tagline;

        const photographerPrice = document.createElement("p");
        photographerPrice.classList.add("photographer__article--captionPrice");
        photographerPrice.textContent = price;

        photographerArticleCard.appendChild(photographerLink);
        photographerLink.appendChild(photographerImgLinkCard)
        photographerImgLinkCard.appendChild(photographerImgCard);
        photographerLink.appendChild(photographerNameCard);
        photographerArticleCard.appendChild(photographerArticleCaption)
        photographerArticleCaption.appendChild(photographerlocation);
        photographerlocation.appendChild(photographerlocationCity);
        photographerlocation.appendChild(photographerlocationCountry);
        photographerArticleCaption.appendChild(photographTagLine);
        photographerArticleCaption.appendChild(photographerPrice);

        return (photographerArticleCard);
    }
    return { picture, name, getUserCardDOM }
};