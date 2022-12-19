    // Sorter DOM
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
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
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
    sorterDropdownContent.appendChild(dropdownSortByFamous);

    const dropdownSortByDate = document.createElement("li");
    dropdownSortByDate.textContent = "Date";
    sorterDropdownContent.appendChild(dropdownSortByDate);

    const dropdownSortByTitle = document.createElement("li");
    dropdownSortByTitle.textContent = "Titre";
    sorterDropdownContent.appendChild(dropdownSortByTitle);
    
    const dropdownContent = document.getElementsByClassName("dropdown__content")[0];


    // DropdowMenu

sorterDropdownBtn.addEventListener("click", () => dropdownMenu());

function dropdownMenu() {
    //const dropdownContent = document.getElementsByClassName("dropdown__content")[0];
    dropdownContent.classList.toggle("hidden");
    //sorterDropdownBtnIcon.classList.toggle("arrow-animation-down");
    sorterDropdownBtnIcon.classList.toggle("arrow-animation-up");
};

/*dropdownSortByFamous.addEventListener("click", () => {
    dropdownMenu();
    sorterDropdownBtn.textContent = "Popularité";
});*/

dropdownSortByDate.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByDate.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    //mediaArray.sort((a, b) => a.likes - b.likes);
    //console.log("mediaArraySortByLikes", mediaArray);
    sortMedias(e.target);
    console.log("e.target.date", e.target);
});

dropdownSortByTitle.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sortMedias(e.target);
});

dropdownSortByFamous.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sortMedias(e.target);
});

// Sort Media

let objMediaArray = localStorage.getItem("mediaArray");
let photographerMediaArray = JSON.parse(objMediaArray);
console.log("TITI", photographerMediaArray);

/*photographerMediaArray.sort((a, b) => a.likes - b.likes);
console.log("ByLikes", photographerMediaArray);*/

/*photographerMediaArray.sort((a, b) => a.title - b.title);
console.log("ByTitle", photographerMediaArray);*/

/*photographerMediaArray.sort((a, b) => a.date - b.date);
console.log("ByDate", photographerMediaArray);*/

const photographerMedia = document.getElementsByClassName("photographer__media")[0];

function valueCompare (a, b) {
    return a - b;
};

function sortMedias(data) {
    const cards = document.querySelectorAll(".mediaCard");

    // si date n'est pas parsed par Date.parse(2011-08-11) alors :
    /*const mediaDatesArray = Array.from(cards).map(d => parseInt(d.getAttribute("date"), 10));
    console.log("mediaDatesArray", mediaDatesArray);*/

    const mediaDatesArray = Array.from(cards).map(d => d.getAttribute("date"));
    console.log("mediaDatesArray", mediaDatesArray);

    const mediaTitlesArray = Array.from(cards).map(d => d.textContent);
    console.log("mediaTitlesArray", mediaTitlesArray);

    /*const mediaLikesArray = Array.from(cards).map(d => parseInt(d.getAttribute("likes"), 10));
    console.log("mediaLikesArray", mediaLikesArray);*/

    const mediaLikesArray = Array.from(cards).map(d => d.getAttribute("likes"));
    console.log("mediaLikesArray", mediaLikesArray);

    selectedSorter = data.textContent;
    console.log("selectedSorter", selectedSorter);

    if (selectedSorter === "Date") {
        mediaDatesArraySorted = mediaDatesArray.sort(valueCompare);
        console.log("mediaDatesArraySorted", mediaDatesArraySorted);
        
        /*for (let i of mediaDatesArraySorted) {
            cards.forEach(d => {
                if (parseInt(d.getAttribute("date")) === i) {
                    photographerMedia.appendChild(j);
                }
            })
        }*/
        for (let i of mediaDatesArraySorted) {
            cards.forEach(d => {
                if (d.getAttribute("date") === i) {
                    photographerMedia.appendChild(d);
                }
            })
        }
    } else if (selectedSorter === "Titre") {
        mediaTitlesArraySorted = mediaTitlesArray.sort();
        console.log("mediaTitlesArraySorted", mediaTitlesArraySorted);

        for (let i of mediaTitlesArraySorted) {
            cards.forEach(j => {
                if (j.textContent === i)
                photographerMedia.appendChild(j);
            })
        }
    } else if (selectedSorter === "Popularité") {
        mediaLikesArraySorted = mediaLikesArray.sort(valueCompare);
        console.log("mediaLikesArraySorted", mediaLikesArraySorted);

        for (let i of mediaLikesArraySorted) {
            cards.forEach(j => {
                if (j.getAttribute("likes") === i) {
                    photographerMedia.appendChild(j);
                }
            })
        }
    }

};