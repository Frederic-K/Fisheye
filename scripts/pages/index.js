/* eslint-disable no-undef */


async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer__section')

  photographers.forEach((photographer) => {
    const photographerCardDOM = getPhotographerCardDOM(photographer)
    photographersSection.appendChild(photographerCardDOM)
  })
};

async function init () {
  const { photographers } = await getPhotographersData()
  displayData(photographers)
};

init()
