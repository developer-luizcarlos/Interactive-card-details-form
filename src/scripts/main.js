const cardNumbers = Array.from(document.querySelectorAll(".card_number"));
const cardOwner = document.querySelector(".card_informations_name");
const cardMaturityMonth = document.querySelector(".maturity_month");
const cardMaturityYear = document.querySelector(".maturity_year");
const cardCvc = Array.from(document.querySelectorAll(".cvc_element"));

const form = document.querySelector(".form");
const inputName = document.querySelector(".input_name");
const inputCardNumber = document.querySelector(".input_card");
const inputMonth = document.querySelector(".input_month");
const inputYear = document.querySelector(".input_year");
const inputCvc = document.querySelector(".input_cvc");
const errorMsgSmall = Array.from(document.querySelectorAll(".error_msg"));
const btn_submit = document.querySelector(".btn_submit");

function showErrorMsgAndValidty(inputElement, index, method, property) {
  if (!inputElement.value.trim()) {
    errorMsgSmall[index].style.display = "block";
    inputElement.classList.add("error_effect");
    method.property = false;
} else {
    errorMsgSmall[index].style.display = "none";
    inputElement.classList.remove("error_effect");
    method.property = true;
}
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputName.addEventListener("input", function () {
  const name = inputName.value;
  cardOwner.textContent = name;
  if (name === "" || !name.trim()) {
    cardOwner.textContent = "jane applesseed";
  }
});

inputCardNumber.addEventListener("input", function () {
  const cardValues = inputCardNumber.value.split("");

  for (let i = 0; i < cardNumbers.length; i++) {
    if (cardValues[i]) {
      cardNumbers[i].textContent = cardValues[i];
    } else {
      cardNumbers[i].textContent = "0";
    }
  }
});

inputMonth.addEventListener("input", function () {
  let leftover;
  if (inputMonth.value > 12) {
    leftover = inputMonth.value - 12;
    inputMonth.value = inputMonth.value - leftover;
    console.log(leftover);
  } else if (inputMonth.value < 0) {
    inputMonth.value = 0;
  }
  const month = inputMonth.value;
  cardMaturityMonth.textContent = month > 0 && month < 10 ? "0" + month : month;
  cardMaturityMonth.textContent = !month.trim() ? "00" : month;
  if (cardMaturityMonth.textContent.length > 2) {
    cardMaturityMonth.textContent = cardMaturityMonth.textContent.slice(0, 2);
  }
});

inputYear.addEventListener("input", function () {
  const year = inputYear.value;
  cardMaturityYear.textContent = year > 0 && year < 10 ? "0" + year : year;
  cardMaturityYear.textContent = !year.trim() ? "00" : year;
  if (cardMaturityYear.textContent.length > 2) {
    cardMaturityYear.textContent = cardMaturityYear.textContent.slice(0, 2);
  }
});

inputCvc.addEventListener("input", function () {
  let cvc = inputCvc.value.split("");

  for (let i = 0; i < cardCvc.length; i++) {
    if (cvc[i]) {
      cardCvc[i].textContent = cvc[i];
    } else {
      cardCvc[i].textContent = "0";
    }
  }
});

btn_submit.addEventListener("click", function () {
  const inputValid = {
    nameIsValid: false,
    cardNumberIsValid: false,
    monthIsValid: false,
    yearIsValid: false,
    cvcIsValid: false,
  }

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=',
    '+', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',',
    '.', '/', '?', '~', '`'];
    
  letters.forEach((item) => {
    item.toUpperCase();
    if (inputCardNumber.value.includes(item) || !inputCardNumber.value.trim() || inputCardNumber.value.length < 16) {
      errorMsgSmall[1].style.display = "block";
      inputCardNumber.classList.add("error_effect");
      inputValid.cardNumberIsValid = false;
    } else {
      errorMsgSmall[1].style.display = "none";
      inputCardNumber.classList.remove("error_effect");
      inputValid.cardNumberIsValid = true;
    }
  });

  showErrorMsgAndValidty(inputName, 0, "inputValid", "nameIsValid");
  showErrorMsgAndValidty(inputMonth, 2, "inputValid", "monthIsValid");
  showErrorMsgAndValidty(inputYear, 2, "inputValid", "yearIsValid");
  showErrorMsgAndValidty(inputCvc, 3, "inputValid", "cvcIsValid");

  if (inputValid.nameIsValid && inputValid.cardNumberIsValid && inputValid.monthIsValid && inputValid.yearIsValid && inputValid.cvcIsValid) {
    alert("Dado é válido.");
  }

});
