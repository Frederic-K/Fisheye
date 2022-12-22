
function displayModal() {

    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

    const modalContainer = document.getElementsByClassName("modal")[0];
    modalContainer.setAttribute("role", "dialog")
    modalContainer.setAttribute("aria-hidden", "false");
    modalContainer.setAttribute("aria-modal", "true");
    modalContainer.setAttribute("aria-controls", "modal");
    
    // TODE revoir le aria-describedby : 
    //modal.setAttribute("aria-describedby", "modalHeaderTitle");

    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");

    const contactModalBg = document.getElementsByClassName("contact__modal--bg")[0];
    contactModalBg.style.display = "block";
    modal.appendChild(contactModalBg);

    const name = document.getElementsByClassName("header__photographerPage--name")[0].textContent;
    //console.log("modal name", name);

    const modalHeaderTitle = document.getElementsByClassName("modal__header--title")[0];
    modalHeaderTitle.textContent = `Contactez-moi ${name}`;

    const modalHeaderImgESC = document.getElementsByClassName("modal__header--imgESC")[0];
    modalHeaderImgESC.setAttribute("alt", "Bouton de fermeture du formulaire de contact");
    modalHeaderImgESC.setAttribute("aria-label", "Bouton de fermeture du formulaire de contact")
    modalHeaderImgESC.setAttribute("tabindex", "");
    modalHeaderImgESC.addEventListener("click", () => closeModal());

    //const modalFormContainer = document.getElementsByClassName("modal__form--container")[0];

    /*const modalFormLabelPrenom = document.createElement("label");
    modalFormLabelPrenom.classList.add("modal__form--label");
    modalFormLabelPrenom.setAttribute("for", "firstname");
    modalFormLabelPrenom.textContent = `Prénom`;
    modalFormContainer.appendChild(modalFormLabelPrenom);*/

    const modalFormInputPrenom = document.getElementById("firstname");
    /*modalFormInputPrenom.classList.add("modal__form--input");
    modalFormInputPrenom.setAttribute("id", "firstname");
    modalFormInputPrenom.setAttribute("type", "text");
    modalFormInputPrenom.setAttribute("aria-label", "Votre prénom");
    modalFormInputPrenom.setAttribute("tabindex", "0");
    modalFormContainer.appendChild(modalFormInputPrenom);*/

    /*const modalFormLabelNom = document.createElement("label");
    modalFormLabelNom.classList.add("modal__form--label");
    modalFormLabelNom.setAttribute("for", "name");
    modalFormLabelNom.textContent = `Nom`;
    modalFormContainer.appendChild(modalFormLabelNom);*/

    const modalFormInputNom = document.getElementById("name");
    /*modalFormInputNom.classList.add("modal__form--input");
    modalFormInputNom.setAttribute("id", "name");
    modalFormInputNom.setAttribute("type", "text");
    modalFormInputNom.setAttribute("aria-label", "Votre nom");
    modalFormInputNom.setAttribute("tabindex", "1");
    modalFormContainer.appendChild(modalFormInputNom);*/

    /*const modalFormLabelEmail = document.createElement("label");
    modalFormLabelEmail.classList.add("modal__form--label");
    modalFormLabelEmail.setAttribute("for", "email");
    modalFormLabelEmail.textContent = `Email`;
    modalFormContainer.appendChild(modalFormLabelEmail);*/

    const modalFormInputEmail = document.getElementById("email");
    /*modalFormInputEmail.classList.add("modal__form--input");
    modalFormInputEmail.setAttribute("type", "email");
    modalFormInputEmail.setAttribute("id", "email");
    modalFormInputEmail.setAttribute("aria-label", "Votre email");
    modalFormInputEmail.setAttribute("tabindex", "2");
    modalFormContainer.appendChild(modalFormInputEmail);*/

    /*const modalFormLabelMsg = document.createElement("label");
    modalFormLabelMsg.classList.add("modal__form--label");
    modalFormLabelMsg.setAttribute("type", "text");
    modalFormLabelMsg.setAttribute("for", "message");
    modalFormLabelMsg.textContent = `Votre message`;
    modalFormContainer.appendChild(modalFormLabelMsg);*/

    const modalFormInputMsg = document.getElementById("message");
    /*modalFormInputMsg.classList.add("modal__form--inputMsg");
    modalFormInputMsg.setAttribute("id", "message");
    modalFormInputMsg.setAttribute("aria-label", "Votre message");
    modalFormInputMsg.setAttribute("tabindex", "3");
    modalFormContainer.appendChild(modalFormInputMsg)*/

    /*const modalForm = document.getElementsByClassName("modal__form")[0];
    const modalFormSendBtn = document.createElement("button");
    modalFormSendBtn.classList.add("modal__form--sendBtn"); 
    modalFormSendBtn.setAttribute("type", "submit");
    modalFormSendBtn.setAttribute("role", "button");
    modalFormSendBtn.setAttribute("aria-label", "Envoyer le formulaire de contact");
    modalFormSendBtn.setAttribute("tabindex", "4");
    modalFormSendBtn.textContent = `Envoyer`;
    modalForm.appendChild(modalFormSendBtn);*/

    modalFormSendBtn = document.getElementsByClassName("modal__form--sendBtn")[0];

    modalFormSendBtn.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(modalFormInputPrenom.value);
        console.log(modalFormInputNom.value);
        console.log(modalFormInputEmail.value);
        console.log(modalFormInputMsg.value);
        closeModal();
    });

    document.addEventListener("keydown", keybordESC)

    function keybordESC(e) {
        if (e.key === "Escape") {
            e.preventDefault();
            closeModal();
        }
    };

    document.getElementById("firstname").focus();

    /////////////////////////////////////////////////////////////////////

    /*const focusableElements = 'input, [tabindex]:not([tabindex="-1"]), img, button';
    console.log("focusableElements", focusableElements);*/

      keepFocus = function (context) {
        //const allFocusableElements = context.querySelectorAll(focusableElements);
        //console.log("allFocusableElements", allFocusableElements)
        //let firstFocusableElement = allFocusableElements[0];
        //console.log("firstFocusableElement", firstFocusableElement);
        //let lastFocusableElement = allFocusableElements[allFocusableElements.length - 1];
        //console.log("lastFocusableElement", lastFocusableElement);

        /*const firstFocusableElement = document.getElementById("firstname");
        const lastFocusableElement = document.getElementsByClassName("modal__form--sendBtn")[0];

        keyListener = function (event) {
            let keyCode = event.which || event.keyCode; // Get the current keycode
            console.log("keyCode", keyCode);
            // Polyfill to prevent the default behavior of events
            event.preventDefault = event.preventDefault || function () {
                event.returnValue = false;
            };

            // If it is TAB
            if (keyCode === 9) {

                // Move focus to first element that can be tabbed if Shift isn't used
                if (event.target === lastFocusableElement && !event.shiftKey) {
                    event.preventDefault();
                    firstFocusableElement.focus();
                    console.log("K9firstFocusableElement", firstFocusableElement);

                // Move focus to last element that can be tabbed if Shift is used
                } else if (event.target === firstFocusableElement && event.shiftKey) {
                    event.preventDefault();
                    lastFocusableElement.focus();
                    console.log("K9lastFocusableElement", lastFocusableElement);
                }
            }
        };
        
        context.addEventListener('keydown', keyListener, false);
    };
    // Call the function when the part of the page gets focus
    //keepFocus(modal);
    keepFocus(modalContainer);
    //modal.focus();
    modalContainer.focus();*/

    /////////////////////////////////////////////////////////////////////

    // add all the elements inside modal which you want to make focusable
    /*const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modaltest = document.querySelector('#modalContainer'); // select the modal by it's id
    console.log("modaltest", modaltest);

    const firstFocusableElement = modaltest.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    console.log("firstFocusableElement", firstFocusableElement);
    const focusableContent = modaltest.querySelectorAll(focusableElements);
    console.log("focusableContent", focusableContent);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
    console.log("lastFocusableElement", lastFocusableElement);*/

    const firstFocusableElement = document.getElementById("firstname");
    const lastFocusableElement = document.getElementsByClassName("modal__form--sendBtn")[0];


    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab';

            if (!isTabPressed) {
                return;
            }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                console.log("K9lastFocusableElement", lastFocusableElement);
                e.preventDefault();
                }
            } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                console.log("K9firstFocusableElement", firstFocusableElement);
                e.preventDefault();
                }
            }
        });

    firstFocusableElement.focus();
    console.log("FinalfirstFocusableElement", firstFocusableElement); 

    //////////////////////////////////////////////////////////////////////
    }
}

function closeModal() {
    const main = document.getElementById("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    const modalContainer = document.getElementsByClassName("modal")[0];
    modalContainer.setAttribute("aria-hidden", "true");
    modalContainer.setAttribute("aria-modal", "false");
    main.setAttribute("aria-hidden", "false");
};

