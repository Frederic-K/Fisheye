    
async function sorterDropdownDOM() {    
    const photographerMainPage = document.getElementById("main");

    const sorterDropdown = document.getElementsByClassName("dropdown")[0];
    photographerMainPage.appendChild(sorterDropdown);

    const sorterDropdowTitle = document.createElement("div");
    sorterDropdowTitle.textContent = "Trier par";
    sorterDropdown.appendChild(sorterDropdowTitle);

    const sorterDropdownBtn = document.createElement("div");
    sorterDropdownBtn.classList.add("dorpdown__button");
    sorterDropdownBtn.setAttribute("role", "button");
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sorterDropdownBtn.textContent = "Popularité";
    sorterDropdown.appendChild(sorterDropdownBtn);

    const sorterDropdownBtnIcon = document.createElement("div");
    sorterDropdownBtnIcon.classList.add("dorpdown__button--icon");
    sorterDropdownBtn.appendChild(sorterDropdownBtnIcon);

    const sorterDropdownIconChevron = document.createElement("i");
    sorterDropdownIconChevron.classList.add("fa-solid", "fa-chevron-up");
    sorterDropdownBtnIcon.appendChild(sorterDropdownIconChevron);

    const sorterDropdownContent = document.createElement("ul");
    sorterDropdownContent.classList.add("dopdown__content");
    sorterDropdown.appendChild(sorterDropdownContent);

    const dropdownSortByFamous = document.createElement("li");
    dropdownSortByFamous.classList.add("selected");
    dropdownSortByFamous.textContent = "Popularité";
    sorterDropdownContent.appendChild(dropdownSortByFamous);

    const dropdownSortByDate = document.createElement("li");
    dropdownSortByDate.textContent = "Date";
    sorterDropdownContent.appendChild(dropdownSortByDate);

    const dropdownSortByTitle = document.createElement("li");
    dropdownSortByTitle.textContent = "Titre";
    sorterDropdownContent.appendChild(dropdownSortByTitle);

    console.log(photographerMainPage);

    //return (photographerMainPage);
};
sorterDropdownDOM();



