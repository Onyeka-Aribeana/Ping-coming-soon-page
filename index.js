const email_wrap = document.querySelector(".input-wrapper");
const email_field = document.querySelector(".input-field");
const btn = document.querySelector(".btn");
const warning = document.querySelector(".warning");
const label = document.querySelector(".label");
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

function events(){
    email_field.addEventListener("focus", () => {
        email_wrap.classList.remove("failed");
        email_wrap.classList.add("active");
    });
    email_field.addEventListener("blur", () => {
        if (email_field.value.trim() !== "") {
            email_wrap.classList.remove("failed");
            return;
        }
        email_wrap.classList.remove("active");
    });
}

function formValidation () {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email_field.value.trim() === ""){
        email_wrap.classList.add("failed");
        warning.textContent = `${label.textContent} should not be empty`;
    }
    else if (!regex.test(email_field.value.trim())){
        email_wrap.classList.add("failed");
        warning.textContent = `Please provide a valid email address`
    }
    events();
}

btn.addEventListener("click", formValidation, false);
events();