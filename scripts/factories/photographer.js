function photographerFactory(data) {
    const { portrait, name } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("photographer__article");
        const img = document.createElement( 'img' );
        img.classList.add("photographer__article--img");
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.classList.add("photographer__article--caption")
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { picture, name, getUserCardDOM }
};