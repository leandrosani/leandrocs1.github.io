const form = document.getElementById("appointment-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const appointment = {
    name: name,
    email: email,
    phone: phone,
    service: service,
    date: date,
    time: time
  };

  fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(appointment)
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("Erro:", error));

  form.reset();
});