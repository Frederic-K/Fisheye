// Fonction Fetch 
async function getPhotographersData() {
    const photographersData = await fetch("../data/photographers.json")
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

/*async function getPhotographersMediaData() {
    const photographersMediaData = await fetch("../data/media.json")
    .then(function(response) {
        if (response.ok) {
            return response.json()
        }
        else {
            console.log("Une erreur réseau est survenue")
        }
    })
    .then(function(photographersMediaData) {
        return photographersMediaData
    })
    .catch(function(error) {
        console.log("Une erreur est survenue avec l'opération fetch")
    })
    return photographersMediaData
};*/