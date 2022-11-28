function photographerFactory(data) {
    const { portrait, name, city, country } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("photographer__article");

        const img = document.createElement( 'img' );
        img.classList.add("photographer__article--img");
        img.setAttribute("src", picture);

        const photographerArticleCaption = document.createElement( 'div' );
        photographerArticleCaption.classList.add("photographer__article--caption");

        const h2 = document.createElement( 'h2' );
        h2.classList.add("photographer__article--captionTitle");
        h2.textContent = name;

        const photographerlocation = document.createElement('div');
        photographerlocation.classList.add("photographer__article--captionLocation");

        const photographerlocationCity = document.createElement('p');
        photographerlocationCity.classList.add("photographer__article--captionCity");
        photographerlocationCity.textContent = city;

        const photographerlocationCountry = document.createElement('p');
        photographerlocationCountry.classList.add("photographer__article--captionCountry");
        photographerlocationCountry.textContent = country;

        article.appendChild(photographerArticleCaption);
        photographerArticleCaption.appendChild(img);
        photographerArticleCaption.appendChild(h2);
        photographerArticleCaption.appendChild(photographerlocation);
        photographerlocation.appendChild(photographerlocationCity);
        photographerlocation.appendChild(photographerlocationCountry);

        return (article);
    }
    return { picture, name, getUserCardDOM }
};