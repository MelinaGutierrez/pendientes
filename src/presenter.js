const first = document.querySelector("#ToDo");
const second = document.querySelector("#categoria");
const form = document.querySelector("#form-ToDo");

const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;
  const secondNumber = second.value;

  div.innerHTML = div.innerHTML + "<p> - " +firstNumber + " [ "+secondNumber + " ] "+ "</p>";
 
});

