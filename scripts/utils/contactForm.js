
function displayModal() {

    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    modal.setAttribute("role", "dialog")
    modal.setAttribute("aria-hidden", "false");
    
    // TODE revoir le aria-describedby : 
    //modal.setAttribute("aria-describedby", "modalHeaderTitle");

    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");

    const contactModalBg = document.getElementsByClassName("contact__modal--bg")[0];
    contactModalBg.style.display = "block";
    modal.appendChild(contactModalBg);

    const name = document.getElementsByClassName("header__photographerPage--name")[0].textContent;
    console.log("modal name", name);

    const modalHeaderTitle = document.getElementsByClassName("modal__header--title")[0];
    modalHeaderTitle.textContent = `Contactez-moi ${name}`;

    const modalHeaderImgESC = document.getElementsByClassName("modal__header--imgESC")[0];
    modalHeaderImgESC.setAttribute("alt", "Bouton de fermeture du formulaire de contact");
    modalHeaderImgESC.setAttribute("aria-label", "Bouton de fermeture du formulaire de contact")
    modalHeaderImgESC.setAttribute("tabindex", "6");
    modalHeaderImgESC.addEventListener("click", () => closeModal());

    const modalFormContainer = document.getElementsByClassName("modal__form--container")[0];

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

    //document.getElementById("firstname").focus();
};

function closeModal() {
    const main = document.getElementById("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
};


