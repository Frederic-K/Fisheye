
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

    /////////////////////////////////////////////////////////////////////

    // https://gist.github.com/drublic/5899658
    
    /*const focusableElements = 'input, [tabindex]:not([tabindex="-1"]), img, button';
    console.log("focusableElements", focusableElements);*/

      //keepFocus = function (context) {
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



    // Trap focus ///////////////////////

    // https://gist.github.com/myogeshchavan97/d50d42aa9205573b811587d57c2e58a6

    // TODO = comment focus la croix de fermeture de la modal

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

