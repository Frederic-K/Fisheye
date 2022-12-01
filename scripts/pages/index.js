    //async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
       /* const photographers = [
            {
                "name": "Mimi Keel",
                "id": 243,
                "city": "London",
                "country": "UK",
                "tagline": "Voir le beau dans le quotidien",
                "price": 400,
                "portrait": "MimiKeel.jpg"
            },
            {
                "name": "Ellie-Rose Wilkens",
                "id": 930,
                "city": "Paris",
                "country": "France",
                "tagline": "Capturer des compositions complexes",
                "price": 250,
                "portrait": "EllieRoseWilkens.jpg"
            },
            {
                "name": "Tracy Galindo",
                "id": 82,
                "city": "Montreal",
                "country": "Canada",
                "tagline": "Photographe freelance",
                "price": 500,
                "portrait": "TracyGalindo.jpg"
            },
        ]*/ 
        /* et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    };*/
    
    /*async function getPhotographers () {
        const photographersData = fetch('data/photographers.json')
        .then(function(response) {
                return response.json()
        })
        /*.then(function(photographersData) {
            return photographersData
        })
        return photographersData
    };*/

    // Fonction Fetch 
   /* async function getPhotographers() {
        const photographersData = await fetch("data/photographers.json")
        .then(function(response) {
            if (response.ok) {
                return response.json()
            }
            else {
                console.log("Une erreur réseau est survenue")
            }
        })
        .then(function(photographersData) {
            return photographersData
        })
        .catch(function(error) {
            console.log("Une erreur est survenue avec l'opération fetch")
        })
        return photographersData
    };*/

    /*async function getPhotographers() {
        const photographersData = await fetch("data/photographers.json")
        if (photographersData) {
            return photographersData.json()
        }
        else {
            return console.log("Une erreur est survenue avec l'opération fetch")
        }
    };*/


    /*async function getPhotographers () {
        const photographersData = fetch('data/photographers.json')
        .then(function(response) {
                return response.json()
        })
        /*.then(function(photographersData) {
            return photographersData
        })
        return photographersData
    };*/

    
    async function getPhotographers() {
        const photographersData = await fetch("data/photographers.json")
        .then ((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("Une erreur réseau est survenue");
            }
        })
        .catch(function(error) {
            console.log("Une erreur est survenue avec l'opération fetch")
        })
        return photographersData
    };

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer__section");

        photographers.forEach((photographer) => {
            const userCardDOM = getPhotographerCardDOM(photographer);
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };

    init();
