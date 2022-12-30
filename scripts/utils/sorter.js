    
    
    // Dropdown DOM ///////////////////////

    const sorterDropdown = document.getElementsByClassName("dropdown")[0];

    const sorterDropdowTitle = document.createElement("div");
    sorterDropdowTitle.classList.add("dropdown__title");
    sorterDropdowTitle.textContent = "Trier par";
    sorterDropdown.appendChild(sorterDropdowTitle);

    const sorterDropdownMenu = document.createElement("div");
    sorterDropdownMenu.classList.add("dropdown__menu");
    sorterDropdown.appendChild(sorterDropdownMenu);

    const sorterDropdownBtn = document.createElement("div");
    sorterDropdownBtn.classList.add("dropdown__button");
    sorterDropdownBtn.setAttribute("role", "button");
    sorterDropdownBtn.setAttribute("aria-haspopup", "listbox");
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sorterDropdownBtn.setAttribute("tabindex", "0");        
    sorterDropdownBtn.textContent = "Popularité";
    sorterDropdownMenu.appendChild(sorterDropdownBtn);  

    const sorterDropdownBtnIcon = document.createElement("div");
    sorterDropdownBtnIcon.classList.add("dropdown__icon");
    sorterDropdown.appendChild(sorterDropdownBtnIcon);

    const sorterDropdownIconChevron = document.createElement("i");
    sorterDropdownIconChevron.classList.add("fa-solid", "fa-chevron-down");
    sorterDropdownBtnIcon.appendChild(sorterDropdownIconChevron);

    const sorterDropdownContent = document.createElement("ul");
    sorterDropdownContent.classList.add("dropdown__content", "hidden");
    sorterDropdownMenu.appendChild(sorterDropdownContent);

    const dropdownSortByFamous = document.createElement("li");
    dropdownSortByFamous.textContent = "Popularité";
    dropdownSortByFamous.classList.add("hidden");
    dropdownSortByFamous.setAttribute("tabindex", "0");
    sorterDropdownContent.appendChild(dropdownSortByFamous);

    const dropdownSortByDate = document.createElement("li");
    dropdownSortByDate.textContent = "Date";
    dropdownSortByDate.setAttribute("tabindex", "0");
    sorterDropdownContent.appendChild(dropdownSortByDate);

    const dropdownSortByTitle = document.createElement("li");
    dropdownSortByTitle.textContent = "Titre";
    dropdownSortByTitle.setAttribute("tabindex", "0");
    sorterDropdownContent.appendChild(dropdownSortByTitle);
    
    const dropdownContent = document.getElementsByClassName("dropdown__content")[0];


    // DropdowMenu ///////////////////////

sorterDropdownBtn.addEventListener("click", () => dropdownMenu());
sorterDropdownBtn.addEventListener("keydown", keyboardDropdowMenu);

function keyboardDropdowMenu(e) {
    if (e.key === "Enter") {
        dropdownMenu();
    } else if (e.key === "Escape") {
        dropdownContent.classList.add("hidden");
    }
};

function dropdownMenu() {
    dropdownContent.classList.toggle("hidden");
    sorterDropdownBtnIcon.classList.toggle("arrow-animation-up");
    let isDropdownContenHidden = dropdownContent.classList.contains("hidden");
    if (!isDropdownContenHidden) {
        sorterDropdownBtn.setAttribute("aria-expanded", "true");
    } else {
        sorterDropdownBtn.setAttribute("aria-expanded", "false");
    };
};

dropdownSortByDate.addEventListener("click", (e) => sorterByDate(e));
dropdownSortByDate.addEventListener("keydown", keyboardSorterByDate);

function keyboardSorterByDate(e) {
    if (e.key === "Enter") {
        sorterByDate(e);
    }
};

function sorterByDate(e) {    
    dropdownMenu();
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByDate.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sortMedias(e.target);
};

/*dropdownSortByDate.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByDate.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sortMedias(e.target);
});*/

dropdownSortByTitle.addEventListener("click", (e) => sorterByTitle(e)); 
dropdownSortByTitle.addEventListener("keydown", keyboardSorterByTitle);

function keyboardSorterByTitle(e) {
    if (e.key === "Enter") {
        sorterByTitle(e);
    }
};

function sorterByTitle(e) {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sortMedias(e.target);
};

dropdownSortByFamous.addEventListener("click", (e) => sorterByFamous(e));
dropdownSortByFamous.addEventListener("keydown", keyboardSorterByFamous);

function keyboardSorterByFamous(e) {
    if (e.key === "Enter") {
        sorterByFamous(e);
}                                   
};

function sorterByFamous(e) {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sortMedias(e.target);
};

// Sort Media ///////////////////////

function valueCompare (a, b) {
    return b - a;
};

function sortMedias(data) {

    const photographerMedia = document.getElementsByClassName("photographer__media")[0];
    const mediaCardsNodeList = document.querySelectorAll(".mediaCard");
    const mediaCardSampleItem = document.querySelectorAll(".media");
    //console.log('mediaCardSampleItem', mediaCardSampleItem);

    // si date n'est pas parsed par Date.parse(2011-08-11) alors :
    /*const mediaDatesArray = Array.from(cards).map(d => parseInt(d.getAttribute("date"), 10));
    console.log("mediaDatesArray", mediaDatesArray);*/

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    const mediaDatesArray = Array.from(mediaCardsNodeList).map(n => n.getAttribute("date"));

    const mediaTitlesArray = Array.from(mediaCardsNodeList).map(n => n.getAttribute("title"));

    // Si la parse est nécessaire
    /*const mediaLikesArray = Array.from(mediaCardsNodeList).map(n => parseInt(n.getAttribute("likes"), 10)); with parseInt, 10 est la base
    console.log("mediaLikesArray", mediaLikesArray);*/

    const mediaLikesArray = Array.from(mediaCardsNodeList).map(n => n.getAttribute("likes"));

    let selectedSorter = data.textContent;

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of

    if (selectedSorter === "Date") {
        mediaDatesArraySorted = mediaDatesArray.sort(valueCompare);
        //console.log("mediaDatesArraySorted", mediaDatesArraySorted);
 
       for (let i = 0; i < mediaDatesArraySorted.length; i++) {
            //console.log('i', i);
            const date = mediaDatesArraySorted[i];
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("date") === date) {
                    card.firstChild.firstChild.setAttribute("data-index", i)
                    photographerMedia.appendChild(card);
                }
            }
        }     
    } else if (selectedSorter === "Titre") {
        mediaTitlesArraySorted = mediaTitlesArray.sort();
        //console.log("mediaTitlesArraySorted", mediaTitlesArraySorted);

        for (let i = 0; i < mediaTitlesArraySorted.length; i++) {
            //console.log('i', i);
            const title = mediaTitlesArraySorted[i];
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("title") === title) {
                    card.firstChild.firstChild.setAttribute("data-index", i)
                    photographerMedia.appendChild(card);
                }
            }
        } 
    } else if (selectedSorter === "Popularité") {
        mediaLikesArraySorted = mediaLikesArray.sort(valueCompare);
        //console.log("mediaLikesArraySorted", mediaLikesArraySorted);

        for (let i = 0; i < mediaLikesArraySorted.length; i++) {
            //console.log('i', i);
            const like = mediaLikesArraySorted[i];
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("likes") === like) {
                    card.firstChild.firstChild.setAttribute("data-index", i)
                    photographerMedia.appendChild(card);
                }
            }
        } 
    }

};