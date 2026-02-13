// this is front-end js, so it lives in the public folder
window.onload = () => {
  messageRequest();
};

const messageRequest = async () => {
  // we can use a relative path because we are making the request from the same server
  const response = await fetch("/all-messages");
  console.log(response);
  const json = await response.json();
  console.log(json);

  let guests = json.guests;
  for (let g of guests) {
    let message = document.createElement("p");
    let name = document.createElement("span");
    message.textContent = g.post;
    name.textContent = g.guest;
    message.appendChild(name);
    document.body.appendChild(message);
  }
};
