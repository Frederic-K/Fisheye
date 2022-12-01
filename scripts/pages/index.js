
// Fonction Fetch 
   async function getPhotographersData() {
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
    };
    
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer__section");

        photographers.forEach((photographer) => {
            const userCardDOM = getPhotographerCardDOM(photographer);
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        const { photographers } = await getPhotographersData();
        displayData(photographers);
    };

    init();




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

   /* async function getPhotographers() {
        const photographersData = await fetch("data/photographers.json")
        .then ((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
               return console.log("Une erreur réseau est survenue");
            }
        })
        .catch(function(error) {
            return console.log("Une erreur est survenue avec l'opération fetch")
        })
        return photographersData
    };*/
