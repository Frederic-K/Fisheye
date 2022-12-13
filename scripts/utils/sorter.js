    
function getSorterDropdownDOM() {    
    const photographerMainPage = document.getElementById("main");

    const sorterDropdown = document.getElementsByClassName("dropdown")[0];
    photographerMainPage.appendChild(sorterDropdown);

    const sorterDropdowTitle = createElement("div");
    sorterDropdowTitle.textContent = "Trier par";
    sorterDropdown.appendChild(sorterDropdowTitle);

    const sorterDropdownBtn = document.createElement("button");
    sorterDropdownBtn.classList.add("dorpdown__button");
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sorterDropdownBtn.textContent = "Popularité";
    sorterDropdown.appendChild(sorterDropdownBtn);

    const sorterDropdownBtnIcon = document.createElement("div");
    sorterDropdownBtnIcon.classList.add("dorpdown__button--icon");
    sorterDropdownBtn.appendChild(sorterDropdownBtnIcon);

    const sorterDropdownIconChevron = document.createElement("i");
    sorterDropdownIconChevron.classList.add("fa-solid", "fa-chevron-up");
    sorterDropdownBtnIcon.appendChild(sorterDropdownBtnIcon);

    const sorterDropdownContent = document.createElement("ul");
    sorterDropdownContent.classList.add("dopdown__content");
    sorterDropdown.appendChild(sorterDropdownContent);

    const dropdownSortByFamous = document.createElement("li");
    dropdownSortByFamous.classList.add("sorter__selected");
    dropdownSortByFamous.textContent = "Popularité";
    sorterDropdownContent.appendChild(dropdownSortByFamous);

    const dropdownSortByDate = document.createElement("li");
    dropdownSortByDate.textContent = "Date";
    sorterDropdownContent.appendChild("dropdownSortByDate");

    const dropdownSortByTitle = document.createElement("ul");
    dropdownSortByTitle.textContent = "Titre";
    sorterDropdownContent.appendChild(dropdownSortByTitle);

    console.log(sorterDropdown);

    return (photographerMainPage);
};

getSorterDropdownDOM();



