
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
    sorterDropdownContent.appendChild(dropdownSortByFamous);

    const dropdownSortByDate = document.createElement("li");
    dropdownSortByDate.textContent = "Date";
    sorterDropdownContent.appendChild(dropdownSortByDate);

    const dropdownSortByTitle = document.createElement("li");
    dropdownSortByTitle.textContent = "Titre";
    sorterDropdownContent.appendChild(dropdownSortByTitle);
    
    const dropdownContent = document.getElementsByClassName("dropdown__content")[0];

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

dropdownSortByDate.addEventListener("click", () => {
    dropdownMenu();
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByDate.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
});

dropdownSortByTitle.addEventListener("click", () => {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
});

dropdownSortByFamous.addEventListener("click", () => {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
});


