const dialog = document.querySelector("dialog");
const radio = document.querySelector("form").elements["close"];
const warning = document.querySelector(".warning");

// lignes venant de la documentation mdn mais adaptées pour notre site
dialog.addEventListener("cancel", (e) => {
    if (!e.cancelable) {
        return;
    };
    if (radio.value === "no") {
        warning.hidden = false;
        e.preventDefault();
                            } 
    else {
        warning.hidden = true;
    }
});