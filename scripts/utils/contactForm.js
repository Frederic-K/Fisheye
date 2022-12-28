
function displayModal() {

    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");

    const modalContainer = document.getElementsByClassName("modal")[0];
    modalContainer.setAttribute("role", "dialog")
    modalContainer.setAttribute("aria-hidden", "false");
    modalContainer.setAttribute("aria-modal", "true");
    modalContainer.setAttribute("aria-controls", "modal");
    
    // TODE revoir le aria-describedby : 
    //modal.setAttribute("aria-describedby", "modalHeaderTitle");

    const contactModalBg = document.getElementsByClassName("contact__modal--bg")[0];
    contactModalBg.style.display = "block";
    modal.appendChild(contactModalBg);

    const name = document.getElementsByClassName("header__photographerPage--name")[0].textContent;

    const modalHeaderTitle = document.getElementsByClassName("modal__header--title")[0];
    modalHeaderTitle.textContent = `Contactez-moi ${name}`;

    const modalHeaderImgESC = document.getElementsByClassName("modal__header--imgESC")[0];
    modalHeaderImgESC.addEventListener("click", () => closeModal());

    const modalFormInputPrenom = document.getElementById("firstname");
    const modalFormInputNom = document.getElementById("name");
    const modalFormInputEmail = document.getElementById("email");
    const modalFormInputMsg = document.getElementById("message");
    const modalFormSendBtn = document.getElementsByClassName("modal__form--sendBtn")[0];

    modalFormSendBtn.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(modalFormInputPrenom.value);
        console.log(modalFormInputNom.value);
        console.log(modalFormInputEmail.value);
        console.log(modalFormInputMsg.value);
        closeModal();
    });

   // Trap focus ///////////////////////

    // https://gist.github.com/myogeshchavan97/d50d42aa9205573b811587d57c2e58a6

    const firstFocusableElement = document.getElementById("firstname");
    const lastFocusableElement = document.getElementsByClassName("modal__form--sendBtn")[0];

    document.addEventListener('keydown', function(e) {

        let isEscPressed = e.key === 'Escape';

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                console.log("K9lastFocusableElement", lastFocusableElement);
                e.preventDefault();
            }
        } else if (document.activeElement === lastFocusableElement) {   // if tab key is pressed // focused has reached to last focusable element then focus first focusable element after pressing tab
            firstFocusableElement.focus(); // add focus for the first focusable element
            console.log("K9firstFocusableElement", firstFocusableElement);
            e.preventDefault();
        }           
        if (isEscPressed) {
            e.preventDefault();
            closeModal();
        }
    });

    firstFocusableElement.focus();
    console.log("FinalfirstFocusableElement", firstFocusableElement); 
};

// Fermeture de la modal ///////////////////////

function closeModal() {
    const main = document.getElementById("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    const modalContainer = document.getElementsByClassName("modal")[0];
    modalContainer.setAttribute("aria-hidden", "true");
    modalContainer.setAttribute("aria-modal", "false");
    main.setAttribute("aria-hidden", "false");
};

