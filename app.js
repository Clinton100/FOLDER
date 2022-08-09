const form = document.querySelector("form");
const nameInput = form.querySelector("[data-name]");
const emailInput = form.querySelector("[data-email]");
const passwordInput = form.querySelector("[data-password]");
const confirmPasswordInput = form.querySelector("[data-confirm-password]");

nameInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  const nameInput = e.target;
  const alphabetRegex = /\w/g;
  const currentValue = nameInput.value.trim();
  if (currentValue.match(alphabetRegex) && currentValue.length >= 5) {
    nameInput.classList.remove("bg-danger");
    nameInput.classList.remove("bg-white");
    nameInput.classList.add("bg-success");
  } else {
    nameInput.classList.remove("bg-white");
    nameInput.classList.remove("bg-sucess");
    nameInput.classList.add("bg-danger");
  }
});

emailInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  const input = e.target;
  const nameLowerRegex = /[a-z]/;
  const atSymbolRegex = /[@]/;
  const currentValue = input.value.trim();
  if (
    currentValue.match(nameLowerRegex) &&
    currentValue.match(atSymbolRegex) &&
    currentValue.includes(".com") &&
    currentValue.length >= 5
  ) {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-white");
    input.classList.add("bg-success");
  } else {
    input.classList.remove("bg-white");
    input.classList.remove("bg-sucess");
    input.classList.add("bg-danger");
  }
});

passwordInput.addEventListener("keyup", (e) => {
  const input = e.target;
  // console.log(e.target.value)

  const alphanumericRegex = /\w/i;
  const whiteSpaceRegex = /\s/;
  const specialCharacterRegex = /\W/;
  const currentValue = input.value.trim();
  if (
    currentValue.match(alphanumericRegex) &&
    currentValue.match(specialCharacterRegex) &&
    !currentValue.match(whiteSpaceRegex) &&
    currentValue.length >= 8
  ) {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-white");
    input.classList.add("bg-success");
  } else if (currentValue === "") {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-success");
    input.classList.add("bg-white");
  } else {
    input.classList.remove("bg-white");
    input.classList.remove("bg-sucess");
    input.classList.add("bg-danger");
  }
});

confirmPasswordInput.addEventListener("keyup", (e) => {
  const input = e.target;
  const password = form.querySelector("[data-password]").value;
  // console.log(e.target.value)

  const alphanumericRegex = /\w/i;
  const whiteSpaceRegex = /\s/;
  const specialCharacterRegex = /\W/;
  const currentValue = input.value.trim();
  if (
    currentValue.match(alphanumericRegex) &&
    currentValue.match(specialCharacterRegex) &&
    !currentValue.match(whiteSpaceRegex) &&
    currentValue.length >= 8 &&
    currentValue === password
  ) {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-white");
    input.classList.add("bg-success");
  } else if (currentValue === "") {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-success");
    input.classList.add("bg-white");
  } else {
    input.classList.remove("bg-white");
    input.classList.remove("bg-sucess");
    input.classList.add("bg-danger");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordInput = form.querySelector("[data-password]");
  const confirmPasswordInput = form.querySelector("[data-confirm-password]");
  const inputs = document.querySelectorAll('input');
  
  
  if (passwordInput.value === confirmPasswordInput.value) {
    location.href = `./success.html`;
  } else {
    location.href = `./failed.html`;
  }
  
    inputs.forEach(input => input.value ='')

});
