const product = document.getElementById("product");
const username = document.getElementById("name");
const email = document.getElementById("email");
const review = document.getElementById("review");
const submitBTN = document.getElementById("submit");
const charLimit = document.querySelector(".limit");
submitBTN.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fill out all fields correctly.");
  }
});
function validateForm() {
  if (
    product.value === "" ||
    username.value.length < 4 ||
    email.value === "" ||
    review.value.length < 20 ||
    review.value.length > 200
  ) {
    return false;
  } else return true;
}
function charCount() {
  charLimit.innerHTML = `Characters left: ${200 - review.value.length}`;
  if (review.value.length > 200) {
    charLimit.innerHTML = `you have reached the limit of 200 characters`;
    charLimit.style.color = "red";
    review.style.border = "2px solid red";
  } else {
    charLimit.style.color = "black";
    review.style.border = "2px solid black";
  }
}

review.addEventListener("input", charCount);
