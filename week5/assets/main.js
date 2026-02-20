// this prints null because the page hasn't finished loading
// console.log(document.body);

window.onload = () => {
  console.log(document.body);
  init();
};

const init = async () => {
  console.log(document.body);

  const request = await fetch("/all-posts");
  console.log(request);
  const json = await request.json();
  console.log(json);

  for (let post of json.posts) {
    let div = document.createElement("div");
    let username = document.createElement("span");
    let content = document.createElement("p");

    // username.textContent = post.username + " " + post.time;
    username.textContent = `${post.username} ${post.time}`;
    content.textContent = post.content;

    div.classList.add("post");

    div.appendChild(username);
    div.appendChild(content);

    document.body.appendChild(div);
  }
};

// BAD BAD BAD SHAME SHAME SHAME
// init()
