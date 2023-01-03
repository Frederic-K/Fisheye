
// Header

function getPhotographerPageDOM (data) {
  const { name, id, city, country, tagline, price, portrait } = data
  // console.log("photographerPageData", data);
  // console.log("name", name);

  const picture = `../assets/photographers/${portrait}`

  const photographerProfilePicture = `Photo du profil du photographe ${name}`
  const location = `${city}, ${country}`
  const photographerHome = `Lieu de résidence du photographe ${city}, ${country}`
  const photographerMessage = `Message du photographe ${name}`
  const photographerContactMsg = `Cliquer pour contacter ${name}`
  const pricePerDay = `${price} €/jour`
  const photographerPricePerDay = `Tarif journalier en euro du photographe ${name}`

  // Photographer page main ///////////////////////
  const photographerageMain = document.getElementById('main')

  // Photographer page ///////////////////////
  const photographerPage = document.createElement('section')
  photographerPage.classList.add('photgrapherPage')

  // Photographer header ///////////////////////
  const photographerPageHeader = document.createElement('section')
  photographerPageHeader.classList.add('header__photographerPage')

  // Photographer header info ///////////////////////
  const photographerInformations = document.createElement('article')
  photographerInformations.classList.add('header__photographerPage--info')

  // Photographer name ///////////////////////
  const photographerName = document.createElement('h1')
  photographerName.classList.add('header__photographerPage--name')
  photographerName.setAttribute('aria-label', name)
  photographerName.textContent = name

  // Photographer location ///////////////////////
  const photographerLocation = document.createElement('p')
  photographerLocation.classList.add('header__photographerPage--location')
  photographerLocation.setAttribute('aria-label', photographerHome)
  photographerLocation.textContent = location

  // Photographer tagline ///////////////////////
  const photographerTagline = document.createElement('p')
  photographerTagline.classList.add('header__photographerPage--tagline')
  photographerTagline.setAttribute('aria-label', photographerMessage)
  photographerTagline.textContent = tagline

  // Photographer contact ///////////////////////
  const photographerContactBtn = document.createElement('button')
  photographerContactBtn.classList.add('header__photographerPage--contactBtn')
  photographerContactBtn.setAttribute('id', 'contactBtn')
  photographerContactBtn.setAttribute('type', 'button')
  photographerContactBtn.setAttribute('role', 'button')
  photographerContactBtn.setAttribute('aria-label', photographerContactMsg)
  photographerContactBtn.setAttribute('aria-haspopup', 'dialog')
  photographerContactBtn.setAttribute('aria-controls', 'dialog')
  photographerContactBtn.textContent = 'Contactez-moi'
  photographerContactBtn.setAttribute('onclick', 'displayModal()')

  // Photographer Img header ///////////////////////
  const photographerImgHeader = document.createElement('div')
  photographerImgHeader.classList.add('header__photographerPage--img')

  // Photographe portrait ///////////////////////
  const photographerPortrait = document.createElement('img')
  photographerPortrait.classList.add('header__photographerPage--imgProfile')
  photographerPortrait.setAttribute('src', picture)
  photographerPortrait.setAttribute('alt', photographerProfilePicture)
  // photographerPortrait.setAttribute("aria-label", photographerProfilePicture);

  // Insert : total likes nd price/day ///////////////////////

  // Insert container

  const photographerInsertContainer = document.createElement('aside')
  photographerInsertContainer.classList.add('photographerPage__aside')

  // Insert

  const photographerInsert = document.createElement('div')
  photographerInsert.classList.add('photographerPage__insert')

  // Insert likes total

  const photographerLikesContainer = document.createElement('div')
  photographerLikesContainer.classList.add('photographerPage__insert--LikesContainer')

  const photographerTotalLikes = document.getElementsByClassName('photographerPage__insert--SumLikes')[0]
  photographerTotalLikes.setAttribute('aria-label', 'Total des like')

  // Insert likes icon

  const photographerFullHeart = document.createElement('div')
  photographerFullHeart.classList.add('photographerPage__insert--icon')
  photographerFullHeart.innerHTML = '<i class="fa-solid fa-heart" aria-hidden="true"></i>'

  // Insert Price

  const photographerPrice = document.createElement('div')
  photographerPrice.classList.add('photographerPage__insert--price')
  photographerPrice.setAttribute('arial-label', photographerPricePerDay)
  photographerPrice.textContent = pricePerDay

  // indent ///////////////////////

  photographerPage.appendChild(photographerPageHeader)
  photographerPageHeader.appendChild(photographerInformations)
  photographerInformations.appendChild(photographerName)
  photographerInformations.appendChild(photographerLocation)
  photographerInformations.appendChild(photographerTagline)
  photographerPageHeader.appendChild(photographerContactBtn)
  photographerPageHeader.appendChild(photographerImgHeader)
  photographerImgHeader.appendChild(photographerPortrait)
  photographerageMain.appendChild(photographerInsertContainer)
  photographerInsertContainer.appendChild(photographerInsert)
  photographerInsert.appendChild(photographerLikesContainer)
  photographerLikesContainer.appendChild(photographerTotalLikes)
  photographerLikesContainer.appendChild(photographerFullHeart)
  photographerInsert.appendChild(photographerPrice)

  // document.getElementById("contactBtn").focus();

  return (photographerPage)
};
