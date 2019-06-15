const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const messageTag = document.getElementById("#message");

messageTag.textContent = "";

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  messageTag.textContent = "Loading ...";

  fetch(`/weather?address=${location}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        messageTag.textContent = data.error;
      } else {
        messageTag.textContent = data.forecast + " (" + data.location + ")";
      }
    });
});
