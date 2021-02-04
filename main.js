const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];
let pw = document.querySelector('#password')
let confirmpassword = document.querySelector('#comfirm-password')
let para = document.querySelector('#paragraph')
console.log(pw, confirmpassword, para)
    // pour que les deux mots de passe soient identique, je me pose le question: quand le'utilisateur tape le mots de passe dans confirmation mot de passe, la valeur de ce champ doit être la même que celle de mots de passe
document.querySelector("#comfirm-password").addEventListener("input", (event) => {
    if (document.querySelector("#password").value !== event.currentTarget.value) {
        event.currentTarget.setCustomValidity("les deux mots de passe doivent être identiques.")
    } else {
        event.currentTarget.setCustomValidity("");
    }
})



pw.addEventListener("keydown", (loo) => {
    let myline = loo.currentTarget.value.length;
    if (myline <= 5) {
        para.textContent = 'trés faible';
        para.style.color = 'red';
    } else if (myline <= 8) {
        para.textContent = 'fiable';
        para.style.color = 'blue';

    } else if (myline <= 12) {
        para.textContent = 'bonne';
        para.style.color = 'green';
    }
})