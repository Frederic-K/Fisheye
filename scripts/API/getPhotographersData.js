/* eslint-disable no-unused-vars, n/handle-callback-err */

// Fonction Fetch
async function getPhotographersData () {
  const photographersData = await fetch('../data/photographers.json')
    .then(function (response) {
      if (response.ok) {
        return response.json()
      } else {
        console.log('Une erreur est survenue')
      }
    })
    .then(function (photographersData) {
      return photographersData
    })
    .catch(function (error) {
      console.log("Une erreur est survenue avec l'opération fetch")
    })
  return photographersData
};
